import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Rendezvous = {
  id: number;
  name: string;
  date: string;
  time: string;
  status: string;
};

const RendezvousEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rendezvous, setRendezvous] = useState<Rendezvous | null>(null);

  useEffect(() => {
    // Simule une requête vers une API pour obtenir les données du rendez-vous
    const fakeData: Rendezvous[] = [
      { id: 1, name: 'Ahmed Benali', date: '2024-05-10', time: '09:00', status: 'en attente' },
      { id: 2, name: 'Leila Haddad', date: '2024-05-10', time: '10:00', status: 'confirmé' },
      { id: 3, name: 'Karim Belkacem', date: '2024-05-11', time: '11:00', status: 'modifié' },
    ];

    const selected = fakeData.find(r => r.id === Number(id));
    if (selected) {
      setRendezvous(selected);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!rendezvous) return;
    const { name, value } = e.target;
    setRendezvous({ ...rendezvous, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Rendez-vous mis à jour :\n${JSON.stringify(rendezvous, null, 2)}`);
    navigate('/secretaire/rendezvous');
  };

  if (!rendezvous) return <div>Chargement...</div>;

  return (
    <div className="container mt-4 ms-5">
      <h3>Modifier le Rendez-vous</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom du patient</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={rendezvous.name}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={rendezvous.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Heure</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={rendezvous.time}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Statut</label>
          <select
            className="form-select"
            name="status"
            value={rendezvous.status}
            onChange={handleChange}
          >
            <option value="en attente">En attente</option>
            <option value="confirmé">Confirmé</option>
            <option value="modifié">Modifié</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate(-1)}>Annuler</button>
      </form>
    </div>
  );
};

export default RendezvousEditPage;
