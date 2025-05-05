// SignUpDoctor.tsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Gender = 'Féminin' | 'Masculin' | '';
type Role = 'Médecin' | 'Secrétaire' | '';

interface FormData {
  lastName: string;
  firstName: string;
  age: string;
  birthDate: string;
  gender: Gender;
  role: Role;
  specialty: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpDoctor = () => {
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    age: '',
    birthDate: '',
    gender: '',
    role: '',
    specialty: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.birthDate) newErrors.birthDate = 'Birth date is required';
    // if (!formData.gender) newErrors.gender = 'Gender is required';
    // if (!formData.role) newErrors.role = 'Role is required';
    if (formData.role === 'Médecin' && !formData.specialty) newErrors.specialty = 'Specialty is required for doctors';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
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
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
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
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Date De Naissance</label>
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
                </div>

                <div className="row">
                  <div className="col-md-6">
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
                      {errors.gender && (
                        <div className="text-danger" style={{ fontSize: '0.875em' }}>
                          {errors.gender}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Je suis ?</label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="doctor"
                            value="Médecin"
                            checked={formData.role === 'Médecin'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="doctor">Médecin</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="secretary"
                            value="Secrétaire"
                            checked={formData.role === 'Secrétaire'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="secretary">Secrétaire</label>
                        </div>
                      </div>
                      {errors.role && (
                        <div className="text-danger" style={{ fontSize: '0.875em' }}>
                          {errors.role}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {formData.role === 'Médecin' && (
                  <div className="mb-3">
                    <label className="form-label">Spécialité</label>
                    <input
                      type="text"
                      className={`form-control ${errors.specialty ? 'is-invalid' : ''}`}
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                    />
                    {errors.specialty && <div className="invalid-feedback">{errors.specialty}</div>}
                  </div>
                )}

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
                  <div className="col-md-6">
                    <div className="mb-3">
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
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Confirmé Mot de passe</label>
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
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary mb-3">
                    Sign Up
                  </button>
                </div>

                <div className="text-center">
                  <p>
                    Already have an account? <a href="#login">Log in</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};