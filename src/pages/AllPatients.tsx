import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Patient {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  genre: string;
  adresse: string;
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
        console.error('Erreur lors du chargement des patients. Données fictives utilisées :', error);

      
        const fakePatients: Patient[] = [
          {
            id: 1,
            nom: 'Bougherra',
            prenom: 'Sami',
            email: 'sami.bougherra@example.com',
            telephone: '0554 12 34 56',
            genre: 'Homme',
            adresse: 'Alger, Algérie',
          },
          {
            id: 2,
            nom: 'Haddad',
            prenom: 'Leila',
            email: 'leila.haddad@example.com',
            telephone: '0661 98 76 54',
            genre: 'Femme',
            adresse: 'Oran, Algérie',
          },
          {
            id: 3,
            nom: 'Belkacem',
            prenom: 'Karim',
            email: 'karim.belkacem@example.com',
            telephone: '0777 45 23 19',
            genre: 'Homme',
            adresse: 'Constantine, Algérie',
          },
        ];
        setPatients(fakePatients);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mt-4 ms-5">
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
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Genre</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} className="text-center text-muted">
                Chargement...
              </td>
            </tr>
          ) : patients.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center text-muted">
                Aucun patient trouvé.
              </td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr style={{color:"red"}} key={patient.id}>
                <td>{patient.nom}</td>
                <td>{patient.prenom}</td>
                <td>{patient.email}</td>
                <td>{patient.telephone}</td>
                <td>{patient.genre}</td>
                <td>{patient.adresse}</td>
                <td>
                  <button className="btn btn-primary btn-sm rounded-5">Voir Dossier</button>
             
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
