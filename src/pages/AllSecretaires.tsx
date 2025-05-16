import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface Secretaire {
  id: number;
  nom: string;
  dateNaissance: string;
  numero: string;
}

const AllSecretaires: React.FC = () => {
  const [secretaires, setSecretaires] = useState<Secretaire[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSecretaires();
  }, []);

  const fetchSecretaires = async () => {
    try {
      const res = await api.get('/secretaires');
      setSecretaires(res.data);
    } catch (error) {
      console.error('Erreur API, données fictives utilisées :', error);
      setSecretaires([
        { id: 1, nom: 'Kenza Bouzid', dateNaissance: '1992-06-15', numero: '567890' },
        { id: 2, nom: 'Amine Zeroual', dateNaissance: '1990-11-20', numero: '567890' },
        { id: 3, nom: 'Salima Mekki', dateNaissance: '1995-03-02', numero: '567890' },
        { id: 4, nom: 'Rachid Benameur', dateNaissance: '1988-08-09', numero: '567890' },
      ]);
    }
  };

  const handleEditClick = (id: number) => {
    navigate(`/edit-secretaire/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher un(e) secrétaire"
            className="form-control w-50"
          />
          <button style={{ backgroundColor: "#3842E2" }} className="btn btn-primary">
            <a className="text-white text-decoration-none" href="/manage-secritaire">+ Ajouter Secrétaire</a>
          </button>
        </div>

        <div className="mb-4 d-flex justify-content-around align-items-center">
          <div>
            <h2>
              Bonjour <span className="text-primary">Dr. Amina HAMIDA</span>
            </h2>
            <p className="text-muted">Bonne journée au travail !</p>
          </div>
          <div>
            <img src="/doc1-removebg-preview 1.png" alt="docteur" />
          </div>
        </div>

        <h5>Liste des Secrétaires</h5>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Date de naissance</th>
              <th>Numéro</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {secretaires.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.nom}</td>
                <td>{row.dateNaissance}</td>
                <td>{row.numero}</td>
                <td>
                  <button
                    style={{ backgroundColor: "#3842E2" }}
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditClick(row.id)}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSecretaires;
