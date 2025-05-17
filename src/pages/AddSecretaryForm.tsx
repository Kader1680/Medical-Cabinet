import { useState } from "react";
import axios from "axios";

const AddSecretaryForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nomUtilisateur: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/secretaires", formData);
      console.log("Form submitted successfully:", response.data);

      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        nomUtilisateur: "",
        password: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <div className="container mt-4 ms-5">
      <h2 className="mb-4">Ajouter Secrétaire</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Prénom</label>
          <input
            type="text"
            className="form-control"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Téléphone</label>
          <input
            type="tel"
            className="form-control"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            className="form-control"
            name="nomUtilisateur"
            value={formData.nomUtilisateur}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
};

export default AddSecretaryForm;
