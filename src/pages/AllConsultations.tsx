import React, { useState } from 'react';

interface Consultation {
  name: string;
  date: string;
  diag: string;
}

const AllConsultations: React.FC = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([
    { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Fièvre' },
    { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Toux' },
    { name: 'Rania Fadel', date: '20 mar 2025', diag: 'Otite' },
    { name: 'Omar Saleh', date: '19 mar 2025', diag: 'Angine' },
    { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Grippe' },
    { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Grippe' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [newDiag, setNewDiag] = useState<string>('');

  const handleDelete = (index: number) => {
    const updated = consultations.filter((_, i) => i !== index);
    setConsultations(updated);
  };

  const openEditModal = (index: number) => {
    setSelectedIndex(index);
    setNewDiag(consultations[index].diag);
    const modal = new (window as any).bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  };

  const handleUpdate = () => {
    if (selectedIndex === null) return;
    const updated = [...consultations];
    updated[selectedIndex].diag = newDiag;
    setConsultations(updated);
    const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
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
          <button className="btn btn-primary">+ Nouvelle Consultation</button>
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
              <th>Nom</th>
              <th>Date du Consultation</th>
              <th>Diagnostique</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.diag}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => openEditModal(index)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-4">
          <span className="text-muted">voir plus</span>
        </div>
      </div>

      {/* Bootstrap Modal */}
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
              <h5 className="modal-title" id="editModalLabel">
                Modifier le diagnostic
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
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
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Annuler
              </button>
              <button className="btn btn-primary" onClick={handleUpdate}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllConsultations;
