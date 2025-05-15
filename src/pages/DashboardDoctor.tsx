import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Patient {
  id: number;
  name: string;
  date: string;
  diag: string;
}

const DashboardDoctor: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get('/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2>
            Bonjour <span className="text-primary">Dr. Amina HAMIDA</span>
          </h2>
          <p className="text-muted">Bonne journée au travail !</p>
        </div>
        <div>
          <img src="/doc1-removebg-preview 1.png" alt="doctor" style={{ width: '100px' }} />
        </div>
      </div>

      {/* Patients Section */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Les Patients</h4>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Date</th>
              <th>Diagnostic</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.date}</td>
                  <td>{p.diag}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Voir</button>
                    <button className="btn btn-sm btn-warning ms-2">Modifier</button>
                    <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  Chargement des patients...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardDoctor;
