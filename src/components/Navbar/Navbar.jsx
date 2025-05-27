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
        onClick={() => navigate("/")}
      />
      <button className="nav__button">Quero fazer parte</button>
    </nav>
  );
};

export default Navbar;
