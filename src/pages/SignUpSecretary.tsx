import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormData {
  lastName: string;
  firstName: string;
  age: string;
  birthDate: string;
  gender: 'Féminin' | 'Masculin' | '';
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpSecretary = () => {
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    age: '',
    birthDate: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.lastName) newErrors.lastName = 'Nom requis';
    if (!formData.firstName) newErrors.firstName = 'Prénom requis';
    if (!formData.age) newErrors.age = 'Âge requis';
    if (!formData.birthDate) newErrors.birthDate = 'Date de naissance requise';
    // if (!formData.gender) newErrors.gender = 'Genre requis';

    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Secrétaire registered:', formData);
      alert('Inscription réussie!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Inscription Secrétaire</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nom</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Prénom</label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Âge</label>
                    <input
                      type="number"
                      className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date de Naissance</label>
                    <input
                      type="date"
                      className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                    />
                    {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Genre</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="Féminin"
                        checked={formData.gender === 'Féminin'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="female">Féminin</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="Masculin"
                        checked={formData.gender === 'Masculin'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="male">Masculin</label>
                    </div>
                  </div>
                  {errors.gender && <div className="text-danger" style={{ fontSize: '0.875em' }}>{errors.gender}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Confirmer mot de passe</label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">S'inscrire</button>
                </div>

                <div className="text-center mt-3">
                  <p>Vous avez déjà un compte ? <a href="#login">Connexion</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
