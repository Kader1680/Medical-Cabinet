// src/components/Sidebar.tsx
import React from 'react';


const SidebarScritaire: React.FC = () => {
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
        left: 120,
        top: 0,
      }}
    >
      <a className=' text-decoration-none' href="/edit-information">
       <img
        src="/doctor.png"
        className="rounded-circle mb-2"
        alt="Doctor"
        style={{ width: '60px', height: '60px' }}
      /> <br />
      <p className="fw-bold text-white mb-4 text-decoration-none">Dr. Amina HAMIDA</p>

      </a>
    

      {/* Icons */}
      <div className="my-3">
        <img className=' f bg-white p-1 ' src="/folders_2120926 1.png" alt="folder" width={32} />
      </div>
     

      <div className="my-3">
       
        <a href="/rendezvous-secritaire">
         <img className=' bg-white p-1 ' src="/rendivou.png" width={32} />
        </a>
      </div>



      <div className="mt-auto mb-3">
        <img  className=' bg-white p-1 ' src="/log-out_10024613-removebg-preview 1.png" alt="logout" width={32} />
      </div>
    </div>
  );
};

export default SidebarScritaire;
