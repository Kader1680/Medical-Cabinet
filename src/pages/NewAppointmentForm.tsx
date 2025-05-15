import { useState, useEffect } from "react";
import api from "../services/api";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
}

const NewAppointmentForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    age: "",
    birthDate: "",
    gender: "",
    phone: "",
    address: "",
    date: "",
    time: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState("");

  useEffect(() => {
    api.get("/patients")
      .then(res => setPatients(res.data))
      .catch(err => {
        console.error("Erreur de chargement des patients", err);
      });
  }, []);

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
      const response = await api.post("/appointments", {
        ...formData,
        patient_id: selectedPatientId,
      });

      console.log("Appointment submitted:", response.data);

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          lastName: "",
          firstName: "",
          age: "",
          birthDate: "",
          gender: "",
          phone: "",
          address: "",
          date: "",
          time: ""
        });
        setSelectedPatientId("");
      }, 3000);
    } catch (error: any) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert("Une erreur est survenue.");
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 18) slots.push(`${hour}:30`);
    }
    return slots;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Nouveau Rendez-vous</h1>

      <form onSubmit={handleSubmit} className="border p-4 rounded-3 shadow-sm">
        <div className="mb-3">
          <label htmlFor="selectedPatient" className="form-label fw-bold">Patient</label>
          <select
            className="form-select"
            id="selectedPatient"
            value={selectedPatientId}
            onChange={(e) => setSelectedPatientId(e.target.value)}
            required
          >
            <option value="">Sélectionner un patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.firstName} {patient.lastName}
              </option>
            ))}
          </select>
        </div>

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
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="birthDate" className="form-label fw-bold">Date De Naissance</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
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
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label fw-bold">Tél</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label fw-bold">Adresse</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="date" className="form-label fw-bold">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="time" className="form-label fw-bold">Horaire</label>
            <select
              className="form-select"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner un horaire</option>
              {generateTimeSlots().map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary px-4">
            Enregistrer le rendez-vous
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="alert alert-success mt-3 fade-in">
          Rendez-vous enregistré avec succès!
        </div>
      )}
    </div>
  );
};

export default NewAppointmentForm;
