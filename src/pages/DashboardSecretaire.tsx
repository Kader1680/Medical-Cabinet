import React from 'react';

const DashboardSecretaire: React.FC = () => {
  const patients = [
    { name: 'Layla Hassan', date: '21 Mar 2025', diag: 'Fièvre' },
    { name: 'Tariq Mahmoud', date: '20 Mar 2025', diag: 'Toux' },
    { name: 'Rania Fadel', date: '19 Mar 2025', diag: 'Otite' },
  ];

  const rendezvous = [
    { name: 'Ali Benyamina', date: '22 Mar 2025', time: '10:00', status: 'modifie' },
    { name: 'Yasmine Khaled', date: '22 Mar 2025', time: '11:00', status: 'annule' },
  ];

  return (
    <div className="container mt-4">
      {/* Greeting */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2>
            Bonjour <span className="text-primary">Mme. Secrétaire</span>
          </h2>
          <p className="text-muted">Bienvenue dans le tableau de bord.</p>
        </div>
        <div>
          <img src="/secretaire.png" alt="secretaire" style={{ width: '100px' }} />
        </div>
      </div>

      {/* Section: Rendez-vous */}
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

      {/* Section: Les Patients */}
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
