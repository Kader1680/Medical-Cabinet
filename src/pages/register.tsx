import { useState } from 'react';

type FormData = {
  nom: string;
  prenom: string;
  age: number;
  dateDeNaissance: string;
  genre: string;
  role: string;
  specialite: string;
  email: string;
  motDePasse: string;
  confirmeMotDePasse: string;
};

export default function SignUpMedecin() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    age: 0,
    dateDeNaissance: '',
    genre: '',
    role: '',
    specialite: '',
    email: '',
    motDePasse: '',
    confirmeMotDePasse: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card mt-5">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              
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
                    <label htmlFor="age" className="form-label">Age</label>
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
                    <label htmlFor="dateDeNaissance" className="form-label">Date De Naissance</label>
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
                  <label className="form-label">Je suis ?</label>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        id="medecin"
                        name="role"
                        type="radio"
                        className="form-check-input"
                        value="Médecin"
                        checked={formData.role === 'Médecin'}
                        onChange={handleChange}
                      />
                      <label htmlFor="medecin" className="form-check-label">Médecin</label>
                    </div>
                    <div className="form-check">
                      <input
                        id="secretaire"
                        name="role"
                        type="radio"
                        className="form-check-input"
                        value="Secrétaire"
                        checked={formData.role === 'Secrétaire'}
                        onChange={handleChange}
                      />
                      <label htmlFor="secretaire" className="form-check-label">Secrétaire</label>
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

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="motDePasse" className="form-label">Mot de passe</label>
                    <input
                      id="motDePasse"
                      name="motDePasse"
                      type="password"
                      className="form-control"
                      required
                      value={formData.motDePasse}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmeMotDePasse" className="form-label">Confirmé Mot de passe</label>
                    <input
                      id="confirmeMotDePasse"
                      name="confirmeMotDePasse"
                      type="password"
                      className="form-control"
                      required
                      value={formData.confirmeMotDePasse}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <a href="#" className="text-decoration-none">Log in</a>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}