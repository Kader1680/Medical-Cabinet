import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditSecretaire: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    age: 0,
    genre: '',
    telephone: '',
    dateNaissance: '',
    photo: '', // store URL or filename
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchSecretaire = async () => {
      try {
        const res = await api.get(`/secretaires/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du secrétaire :", error);
      }
    };

    fetchSecretaire();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append('nom', formData.nom);
      data.append('prenom', formData.prenom);
      data.append('email', formData.email);
      data.append('age', String(formData.age));
      data.append('genre', formData.genre);
      data.append('telephone', formData.telephone);
      data.append('dateNaissance', formData.dateNaissance);

      if (selectedFile) {
        data.append('photo', selectedFile);
      }

      await api.post(`/secretaires/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Modifier les informations du Secrétaire</h2>

      {/* Photo preview + upload */}
      <div className="mb-3">
        <label className="form-label">Photo</label>
        {formData.photo || selectedFile ? (
          <div className="mb-2">
            <img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : `/uploads/${formData.photo}`
              }
              alt="Aperçu"
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        ) : null}
        <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input type="text" className="form-control" name="nom" value={formData.nom} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Prénom</label>
        <input type="text" className="form-control" name="prenom" value={formData.prenom} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Âge</label>
        <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Genre</label>
        <select className="form-control" name="genre" value={formData.genre} onChange={handleChange}>
          <option value="">-- Sélectionner --</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Téléphone</label>
        <input type="text" className="form-control" name="telephone" value={formData.telephone} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Date de naissance</label>
        <input type="date" className="form-control" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
      </div>

      <button className="btn btn-success" onClick={handleSubmit}>Enregistrer</button>
    </div>
  );
};

export default EditSecretaire;
