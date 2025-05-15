import React, { useState } from 'react';

const initialRendezvous = [
  { id: 1, name: 'Ali Benyamina', date: '22 Mar 2025', time: '10:00', status: 'modifie' },
  { id: 2, name: 'Yasmine Khaled', date: '22 Mar 2025', time: '11:00', status: 'annule' },
];

const RendezVousMedecin = () => {
  const [rendezvous, setRendezvous] = useState(initialRendezvous);

  const confirmer = (id: number) => {
    setRendezvous(prev =>
      prev.map(r => (r.id === id ? { ...r, status: 'confirmé' } : r))
    );
  };

  const annuler = (id: number) => {
    setRendezvous(prev =>
      prev.map(r => (r.id === id ? { ...r, status: 'annulé' } : r))
    );
  };

  return (
    <div className="container mt-5">
      <h3>Rendez-vous du Médecin</h3>
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
                <button className="btn btn-primary btn-sm ">Voir</button>
                <button className="btn btn-warning btn-sm ms-2">confirme</button>
                <button className="btn btn-danger btn-sm ms-2">anulee</button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RendezVousMedecin;
