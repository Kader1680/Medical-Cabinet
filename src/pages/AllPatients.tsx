import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Patient {
  id: number;
  name: string;
  date: string;
  diag: string;
}

const AllPatients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get('/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des patients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mt-4">
      <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher un patient"
            className="form-control w-50"
          />
          <button className="btn btn-primary">+ Nouvel patient</button>
        </div>

        <div className="mb-4 d-flex justify-content-around align-items-center">
          <div>
            <h2>
              Bonjour <span className="text-primary">Dr. Amina HAMIDA</span>
            </h2>
            <p className="text-muted">Bonne journée au travail !</p>
          </div>
          <div>
            <img src="/doc1-removebg-preview 1.png" alt="Doctor" />
          </div>
        </div>
      </div>

      <h5>Tous les Patients</h5>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date de Consultation</th>
            <th>Diagnostique</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                Chargement...
              </td>
            </tr>
          ) : patients.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                Aucun patient trouvé.
              </td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.date}</td>
                <td>{patient.diag}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Voir Dossier</button>
                  <button className="btn btn-warning btn-sm ms-2">Update</button>
                  <button className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="text-center mt-4">
        <span className="text-muted" style={{ cursor: 'pointer' }}>Voir plus</span>
      </div>
    </div>
  );
};

export default AllPatients;
