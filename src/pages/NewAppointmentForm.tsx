import { useState } from "react";

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
  const [selectedPatient, setSelectedPatient] = useState("Amel Saad");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment data submitted:", {
      ...formData,
      patient: selectedPatient
    });
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
    }, 3000);
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
    <div className="container mt-4 ce">
      <h1 className="mb-4 text-center">Nouveau Rendez-vous</h1>
      
      {/* <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Patient sélectionné</h5>
          <p className="card-text fs-4">{selectedPatient}</p>
        </div>
      </div> */}

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
            //   min={format(new Date(), 'yyyy-MM-dd')}
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