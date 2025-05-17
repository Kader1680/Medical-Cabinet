import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm: React.FC = () => {
  const [ordonnanceList, setOrdonnanceList] = useState([{ medicine: '', dosage: '', frequency: '' }]);
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
    doctorName: '',
    certificatType: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (index: number, field: string, value: string) => {
    const list = [...ordonnanceList];
    list[index] = { ...list[index], [field]: value };
    setOrdonnanceList(list);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddRow = () => {
    setOrdonnanceList([...ordonnanceList, { medicine: '', dosage: '', frequency: '' }]);
  };

  const handleRemoveRow = (index: number) => {
    const list = [...ordonnanceList];
    list.splice(index, 1);
    setOrdonnanceList(list);
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
        certificat: {
          type: formData.certificatType
        }
      };

      const response = await axios.post('https://your-api-endpoint.com/consultations', consultationData, {
        headers: {
          'Content-Type': 'application/json',
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
            <input type="date" name="dateNaissance" className="form-control"
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
            <input type="date" name="dateConsultation" className="form-control"
              value={formData.dateConsultation} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Ordonnance */}
        <div className="border rounded p-3 mb-4">
          <h5 className="text-center mb-3">Ordonnance</h5>
          {ordonnanceList.map((item, index) => (
            <div key={index} className="row g-2 mb-2 align-items-center">
              <div className="col-4">
                <input type="text" className="form-control" placeholder="Médicament"
                  value={item.medicine} onChange={(e) => handleChange(index, 'medicine', e.target.value)} />
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="Dosage"
                  value={item.dosage} onChange={(e) => handleChange(index, 'dosage', e.target.value)} />
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="Fréquence"
                  value={item.frequency} onChange={(e) => handleChange(index, 'frequency', e.target.value)} />
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index)}>✕</button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary w-100 mb-3" onClick={handleAddRow}>+ Ajouter Médicament</button>

          <div className="text-end">
            <input type="text" name="doctorName" placeholder="Dr." className="form-control w-50 ms-auto"
              value={formData.doctorName} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Certificat Médical */}
        <div className="border rounded p-3 mb-4">
          <h5 className="text-center mb-3">Certificat Médical</h5>
          <div className="mb-3">
            <label htmlFor="certificatType" className="form-label">Type de certificat</label>
            <select
              id="certificatType"
              className="form-select"
              name="certificatType"
              value={formData.certificatType}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Choisir un type --</option>
              <option value="Certificat de maladie">Certificat de maladie</option>
              <option value="Certificat de travail">Certificat de travail</option>
              <option value="Certificat de repos">Certificat de repos</option>
              <option value="Certificat d’aptitude">Certificat d’aptitude</option>
            </select>
          </div>

          <div className="text-end">
            <input type="text" placeholder="Dr." className="form-control w-50 ms-auto"
              value={formData.doctorName} readOnly />
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
