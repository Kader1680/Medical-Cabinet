import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

type FormData = {
  nom: string;
  prenom: string;
  age: number;
  dateDeNaissance: string;
  genre: string;
  role: string;
  specialite: string;
  email: string;
  username: string;
  password: string;
  photo?: string;
};

const initialData: FormData = {
  nom: 'Hamida',
  prenom: 'Amina',
  age: 45,
  dateDeNaissance: '1980-06-15',
  genre: 'Féminin',
  role: 'Médecin',
  specialite: 'Cardiologie',
  email: 'amina.hamida@clinique.dz',
  username: 'amina.hamida',
  password: 'password123',
  photo: '', // initial photo URL or filename if needed
};

export default function EditMedecin() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        // data.append(key, value);
      });

      if (selectedFile) {
        data.append('photo', selectedFile);
      }

      const response = await axios.post(
        'http://localhost:8000/api/medecins/1?_method=PUT',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Updated Info:', response.data);
      alert('Informations mises à jour avec succès !');
    } catch (error: any) {
      console.error('Erreur lors de la mise à jour :', error);
      alert('Échec de la mise à jour.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card mt-5">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Modifier les Informations</h2>

              {/* Image Upload & Preview */}
              <div className="mb-4 text-center">
                <label
                  htmlFor="photoUpload"
                  className="d-inline-block position-relative"
                  style={{
                    cursor: 'pointer',
                    width: '120px',
                    height: '120px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px dashed #ced4da',
                  }}
                >
                  <img
                    src={
                      selectedFile
                        ? URL.createObjectURL(selectedFile)
                        : formData.photo
                          ? `/uploads/${formData.photo}`
                          : 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
                    }
                    alt="Photo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 text-white text-center py-1"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      fontSize: '0.75rem',
                    }}
                  >
                    Modifier
                  </div>
                </label>
                <input
                  id="photoUpload"
                  type="file"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      className="form-control"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      className="form-control"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="age" className="form-label">Âge</label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="0"
                      className="form-control"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="dateDeNaissance" className="form-label">Date de Naissance</label>
                    <input
                      id="dateDeNaissance"
                      name="dateDeNaissance"
                      type="date"
                      className="form-control"
                      value={formData.dateDeNaissance}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Genre</label>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        id="feminin"
                        name="genre"
                        type="radio"
                        className="form-check-input"
                        value="Féminin"
                        checked={formData.genre === 'Féminin'}
                        onChange={handleChange}
                      />
                      <label htmlFor="feminin" className="form-check-label">Féminin</label>
                    </div>
                    <div className="form-check">
                      <input
                        id="masculin"
                        name="genre"
                        type="radio"
                        className="form-check-input"
                        value="Masculin"
                        checked={formData.genre === 'Masculin'}
                        onChange={handleChange}
                      />
                      <label htmlFor="masculin" className="form-check-label">Masculin</label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="specialite" className="form-label">Spécialité</label>
                  <input
                    id="specialite"
                    name="specialite"
                    type="text"
                    className="form-control"
                    value={formData.specialite}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    required
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? 'Mise à jour...' : 'Mettre à jour'}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
