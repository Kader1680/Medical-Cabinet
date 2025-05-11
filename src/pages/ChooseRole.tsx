import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleChoose = (role: string) => {
    if (role === "doctor") {
      navigate("/signUpdoctor");
    } else if (role === "secretary") {
      navigate("/SignUsecrutary");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Choisissez votre rôle</h2>
      <div className="d-flex justify-content-center gap-4">
        <button className="btn btn-primary px-4" onClick={() => handleChoose("doctor")}>
          Je suis un Docteur
        </button>
        <button className="btn btn-secondary px-4" onClick={() => handleChoose("secretary")}>
          Je suis une Secrétaire
        </button>
      </div>
    </div>
  );
};

export default ChooseRole;
