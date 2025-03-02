import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const hadleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      NotFound
      <button onClick={hadleGoHome}>Back</button>
    </div>
  );
};

export default NotFound;
