import React from 'react';

const ConsultationForm: React.FC = () => {
  return (
    <div className="container mt-5 p-4 bg-white shadow rounded">
      <h2 className="text-center text-primary mb-4">Consultation</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <input type="text" placeholder="Nom" className="form-control" />
        </div>
        <div className="col-md-4">
          <input type="text" placeholder="Prénom" className="form-control" />
        </div>
        <div className="col-md-4">
          <input type="date" placeholder="Date De Naissance" className="form-control" />
        </div>
        <div className="col-md-4">
          <input type="number" placeholder="Age" className="form-control" />
        </div>
        <div className="col-md-4">
          <input type="text" placeholder="Genre" className="form-control" />
        </div>
        <div className="col-md-4">
          <input type="text" placeholder="Tél" className="form-control" />
        </div>
        <div className="col-md-6">
          <input type="text" placeholder="Adresse" className="form-control" />
        </div>
        <div className="col-md-6">
          <input type="text" placeholder="Diagnostique Et Remarque" className="form-control" />
        </div>
        <div className="col-md-12">
          <input type="date" placeholder="Date" className="form-control" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="border rounded p-3 mb-4">
            <h5 className="text-center mb-3">Ordonnance</h5>
            <div className="row g-2 mb-2">
              <div className="col-6">
                <input type="text" placeholder="Nom" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" placeholder="Prénom" className="form-control" />
              </div>
              <div className="col-6">
                <input type="number" placeholder="Age" className="form-control" />
              </div>
              <div className="col-6">
                <input type="date" placeholder="Date" className="form-control" />
              </div>
            </div>
            <textarea className="form-control mb-2" rows={5} placeholder="Contenu de l'ordonnance"></textarea>
            <div className="text-end">
              <input type="text" placeholder="Dr." className="form-control w-50 ms-auto" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 mb-4">
            <h5 className="text-center mb-3">Certificat Médical</h5>
            <div className="row g-2 mb-2">
              <div className="col-6">
                <input type="text" placeholder="Nom" className="form-control" />
              </div>
              <div className="col-6">
                <input type="text" placeholder="Prénom" className="form-control" />
              </div>
              <div className="col-6">
                <input type="number" placeholder="Age" className="form-control" />
              </div>
              <div className="col-6">
                <input type="date" placeholder="Date" className="form-control" />
              </div>
            </div>
            <textarea className="form-control mb-2" rows={5} placeholder="Contenu du certificat"></textarea>
            <div className="text-end">
              <input type="text" placeholder="Dr." className="form-control w-50 ms-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 d-flex justify-content-evenly gap-3">
        <button className="btn btn-light border">
            <img
            src="/printer.png"
            className="rounded-circle mb-2"
            alt="Doctor"
            style={{ width: '60px', height: '60px' }}
            />
        </button>
        <button className="btn btn-primary px-4 ">Enregistrer</button>
        <button className="btn btn-light border">
            <img
            src="/printer.png"
            className="rounded-circle mb-2"
            alt="Doctor"
            style={{ width: '60px', height: '60px' }}
            />
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;
