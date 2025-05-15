import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Patient = {
  id: number;
  name: string;
  date: string;
  diag: string;
};

type Rendezvous = {
  id: number;
  name: string;
  date: string;
  time: string;
  status: string;
};

const DashboardSecretaire: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [rendezvous, setRendezvous] = useState<Rendezvous[]>([]);

  const fetchPatients = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/patients');
      setPatients(res.data);
    } catch (err) {
      console.error('Error fetching patients:', err);
    }
  };

  const fetchRendezvous = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/rendezvous');
      setRendezvous(res.data);
    } catch (err) {
      console.error('Error fetching rendezvous:', err);
    }
  };

  const deletePatient = async (id: number) => {
    if (window.confirm('Supprimer ce patient ?')) {
      try {
        await axios.delete(`http://localhost:3000/api/patients/${id}`);
        setPatients(prev => prev.filter(p => p.id !== id));
      } catch (err) {
        console.error('Erreur lors de la suppression du patient:', err);
      }
    }
  };

  const deleteRendezvous = async (id: number) => {
    if (window.confirm('Supprimer ce rendez-vous ?')) {
      try {
        await axios.delete(`http://localhost:3000/api/rendezvous/${id}`);
        setRendezvous(prev => prev.filter(r => r.id !== id));
      } catch (err) {
        console.error('Erreur lors de la suppression du rendez-vous:', err);
      }
    }
  };

  const modifierRendezvous = async (id: number) => {
    const updatedTime = prompt("Nouvelle heure (HH:MM):");
    if (updatedTime) {
      try {
        const response = await axios.put(`http://localhost:3000/api/rendezvous/${id}`, {
          time: updatedTime,
          status: 'modifié'
        });
        setRendezvous(prev =>
          prev.map(r =>
            r.id === id ? { ...r, time: updatedTime, status: 'modifié' } : r
          )
        );
      } catch (err) {
        console.error('Erreur lors de la modification du rendez-vous:', err);
      }
    }
  };

  useEffect(() => {
    fetchPatients();
    fetchRendezvous();
  }, []);

  return (
    <div className="container mt-4">
      {/* Greeting */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2>Bonjour <span className="text-primary">Mme. Secrétaire</span></h2>
          <p className="text-muted">Bienvenue dans le tableau de bord.</p>
        </div>
        <div>
          <img src="/secretaire.png" alt="secretaire" style={{ width: '100px' }} />
        </div>
      </div>

      <section className="mb-5">
        <h4 className="text-secondary mb-3">Rendez-vous</h4>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom du patient</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rendezvous.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>{r.time}</td>
                <td>
                  <span className={`badge ${r.status === 'modifié' ? 'bg-warning text-dark' : 'bg-danger text-light'}`}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => modifierRendezvous(r.id)}>Modifier</button>
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteRendezvous(r.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Patients Section */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Les Patients</h4>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Date d'inscription</th>
              <th>Diagnostic</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.diag}</td>
                <td>
                  <button className="btn btn-sm btn-info">Voir</button>
                  <button className="btn btn-sm btn-warning ms-2">Modifier</button>
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => deletePatient(p.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardSecretaire;
