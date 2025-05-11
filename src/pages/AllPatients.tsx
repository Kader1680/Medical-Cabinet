import React from 'react';

interface Patient {
  name: string;
  date: string;
  diag: string;
}

const patients: Patient[] = [
  { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Fièvre' },
  { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Toux' },
  { name: 'Rania Fadel', date: '20 mar 2025', diag: 'Otite' },
  { name: 'Omar Saleh', date: '19 mar 2025', diag: 'Angine' },
  { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Grippe' },
  { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Grippe' },
];

const AllPatients: React.FC = () => {
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
            <img src="/doc1-removebg-preview 1.png" alt="" />
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.date}</td>
              <td>{patient.diag}</td>
              <td>
                <button className="btn btn-primary btn-sm">Voir Dossier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <span className="text-muted" style={{ cursor: 'pointer' }}>Voir plus</span>
      </div>
    </div>
  );
};

export default AllPatients;
