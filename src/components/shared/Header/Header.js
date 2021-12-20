import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <h4>Where in the world?</h4>
      <div className="theme-switch">
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;