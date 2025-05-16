import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Secretaire {
  id: number;
  nom: string;
  dateNaissance: string;
  numero: string;
}

const AllSecretaires: React.FC = () => {
  const [secretaires, setSecretaires] = useState<Secretaire[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newNumero, setNewNumero] = useState<string>('');

  useEffect(() => {
    fetchSecretaires();
  }, []);

  const fetchSecretaires = async () => {
    try {
      const res = await api.get('/secretaires');
      setSecretaires(res.data);
    } catch (error) {
      console.error('Erreur API, données fictives utilisées :', error);
      // ✅ Fake data fallback
      setSecretaires([
        { id: 1, nom: 'Kenza Bouzid', dateNaissance: '1992-06-15', numero: '567890' },
        { id: 2, nom: 'Amine Zeroual', dateNaissance: '1990-11-20', numero: '567890' },
        { id: 3, nom: 'Salima Mekki', dateNaissance: '1995-03-02', numero: '567890' },
        { id: 4, nom: 'Rachid Benameur', dateNaissance: '1988-08-09', numero: '567890' },
      ]);
    }
  };

  const openEditModal = (index: number) => {
    setSelectedIndex(index);
    setNewNumero(secretaires[index].numero);
    const modal = new (window as any).bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  };

  const handleUpdate = async () => {
    if (selectedIndex === null) return;

    const secretaire = secretaires[selectedIndex];

    try {
      await api.put(`/secretaires/${secretaire.id}`, { numero: newNumero });
      const updated = [...secretaires];
      updated[selectedIndex].numero = newNumero;
      setSecretaires(updated);

      const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('editModal'));
      modal.hide();
    } catch (error) {
      console.error('Erreur de mise à jour', error);
    }
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
          <button style={{backgroundColor:"#3842E2"}} className="btn btn-primary">
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
            {secretaires.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.nom}</td>
                <td>{row.dateNaissance}</td>
                <td>{row.numero}</td>
                <td>
                  <button style={{backgroundColor:"#3842E2"}} className="btn btn-primary btn-sm" onClick={() => openEditModal(index)}>Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Modifier le numéro du secrétaire</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={newNumero}
                onChange={(e) => setNewNumero(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button className="btn btn-primary" onClick={handleUpdate}>Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSecretaires;
