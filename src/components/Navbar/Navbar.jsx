import { useNavigate } from "react-router-dom";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src={navLogo}
        alt=""
        onClick={() => navigate("de_alunos_para_alunos/")}
      />
      <button
        className="nav__fork-button"
        onClick={() => navigate("/fork-tutorial")}
      >
        Quero fazer parte
      </button>
    </nav>
  );
};

export default Navbar;
