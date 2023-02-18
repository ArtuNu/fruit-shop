import "../styles/header.css";
import { Link } from "react-router-dom";
import {useState} from 'react';


export default function Header() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div id="Header">
      <Link to={"/"}>
        <div className="header-img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo-fruteria.png?20230207212045"
            alt=""
          />
        </div>
      </Link>
      <nav className={`header-nav ${click ? "active" : ""}`}>
        <Link to={"/"}>
          <b className="header-nav-link" onClick={handleClick}>Inicio</b>
        </Link>
        <Link to={"/cart"}>
          <b className="header-nav-link" onClick={handleClick}>
            Carrito
          </b>
        </Link>
      </nav>
      <div className="bars-container" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
