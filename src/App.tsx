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
import ChooseRole from './pages/ChooseRole';
import DashboardDoctor from './pages/DashboardDoctor';
import DashboardSecretaire from './pages/DashboardSecretaire';
import EditMedecin from './pages/EditMedecin';
const App: React.FC = () => {
  return (
   <div className=' container'>
    <SidebarNavbar />
     

     <Router>
      <Routes>
    
      
        <Route path="/signUpdoctor" element={<SignUpDoctor />} />
        <Route path="/login" element={<LoginDoctor />} />
    

        <Route path="/consultationform" element={<ConsultationForm />} />
        <Route path="/add-secretary" element={<AddSecretaryForm />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/add-NewAppointmentForm" element={<NewAppointmentForm />} />
   

        <Route path="/allpatients" element={<AllPatients />} />
        <Route path="/allconsulations" element={<AllConsultations />} />
        <Route path="/" element={<SignUpDoctor />} />


        <Route path="/dashboard" element={<DashboardDoctor />} />
        <Route path="/dash" element={<DashboardSecretaire />} />



        <Route path="/edit-information" element={<EditMedecin />} />
        

      </Routes>
    </Router>
   </div>
  );
};

export default App;
