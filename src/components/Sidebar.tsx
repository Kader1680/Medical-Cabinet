// src/components/Sidebar.tsx
import React from 'react';


const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center text-center py-4"
      style={{
        backgroundColor: '#0d6efd',
        
        width: '100px',
        minHeight: '100vh',
        borderTopLeftRadius: '40px',
        borderBottomLeftRadius: '40px',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      <a href="/edit-information">
       <img
        src="/doctor.png"
        className="rounded-circle mb-2"
        alt="Doctor"
        style={{ width: '60px', height: '60px' }}
      /> <br />
      <small className="fw-bold text-white mb-4">Dr. Amina HAMIDA</small>

      </a>
    

      {/* Icons */}
      <div className="my-3">
        <img className=' f bg-white p-1 ' src="/folders_2120926 1.png" alt="folder" width={32} />
      </div>
      <div className="my-3">
       
        <a href="/manage-secritaire">
         <img className=' bg-white p-1 ' src="/bookkeeping_12871302 1.png" alt="user" width={32} />
        </a>
      </div>
      <div className="mt-auto mb-3">
        <img  className=' bg-white p-1 ' src="/log-out_10024613-removebg-preview 1.png" alt="logout" width={32} />
      </div>
    </div>
  );
};

export default Sidebar;
