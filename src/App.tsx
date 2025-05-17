import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "./App.css"
import SidebarNavbar from './components/Sidebar';
import ConsultationForm from './pages/ConsultationForm';
import AddSecretaryForm from './pages/AddSecretaryForm';
import AddPatientForm from './pages/AddPatientForm ';
import NewAppointmentForm from './pages/NewAppointmentForm';
import { SignUpDoctor } from './pages/SignUpDoctor';
import { LoginDoctor } from './pages/login';
import AllPatients from './pages/AllPatients';
import AllConsultations from './pages/AllConsultations';
import DashboardDoctor from './pages/DashboardDoctor';
import DashboardSecretaire from './pages/DashboardSecretaire';
import EditMedecin from './pages/EditMedecin';
import ManageSecretaires from './pages/ManageSecretaires';
import RendezVousMedecin from './pages/RendezVousMedecin';
import DossierMedical from './pages/DossierMedical';
import AllSecretaires from './pages/AllSecretaires';
import EditSecretaire from './pages/EditSecretaire';
import Bienvenue from './components/Bienvenue';
import RendezvousEditPage from './pages/RendezvousEditPage';

const AppLayout: React.FC = () => {
  const location = useLocation();

  const hideSidebarRoutes = ['/', '/signUpdoctor'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="container">
      {!shouldHideSidebar && <SidebarNavbar />}

      <Routes>
        <Route path="/" element={<LoginDoctor />} />
        <Route path="/signUpdoctor" element={<SignUpDoctor />} />

        <Route path="/consultationform" element={<ConsultationForm />} />
        <Route path="/add-secretary" element={<AddSecretaryForm />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/add-NewAppointmentForm" element={<NewAppointmentForm />} />

        <Route path="/allpatients" element={<AllPatients />} />
        <Route path="/allconsulations" element={<AllConsultations />} />
        <Route path="/all-secretaires" element={<AllSecretaires />} />
        <Route path="/sign-up" element={<SignUpDoctor />} />

        <Route path="/dashboard-medecine" element={<DashboardDoctor />} />
        <Route path="/dashboard-seceritaire" element={<DashboardSecretaire />} />
        <Route path="/doccier" element={<DossierMedical />} />

        <Route path="/edit-information" element={<EditMedecin />} />

        <Route path="/manage-secritaire" element={<ManageSecretaires />} />
        <Route path="/rendezvous-medecin" element={<RendezVousMedecin />} />

        <Route path="/edit-secretaire/:id" element={<EditSecretaire />} />
        
        <Route path="/dashboard" element={<Bienvenue/>} />

        <Route path="/secretaire/rendezvous/edit/:id" element={<RendezvousEditPage />} />


        <Route path="/dashboard" element={<Bienvenue />} />

        


      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
