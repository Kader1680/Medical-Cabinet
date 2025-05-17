import React from 'react';

const Sidebar: React.FC = () => {
  const item = localStorage.getItem('role');
  const role = item;

  const linkStyle: React.CSSProperties = {
    color: 'blue',
    fontSize: '12px',
    marginTop: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div
      className="d-flex flex-column align-items-center text-center py-4"
      style={{
        backgroundColor: '#ade9e4',
        width: '100px',
        minHeight: '100vh',
        borderTopLeftRadius: '40px',
        borderBottomLeftRadius: '40px',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      <a style={linkStyle} className='text-decoration-none' href="/edit-information">
        <img
          src="/doctor.png"
          className="rounded-circle mb-2"
          alt="Doctor"
          style={{ width: '60px', height: '60px' }}
        />
        <p  className="fw-bold mb-4">Dr. Amina HAMIDA</p>
      </a>

      

      <div className="my-3 d-flex flex-column align-items-center">
        <a style={linkStyle} href="/allpatients" className="d-flex flex-column align-items-center">
          <img className='bg-white p-1' src="/patient.jpg" alt="Patients" width={32} />
          <span style={linkStyle}>Patients</span>
        </a>
      </div>

      {role === "medecine" && (

        <div>
      <div className="my-3 d-flex flex-column align-items-center">
          <a style={linkStyle} href="/all-secretaires" className="d-flex flex-column align-items-center">
            <img className='bg-white p-1' src="/bookkeeping_12871302 1.png" alt="Secrétaires" width={32} />
            <span style={linkStyle}>Secrétaires</span>
          </a>
        </div>


      <div className="my-3 d-flex flex-column align-items-center">
        <a style={linkStyle} href="/allconsulations" className="d-flex flex-column align-items-center">
          <img className='bg-white p-1' src="/folders_2120926 1.png" alt="Consultations" width={32} />
          <span style={linkStyle}>Consultations</span>
        </a>
      </div>


      <div className="my-3 d-flex flex-column align-items-center">
        <a style={linkStyle} href="/allconsulations" className="d-flex flex-column align-items-center">
          <img className='bg-white p-1' src="/consultations.jpg" alt="Dossier" width={32} />
          <span style={linkStyle}>Dossiers</span>
        </a>
      </div>

    

      
        </div>
      
      )}

       <div className="my-3 d-flex flex-column align-items-center">
        <a style={linkStyle} href="/rendezvous-medecin" className="d-flex flex-column align-items-center">
          <img className='bg-white p-1' src="/rendivou.png" alt="Rendez-vous" width={32} />
          <span style={linkStyle}>Rendez-vous</span>
        </a>
      </div>

   
      <div style={linkStyle} className="mt-auto mb-3 d-flex flex-column align-items-center">
        <a style={linkStyle} href="/" className="d-flex flex-column align-items-center">
          <img className='bg-white p-1' src="/log-out_10024613-removebg-preview 1.png" alt="Déconnexion" width={32} />
          <span style={linkStyle}>Déconnexion</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
