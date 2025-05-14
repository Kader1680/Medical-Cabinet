import React, { useState } from 'react';

const initialRendezvous = [
  { id: 1, name: 'Ali Benyamina', date: '22 Mar 2025', time: '10:00', status: 'modifie' },
  { id: 2, name: 'Yasmine Khaled', date: '22 Mar 2025', time: '11:00', status: 'annule' },
];

const RendezVousSecretaire = () => {
  const [rendezvous, setRendezvous] = useState(initialRendezvous);

  const modifier = (id: number) => {
    const updatedTime = prompt('Nouvelle heure (HH:MM):');
    if (updatedTime) {
      setRendezvous(prev =>
        prev.map(r => (r.id === id ? { ...r, time: updatedTime, status: 'modifié' } : r))
      );
    }
  };

  const annuler = (id: number) => {
    setRendezvous(prev =>
      prev.map(r => (r.id === id ? { ...r, status: 'annulé' } : r))
    );
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
              <td>{r.status}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => modifier(r.id)}>
                  Modifier
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => annuler(r.id)}>
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
