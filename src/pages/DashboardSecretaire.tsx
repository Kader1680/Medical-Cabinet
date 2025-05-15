import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Patient = {
  name: string;
  date: string;
  diag: string;
};

type Rendezvous = {
  name: string;
  date: string;
  time: string;
  status: string;
};

const DashboardSecretaire: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [rendezvous, setRendezvous] = useState<Rendezvous[]>([]);

  useEffect(() => {
    axios.get('/api/patients') 
      .then(res => setPatients(res.data))
      .catch(err => console.error('Error fetching patients:', err));

    // Fetch rendezvous
    axios.get('/api/rendezvous') 
      .then(res => setRendezvous(res.data))
      .catch(err => console.error('Error fetching rendezvous:', err));
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

      {/* Rendez-vous Section */}
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
            {rendezvous.map((r, i) => (
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>{r.time}</td>
                <td>
                  <span className={`badge ${r.status === 'modifie' ? 'bg-warning' : 'bg-danger text-dark'}`}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Modifier</button>
                  <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
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
            {patients.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.diag}</td>
                <td>
                  <button className="btn btn-sm btn-info">Voir</button>
                  <button className="btn btn-sm btn-warning ms-2">Modifier</button>
                  <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
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
