import { useState } from "react";

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient data submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        lastName: "",
        firstName: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        address: ""
      });
    }, 3000);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ajouter un Patient</h1>
      
      <form onSubmit={handleSubmit} className="border p-4 rounded-3 shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label fw-bold">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Ex: Layla"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label fw-bold">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ex: Jean"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="age" className="form-label fw-bold">Âge</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              min="0"
              max="120"
              value={formData.age}
              onChange={handleChange}
              placeholder="Ex: 30"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="gender" className="form-label fw-bold">Genre</label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label fw-bold">Tél</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: 0612345678"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: patient@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="form-label fw-bold">Adresse</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Ex: 123 Rue de Paris"
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary px-4">
            Enregistrer
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="alert alert-success mt-3 fade-in">
          Patient enregistré avec succès!
        </div>
      )}
    </div>
  );
};

export default AddPatientForm;