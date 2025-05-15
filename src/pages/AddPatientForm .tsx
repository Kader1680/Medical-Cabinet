import { useState } from "react";
import axios from "axios"; // ✅ Import axios

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
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/patients", formData); // ✅ Adjust endpoint
      console.log("Patient data submitted:", response.data);
      setIsSubmitted(true);
      setErrorMessage("");

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
    } catch (error: any) {
      console.error("Error submitting patient data:", error);
      setErrorMessage("Erreur lors de l'enregistrement du patient.");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ajouter un Patient</h1>

      <form onSubmit={handleSubmit} className="border p-4 rounded-3 shadow-sm">
        {/* ... same input fields ... */}
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

      {errorMessage && (
        <div className="alert alert-danger mt-3">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default AddPatientForm;
