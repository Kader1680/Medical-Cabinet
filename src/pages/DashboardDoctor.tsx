import React from 'react';

const DashboardDoctor: React.FC = () => {
  const patients = [
    { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Fièvre' },
    { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Toux' },
    { name: 'Rania Fadel', date: '20 mar 2025', diag: 'Otite' },
    { name: 'Omar Saleh', date: '19 mar 2025', diag: 'Angine' },
  ];

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

      {/* Section: Rendez-vous */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Rendez-vous</h4>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yasmine Khaled</td>
              <td>22 Mar 2025</td>
              <td>10:00</td>
              <td><span className="badge bg-success">Confirmé</span></td>
            </tr>
            <tr>
              <td>Ali Benyamina</td>
              <td>22 Mar 2025</td>
              <td>11:30</td>
              <td><span className="badge bg-warning text-dark">En attente</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section: Consultations */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Consultations</h4>
        <ul className="list-group">
          <li className="list-group-item">Fièvre persistante - 21 Mar 2025</li>
          <li className="list-group-item">Toux sèche - 20 Mar 2025</li>
          <li className="list-group-item">Suivi post-opératoire - 19 Mar 2025</li>
        </ul>
      </section>

      {/* Section: Patients */}
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
            {patients.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.diag}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Voir</button>
                  <button className="btn btn-sm btn-warning ms-2">Modifier</button>
                  <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section: Comptes Secrétaires */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Comptes Secrétaires</h4>
        <table className="table table-striped">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samira Bouchareb</td>
              <td>samira@clinique.dz</td>
              <td><span className="badge bg-success">Actif</span></td>
              <td>
                <button className="btn btn-sm btn-warning">Modifier</button>
                <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
              </td>
            </tr>
            <tr>
              <td>Karim Meziane</td>
              <td>karim@clinique.dz</td>
              <td><span className="badge bg-secondary">Inactif</span></td>
              <td>
                <button className="btn btn-sm btn-warning">Modifier</button>
                <button className="btn btn-sm btn-danger ms-2">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section: Dossiers Médicaux */}
      <section className="mb-5">
        <h4 className="text-secondary mb-3">Dossiers Médicaux</h4>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Layla Hassan</h5>
                <p className="card-text">Antécédents : Asthme, Allergie à la pénicilline</p>
                <button className="btn btn-outline-primary btn-sm">Voir dossier</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tariq Mahmoud</h5>
                <p className="card-text">Antécédents : Hypertension, Diabète</p>
                <button className="btn btn-outline-primary btn-sm">Voir dossier</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tariq Mahmoud</h5>
                <p className="card-text">Antécédents : Hypertension, Diabète</p>
                <button className="btn btn-outline-primary btn-sm">Voir dossier</button>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default DashboardDoctor;
