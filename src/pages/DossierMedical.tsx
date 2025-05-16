import React, { useEffect, useState } from 'react';

type Patient = {
  id: number;
  name: string;
  birthdate: string;
  gender: string;
  bloodType: string;
};

type Antecedent = {
  id: number;
  condition: string;
  year: number;
};

type MedicalEntry = {
  id: number;
  date: string;
  doctor: string;
  diagnosis: string;
  prescriptions: {
    name: string;
    dosage: string;
  }[];
};

const DossierMedical: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [antecedents, setAntecedents] = useState<Antecedent[]>([]);
  const [history, setHistory] = useState<MedicalEntry[]>([]);

  useEffect(() => {
    // Fake patient info
    setPatient({
      id: 1001,
      name: 'Sami Bougherra',
      birthdate: '1990-04-12',
      gender: 'Homme',
      bloodType: 'A+',
    });

    // Fake antecedents
    setAntecedents([
      { id: 1, condition: 'Asthme chronique', year: 2008 },
      { id: 2, condition: 'Appendicectomie', year: 2015 },
      { id: 3, condition: 'Allergie au pollen', year: 2010 },
    ]);

    // Fake medical history
    setHistory([
      {
        id: 1,
        date: '2024-03-10',
        doctor: 'Dr. Leila Kaci',
        diagnosis: 'Grippe saisonnière',
        prescriptions: [
          { name: 'Doliprane', dosage: '1000mg, 2 fois par jour pendant 5 jours' },
        ],
      },
      {
        id: 2,
        date: '2024-01-22',
        doctor: 'Dr. Nabil Hamoudi',
        diagnosis: 'Hypertension',
        prescriptions: [
          { name: 'Amlor', dosage: '5mg, 1 comprimé par jour' },
          { name: 'Lasilix', dosage: '40mg, matin uniquement' },
        ],
      },
    ]);
  }, []);

  if (!patient) return <div>Chargement du dossier médical...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dossier Médical du Patient</h2>

      {/* Patient Info */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Informations du patient</h5>
          <p className="card-text">
            <strong>ID:</strong> {patient.id}<br />
            <strong>Nom:</strong> {patient.name}<br />
            <strong>Date de naissance:</strong> {patient.birthdate}<br />
            <strong>Sexe:</strong> {patient.gender}<br />
            <strong>Groupe sanguin:</strong> {patient.bloodType}
          </p>
        </div>
      </div>

      {/* Antecedents */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Antécédents Médicaux</h5>
          <ul className="mb-0">
            {antecedents.map(a => (
              <li key={a.id}>
                {a.condition} ({a.year})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Medical History */}
      <h4 className="mb-3">Historique des Consultations</h4>
      {history.map(entry => (
        <div className="card mb-3" key={entry.id}>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{entry.date} — {entry.doctor}</h6>
            <p><strong>Diagnostic:</strong> {entry.diagnosis}</p>
            <p><strong>Prescriptions:</strong></p>
            <ul>
              {entry.prescriptions.map((p, index) => (
                <li key={index}>
                  <strong>{p.name}</strong>: {p.dosage}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DossierMedical;
