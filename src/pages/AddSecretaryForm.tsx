import { useState } from "react";
import axios from "axios";

const AddSecretaryForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    age: "",
    birthDate: "",
    gender: "",
    phone: "",
    address: ""
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
      const response = await axios.post("http://localhost:3000/api/secretaries", formData);
      console.log("Form submitted successfully:", response.data);
       
      setFormData({
        lastName: "",
        firstName: "",
        age: "",
        birthDate: "",
        gender: "",
        phone: "",
        address: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Ajouter Secrétaire</h2>
      <form onSubmit={handleSubmit}>
        {/* ... all your input fields here (unchanged) ... */}
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
};

export default AddSecretaryForm;
