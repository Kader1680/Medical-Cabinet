import React, { useState } from 'react';
import axios from 'axios'; // ✅ Import axios

const initialRendezvous = [
  { id: 1, name: 'Ali Benyamina', date: '22 Mar 2025', time: '10:00', status: 'modifié' },
  { id: 2, name: 'Yasmine Khaled', date: '22 Mar 2025', time: '11:00', status: 'annulé' },
];

const RendezVousSecretaire: React.FC = () => {
  const [rendezvous, setRendezvous] = useState(initialRendezvous);

  const modifier = async (id: number) => {
    const updatedTime = prompt('Nouvelle heure (HH:MM):');
    if (updatedTime) {
      try {
        const response = await axios.put(`http://localhost:3000/api/rendezvous/${id}`, {
          time: updatedTime,
          status: 'modifié',
        });

        setRendezvous(prev =>
          prev.map(r =>
            r.id === id ? { ...r, time: updatedTime, status: 'modifié' } : r
          )
        );
        console.log('Rendez-vous mis à jour:', response.data);
      } catch (error) {
        console.error('Erreur lors de la modification:', error);
      }
    }
  };

  const annuler = async (id: number) => {
    if (window.confirm('Voulez-vous vraiment annuler ce rendez-vous ?')) {
      try {
        const response = await axios.put(`http://localhost:3000/api/rendezvous/${id}`, {
          status: 'annulé',
        });

        setRendezvous(prev =>
          prev.map(r =>
            r.id === id ? { ...r, status: 'annulé' } : r
          )
        );
        console.log('Rendez-vous annulé:', response.data);
      } catch (error) {
        console.error('Erreur lors de l\'annulation:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h3>Rendez-vous de la Secrétaire</h3>
      <table className="table table-bordered mt-3">
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
                <span className={`badge ${r.status === 'modifié' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                  {r.status}
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-sm">Voir</button>
                <button
                  className="btn btn-warning btn-sm ms-2"
                  onClick={() => modifier(r.id)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => annuler(r.id)}
                >
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RendezVousSecretaire;
