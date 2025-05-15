import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 
import Register from './pages/register';
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
import RendezVousSecretaire from './pages/RendezVousSecretaire';
import SidebarScritaire from './components/SidebarScritaire';
const App: React.FC = () => {
  return (
   <div className=' container'>
    <SidebarNavbar />
    <SidebarScritaire />
     

     <Router>
      <Routes>
    
      
        <Route path="/signUpdoctor" element={<SignUpDoctor />} />
        
        <Route path="/" element={<LoginDoctor />} />
    

        <Route path="/consultationform" element={<ConsultationForm />} />
        <Route path="/add-secretary" element={<AddSecretaryForm />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/add-NewAppointmentForm" element={<NewAppointmentForm />} />
   

        <Route path="/allpatients" element={<AllPatients />} />
        <Route path="/allconsulations" element={<AllConsultations />} />
        <Route path="/sign-up" element={<SignUpDoctor />} />


        <Route path="/dashboard" element={<DashboardDoctor />} />
        <Route path="/dash" element={<DashboardSecretaire />} />



        <Route path="/edit-information" element={<EditMedecin />} />
        <Route path="/manage-secritaire" element={<ManageSecretaires />} />
        


        <Route path="/rendezvous-medecin" element={<RendezVousMedecin />} />
        <Route path="/rendezvous-secritaire" element={<RendezVousSecretaire />} />

      </Routes>
    </Router>
   </div>
  );
};

export default App;
