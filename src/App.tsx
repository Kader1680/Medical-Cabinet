import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import "./App.css"
import SidebarNavbar from './components/Sidebar';
import ConsultationForm from './pages/ConsultationForm';
import AddSecretaryForm from './pages/AddSecretaryForm';
import AddPatientForm from './pages/AddPatientForm ';
import NewAppointmentForm from './pages/NewAppointmentForm';
const App: React.FC = () => {
  return (
   <div className=' container'>
    <SidebarNavbar />
      {/* <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
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
            <img src="/doc1-removebg-preview 1.png" alt="" />
          </div>
        </div>

        <h5>Mes Consultations</h5>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date Du Consultation</th>
              <th>Diagnostique</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Fièvre' },
              { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Toux' },
              { name: 'Rania Fadel', date: '20 mar 2025', diag: 'Otite' },
              { name: 'Omar Saleh', date: '19 mar 2025', diag: 'Angine' },
              { name: 'Layla Hassan', date: '21 mar 2025', diag: 'Grippe' },
              { name: 'Tariq Mahmoud', date: '21 mar 2025', diag: 'Grippe' },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.diag}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Voir Dossier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-4">
          <span className="text-muted">voir plus</span>
        </div>
      </div> */}



     <Router>
      <Routes>
        {/* ConsultationForm */}
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/consultationform" element={<ConsultationForm />} />
        <Route path="/add-secretary" element={<AddSecretaryForm />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/add-NewAppointmentForm" element={<NewAppointmentForm />} />
        {/*  */}
      </Routes>
    </Router>
   </div>
  );
};

export default App;
