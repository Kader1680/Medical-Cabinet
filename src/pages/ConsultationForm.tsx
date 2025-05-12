import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [ordonnanceList, setOrdonnanceList] = useState([{ medicine: '', dosage: '', frequency: '' }]);
  const [certificatList, setCertificatList] = useState([{ medicine: '', dosage: '', frequency: '' }]);

  const handleChange = (listType: 'ordonnance' | 'certificat', index: number, field: string, value: string) => {
    const list = listType === 'ordonnance' ? [...ordonnanceList] : [...certificatList];
    // list[index][field] = value;
    listType === 'ordonnance' ? setOrdonnanceList(list) : setCertificatList(list);
  };

  const handleAddRow = (listType: 'ordonnance' | 'certificat') => {
    const newRow = { medicine: '', dosage: '', frequency: '' };
    listType === 'ordonnance'
      ? setOrdonnanceList([...ordonnanceList, newRow])
      : setCertificatList([...certificatList, newRow]);
  };

  const handleRemoveRow = (listType: 'ordonnance' | 'certificat', index: number) => {
    const list = listType === 'ordonnance' ? [...ordonnanceList] : [...certificatList];
    list.splice(index, 1);
    listType === 'ordonnance' ? setOrdonnanceList(list) : setCertificatList(list);
  };

  return (
    <div className="container mt-5 p-4 bg-white shadow rounded">
      <h2 className="text-center text-primary mb-4">Consultation</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-4"><input type="text" placeholder="Nom" className="form-control" /></div>
        <div className="col-md-4"><input type="text" placeholder="Prénom" className="form-control" /></div>
        <div className="col-md-4"><input type="date" placeholder="Date De Naissance" className="form-control" /></div>
        <div className="col-md-4"><input type="number" placeholder="Age" className="form-control" /></div>
        <div className="col-md-4"><input type="text" placeholder="Genre" className="form-control" /></div>
        <div className="col-md-4"><input type="text" placeholder="Tél" className="form-control" /></div>
        <div className="col-md-6"><input type="text" placeholder="Adresse" className="form-control" /></div>
        <textarea className="form-control mb-2" rows={5} placeholder="Diagnostique Et Remarque"></textarea>
        <div className="col-md-12"><input type="date" placeholder="Date" className="form-control" /></div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="border rounded p-3 mb-4">
            <h5 className="text-center mb-3">Ordonnance</h5>
            <div className="row g-2 mb-2">
              <div className="col-6"><input type="text" placeholder="Nom" className="form-control" /></div>
              <div className="col-6"><input type="text" placeholder="Prénom" className="form-control" /></div>
              <div className="col-6"><input type="number" placeholder="Age" className="form-control" /></div>
              <div className="col-6"><input type="date" placeholder="Date" className="form-control" /></div>
            </div>

            {ordonnanceList.map((item, index) => (
              <div key={index} className="row g-2 mb-2 align-items-center">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Médicament"
                    value={item.medicine}
                    onChange={(e) => handleChange('ordonnance', index, 'medicine', e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dosage"
                    value={item.dosage}
                    onChange={(e) => handleChange('ordonnance', index, 'dosage', e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fréquence"
                    value={item.frequency}
                    onChange={(e) => handleChange('ordonnance', index, 'frequency', e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow('ordonnance', index)}>✕</button>
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-primary w-100 mb-3" onClick={() => handleAddRow('ordonnance')}>+ Ajouter Médicament</button>

            <div className="text-end">
              <input type="text" placeholder="Dr." className="form-control w-50 ms-auto" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 mb-4">
            <h5 className="text-center mb-3">Certificat Médical</h5>
            <div className="row g-2 mb-2">
              <div className="col-6"><input type="text" placeholder="Nom" className="form-control" /></div>
              <div className="col-6"><input type="text" placeholder="Prénom" className="form-control" /></div>
              <div className="col-6"><input type="number" placeholder="Age" className="form-control" /></div>
              <div className="col-6"><input type="date" placeholder="Date" className="form-control" /></div>
            </div>

            {certificatList.map((item, index) => (
              <div key={index} className="row g-2 mb-2 align-items-center">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Médicament"
                    value={item.medicine}
                    onChange={(e) => handleChange('certificat', index, 'medicine', e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dosage"
                    value={item.dosage}
                    onChange={(e) => handleChange('certificat', index, 'dosage', e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fréquence"
                    value={item.frequency}
                    onChange={(e) => handleChange('certificat', index, 'frequency', e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow('certificat', index)}>✕</button>
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-primary w-100 mb-3" onClick={() => handleAddRow('certificat')}>+ Ajouter Médicament</button>

            <div className="text-end">
              <input type="text" placeholder="Dr." className="form-control w-50 ms-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 d-flex justify-content-evenly gap-3">
        <button className="btn btn-light border">
          <img src="/printer.png" className="rounded-circle mb-2" alt="Doctor" style={{ width: '60px', height: '60px' }} />
        </button>
        <button className="btn btn-primary px-4">Enregistrer</button>
        <button className="btn btn-light border">
          <img src="/printer.png" className="rounded-circle mb-2" alt="Doctor" style={{ width: '60px', height: '60px' }} />
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;
