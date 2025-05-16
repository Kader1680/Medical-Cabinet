import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm: React.FC = () => {
  const [ordonnanceList, setOrdonnanceList] = useState([{ medicine: '', dosage: '', frequency: '' }]);
  const [certificatList, setCertificatList] = useState([{ medicine: '', dosage: '', frequency: '' }]);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    age: '',
    genre: '',
    tel: '',
    adresse: '',
    diagnostique: '',
    dateConsultation: '',
    antecedentsMedicaux: '',
    traitementsEnCours: '',
    antecedentsFamiliaux: '',
    examensPrecedents: '',
    doctorName: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (listType: 'ordonnance' | 'certificat', index: number, field: string, value: string) => {
    const list = listType === 'ordonnance' ? [...ordonnanceList] : [...certificatList];
    list[index] = { ...list[index], [field]: value };
    listType === 'ordonnance' ? setOrdonnanceList(list) : setCertificatList(list);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const consultationData = {
        patientInfo: {
          nom: formData.nom,
          prenom: formData.prenom,
          dateNaissance: formData.dateNaissance,
          age: formData.age,
          genre: formData.genre,
          tel: formData.tel,
          adresse: formData.adresse
        },
        consultation: {
          diagnostique: formData.diagnostique,
          dateConsultation: formData.dateConsultation,
          doctorName: formData.doctorName
        },
        dossierMedical: {
          antecedentsMedicaux: formData.antecedentsMedicaux,
          traitementsEnCours: formData.traitementsEnCours,
          antecedentsFamiliaux: formData.antecedentsFamiliaux,
          examensPrecedents: formData.examensPrecedents
        },
        ordonnance: ordonnanceList,
        certificat: certificatList
      };

      const response = await axios.post('https://your-api-endpoint.com/consultations', consultationData, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${yourToken}`
        }
      });

      const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Your base API URL
  headers: {
    'Content-Type': 'application/json',
    // You can add default headers here, like authorization tokens
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});


      console.log('Consultation saved successfully:', response.data);
      alert('Consultation enregistrée avec succès!');
      
    } catch (err) {
      console.error('Error saving consultation:', err);
      setError('Erreur lors de l\'enregistrement de la consultation. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 p-4 bg-white shadow rounded ms-5">
      <h2 className="text-center text-primary mb-4">Consultation</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <input type="text" name="nom" placeholder="Nom" className="form-control" 
              value={formData.nom} onChange={handleInputChange} required />
          </div>
          <div className="col-md-4">
            <input type="text" name="prenom" placeholder="Prénom" className="form-control" 
              value={formData.prenom} onChange={handleInputChange} required />
          </div>
          <div className="col-md-4">
            <input type="date" name="dateNaissance" placeholder="Date De Naissance" className="form-control" 
              value={formData.dateNaissance} onChange={handleInputChange} required />
          </div>
          <div className="col-md-4">
            <input type="number" name="age" placeholder="Age" className="form-control" 
              value={formData.age} onChange={handleInputChange} required />
          </div>
          <div className="col-md-4">
            <input type="text" name="genre" placeholder="Genre" className="form-control" 
              value={formData.genre} onChange={handleInputChange} required />
          </div>
          <div className="col-md-4">
            <input type="text" name="tel" placeholder="Tél" className="form-control" 
              value={formData.tel} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <input type="text" name="adresse" placeholder="Adresse" className="form-control" 
              value={formData.adresse} onChange={handleInputChange} />
          </div>
          <textarea className="form-control mb-2" name="diagnostique" rows={5} placeholder="Diagnostique Et Remarque"
            value={formData.diagnostique} onChange={handleInputChange} required></textarea>
          <div className="col-md-12">
            <input type="date" name="dateConsultation" placeholder="Date" className="form-control" 
              value={formData.dateConsultation} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Dossier Médical */}
        <div className="border rounded p-3 mb-4">
          <h5 className="text-center mb-3 text-success">Dossier Médical</h5>
          <div className="mb-3">
            <label className="form-label">Antécédents Médicaux</label>
            <textarea className="form-control" name="antecedentsMedicaux" rows={2} 
              placeholder="Ex : Diabète, Hypertension..." 
              value={formData.antecedentsMedicaux} onChange={handleInputChange} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Traitements en Cours</label>
            <textarea className="form-control" name="traitementsEnCours" rows={2} 
              placeholder="Ex : Metformine, Bêtabloquants..." 
              value={formData.traitementsEnCours} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Antécédents Familiaux</label>
            <textarea className="form-control" name="antecedentsFamiliaux" rows={2} 
              placeholder="Ex : Antécédents de cancer, diabète..." 
              value={formData.antecedentsFamiliaux} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Examens Précédents</label>
            <textarea className="form-control" name="examensPrecedents" rows={2} 
              placeholder="Ex : ECG, IRM, Radio..." 
              value={formData.examensPrecedents} onChange={handleInputChange} />
          </div>
        </div>

        <div className="row">
          {/* Ordonnance */}
          <div className="col-md-6">
            <div className="border rounded p-3 mb-4">
              <h5 className="text-center mb-3">Ordonnance</h5>
              <div className="row g-2 mb-2">
                <div className="col-6"><input type="text" placeholder="Nom" className="form-control" 
                  value={formData.nom} readOnly /></div>
                <div className="col-6"><input type="text" placeholder="Prénom" className="form-control" 
                  value={formData.prenom} readOnly /></div>
                <div className="col-6"><input type="number" placeholder="Age" className="form-control" 
                  value={formData.age} readOnly /></div>
                <div className="col-6"><input type="date" placeholder="Date" className="form-control" 
                  value={formData.dateConsultation} readOnly /></div>
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
              <button type="button" className="btn btn-secondary w-100 mb-3" onClick={() => handleAddRow('ordonnance')}>+ Ajouter Médicament</button>

              <div className="text-end">
                <input type="text" name="doctorName" placeholder="Dr." className="form-control w-50 ms-auto" 
                  value={formData.doctorName} onChange={handleInputChange} required />
              </div>
            </div>
          </div>

          {/* Certificat Médical */}
          <div className="col-md-6">
            <div className="border rounded p-3 mb-4">
              <h5 className="text-center mb-3">Certificat Médical</h5>
              <div className="row g-2 mb-2">
                <div className="col-6"><input type="text" placeholder="Nom" className="form-control" 
                  value={formData.nom} readOnly /></div>
                <div className="col-6"><input type="text" placeholder="Prénom" className="form-control" 
                  value={formData.prenom} readOnly /></div>
                <div className="col-6"><input type="number" placeholder="Age" className="form-control" 
                  value={formData.age} readOnly /></div>
                <div className="col-6"><input type="date" placeholder="Date" className="form-control" 
                  value={formData.dateConsultation} readOnly /></div>
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
              <button type="button" className="btn btn-secondary w-100 mb-3" onClick={() => handleAddRow('certificat')}>+ Ajouter Médicament</button>

              <div className="text-end">
                <input type="text" placeholder="Dr." className="form-control w-50 ms-auto" 
                  value={formData.doctorName} readOnly />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 d-flex justify-content-evenly gap-3">
          <button type="button" className="btn btn-light border">
            <img src="/printer.png" className="rounded-circle mb-2" alt="Printer" style={{ width: '60px', height: '60px' }} />
          </button>
          <button type="submit" className="btn btn-primary px-4" disabled={loading}>
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
          <button type="button" className="btn btn-light border">
            <img src="/printer.png" className="rounded-circle mb-2" alt="Printer" style={{ width: '60px', height: '60px' }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;