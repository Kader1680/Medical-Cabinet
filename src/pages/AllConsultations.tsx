import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Consultation {
  id: number;
  name: string;
  date: string;
  diag: string;
}

const AllConsultations: React.FC = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newDiag, setNewDiag] = useState<string>('');

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const res = await api.get('/consultations');
      setConsultations(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des consultations, données fictives utilisées:", error);
      // ✅ Fallback fake data
      setConsultations([
        { id: 1, name: "Sami Bougherra", date: "2024-04-01", diag: "Grippe aiguë" },
        { id: 2, name: "Leila Haddad", date: "2024-04-05", diag: "Tension artérielle" },
        { id: 3, name: "Karim Belkacem", date: "2024-04-10", diag: "Infection ORL" },
        { id: 4, name: "Nour El Houda", date: "2024-04-15", diag: "Diabète Type 2" },
      ]);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/consultations/${id}`);
      setConsultations(consultations.filter(c => c.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  const openEditModal = (index: number) => {
    setSelectedIndex(index);
    setNewDiag(consultations[index].diag);
    const modal = new (window as any).bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  };

  const handleUpdate = async () => {
    if (selectedIndex === null) return;

    const consultation = consultations[selectedIndex];

    try {
      await api.put(`/consultations/${consultation.id}`, { diag: newDiag });
      const updated = [...consultations];
      updated[selectedIndex].diag = newDiag;
      setConsultations(updated);

      const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('editModal'));
      modal.hide();
    } catch (error) {
      console.error("Erreur lors de la mise à jour", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher un patient"
            className="form-control w-50"
          />
          <button className="btn btn-primary">
            <a  className ="text-white" href="/consultationform">+ Nouvelle Consultation</a>
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

        <h5>Mes Consultations</h5>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>id</th>
              <th>Nom</th>
              <th>Date du Consultation</th>
              <th>Diagnostique</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.diag}</td>
                <td>
                  <button className="btn btn-primary btn-sm rounded-5">Voir consultation</button>
      
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-4">
          <span className="text-muted">voir plus</span>
        </div>
      </div>

      {/* Modal Bootstrap pour modifier le diagnostic */}
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
              <h5 className="modal-title" id="editModalLabel">Modifier le diagnostic</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={newDiag}
                onChange={(e) => setNewDiag(e.target.value)}
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

export default AllConsultations;
