import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Patient = {
  id: number;
  name: string;
  date: string;
  diag: string;
};

type Rendezvous = {
  id: number;
  name: string;
  date: string;
  time: string;
  status: string;
};

const DashboardSecretaire: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [rendezvous, setRendezvous] = useState<Rendezvous[]>([]);

  const fetchPatients = async () => {
    const fakePatients: Patient[] = [
      { id: 1, name: 'Ahmed Benali', date: '2024-05-01', diag: 'Rhume' },
      { id: 2, name: 'Leila Haddad', date: '2024-05-02', diag: 'Fièvre' },
      { id: 3, name: 'Karim Belkacem', date: '2024-05-03', diag: 'Diabète' },
    ];
    setPatients(fakePatients);
  };

  const fetchRendezvous = async () => {
    const fakeRendezvous: Rendezvous[] = [
      { id: 1, name: 'Ahmed Benali', date: '2024-05-10', time: '09:00', status: 'en attente' },
      { id: 2, name: 'Leila Haddad', date: '2024-05-10', time: '10:00', status: 'modifié' },
      { id: 3, name: 'Karim Belkacem', date: '2024-05-11', time: '11:00', status: 'en attente' },
    ];
    setRendezvous(fakeRendezvous);
  };

  const deletePatient = async (id: number) => {
    if (window.confirm('Supprimer ce patient ?')) {
      setPatients(prev => prev.filter(p => p.id !== id));
    }
  };

  const deleteRendezvous = async (id: number) => {
    if (window.confirm('Supprimer ce rendez-vous ?')) {
      setRendezvous(prev => prev.filter(r => r.id !== id));
    }
  };

  const modifierRendezvous = async (id: number) => {
    const updatedTime = prompt("Nouvelle heure (HH:MM):");
    if (updatedTime) {
      setRendezvous(prev =>
        prev.map(r =>
          r.id === id ? { ...r, time: updatedTime, status: 'modifié' } : r
        )
      );
    }
  };

  const confirmyRendezvous = (id: number) => {
    if (window.confirm('Confirmer ce rendez-vous ?')) {
      setRendezvous(prev =>
        prev.map(r =>
          r.id === id ? { ...r, status: 'confirmé' } : r
        )
      );
    }
  };

  useEffect(() => {
    fetchRendezvous();
  }, []);

  const item = localStorage.getItem('role');
  const role = item;

  return (
    <div className="container mt-4 ms-5">
     


       <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher un patient"
            className="form-control w-50"
          />
           {role === "secretaire" && (
                  <a href ='/add-NewAppointmentForm'> <button className="btn btn-primary">+ Nouvel rendi-vous</button></a>
           )}


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



      <section className="mb-5 ms-5">
        <h4 className="text-secondary mb-3">Rendez-vous</h4>
        <table className="table table-borderless ">
          <thead>
            <tr>
              <th>Nom du patient</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {rendezvous.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>{r.time}</td>
        
                <td>
                  {role === "medecine" && (
                    <>
                      <button
                        style={{ backgroundColor: "#37B846" }}
                        className="btn btn-sm btn rounded-5 text-white"
                        onClick={() => confirmyRendezvous(r.id)}
                      >
                        Confirmer
                      </button>
                      <button
                        style={{ backgroundColor: "#B83746" }}
                        className="btn btn-sm btn-danger ms-2 rounded-5"
                        onClick={() => deleteRendezvous(r.id)}
                      >
                        Annuler
                      </button>
                    </>
                  )}
                  <button
                    style={{ backgroundColor: "#B83746" }}
                    className="btn btn-sm bg-warning  text-white ms-2 rounded-5"
               
                  >

                    {/* /secretaire/rendezvous/edit/{r.id} */}
                 <Link className=' text-white text-decoration-none' to={`/secretaire/rendezvous/edit/${r.id}`}>Modifier</Link>

                  </button>
                  <button
                    style={{ backgroundColor: "#B83746" }}
                    className="btn btn-sm btn-warning text-white ms-2 rounded-5"
                    onClick={() => deleteRendezvous(r.id)}
                  >
                    Annuler
                  </button>
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
