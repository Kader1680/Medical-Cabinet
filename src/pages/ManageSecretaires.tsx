import React, { useEffect, useState } from 'react';
import api from '../services/api'; // central axios instance

type Secretaire = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
};

const ManageSecretaires: React.FC = () => {
  const [secretaires, setSecretaires] = useState<Secretaire[]>([]);
  const [formData, setFormData] = useState<Omit<Secretaire, 'id'>>({
    nom: '',
    prenom: '',
    email: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load all secretaires on mount
  useEffect(() => {
    api.get('/secretaires')
      .then(res => setSecretaires(res.data))
      .catch(err => console.error('Erreur chargement des secrétaires:', err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update
      try {
        const res = await api.put(`/secretaires/${editingId}`, formData);
        setSecretaires(prev =>
          prev.map(sec => (sec.id === editingId ? res.data : sec))
        );
        setEditingId(null);
      } catch (err) {
        console.error('Erreur mise à jour:', err);
      }
    } else {
      // Create
      try {
        const res = await api.post('/secretaires', formData);
        setSecretaires(prev => [...prev, res.data]);
      } catch (err) {
        console.error('Erreur ajout:', err);
      }
    }

    setFormData({ nom: '', prenom: '', email: '' });
  };

  const handleEdit = (sec: Secretaire) => {
    setEditingId(sec.id);
    setFormData({ nom: sec.nom, prenom: sec.prenom, email: sec.email });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette secrétaire ?')) return;

    try {
      await api.delete(`/secretaires/${id}`);
      setSecretaires(prev => prev.filter(sec => sec.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setFormData({ nom: '', prenom: '', email: '' });
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Gestion des Secrétaires</h3>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId !== null ? 'Mettre à jour' : 'Ajouter'}
        </button>
        {editingId !== null && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditingId(null);
              setFormData({ nom: '', prenom: '', email: '' });
            }}
          >
            Annuler
          </button>
        )}
      </form>

      {/* Liste des secrétaires */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {secretaires.map(sec => (
            <tr key={sec.id}>
              <td>{sec.nom}</td>
              <td>{sec.prenom}</td>
              <td>{sec.email}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(sec)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(sec.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSecretaires;
