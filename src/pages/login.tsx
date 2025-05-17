import { useState } from 'react';
import api from '../services/api';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const LoginDoctor = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { username: '', password: '' };

    if (!formData.username) {
      newErrors.username = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.values(validationErrors).some(Boolean)) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/login', formData); 

      console.log('Connexion réussie:', response.data);
      alert('Connexion réussie !');
 
    } catch (error: any) {
      if (error.response?.data?.message) {
        alert('Erreur : ' + error.response.data.message);
      } else {
        alert("Erreur réseau.");
      }
    } finally {
      setLoading(false);
    }

       

  
  };


  const handleLogin = (role: string) => {
      localStorage.setItem('role', role);
      if (role === 'medecine') {
        navigate('/dashboard-medecine'); 
      }
      navigate('/dashboard-seceritaire'); 
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Connexion Médecin</h2>
              
              <form onSubmit={() => handleLogin('secretaire')}>
                <div className="mb-3">
                  <label className="form-label">nom utilisataire</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Connexion...' : 'Connexion'}
                  </button>
                </div>

                <div className="text-center mt-3">
                  <p>
                    Vous n'avez pas de compte ? <a href="/signUpdoctor">Créer un compte</a>
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
