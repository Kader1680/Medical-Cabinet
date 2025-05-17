import React from 'react';

const Bienvenue: React.FC = () => {
  return (
    <div className="flex-grow-1 ms-5 p-4" style={{ marginLeft: '120px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          placeholder="Rechercher un patient"
          className="form-control w-50"
        />
        <button className="btn btn-primary">+ Nouvel patient</button>
      </div>

      <div className="mb-4 d-flex justify-content-around align-items-center">
        <div>
          <h2>
            Bonjour <span className="text-primary">Dr. Amina HAMIDA</span>
          </h2>
          <p className="text-muted">Bonne journée au travail !</p>
        </div>
        <div>
          <img
            src="/doc1-removebg-preview 1.png"
            alt="Doctor"
            style={{ maxHeight: '120px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Bienvenue;
