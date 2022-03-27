import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container-fluid">  
      <ul className="menu flex">
        <li>
          <Link to="Mascotas_Adopcion">Mascotas en Adopción</Link>
        </li>
        <li>
          <Link to="Mascotas_Encontradas">Mascotas Encontradas</Link>
        </li>
        <li>
          <Link to="Mascotas_Perdidas">Mascotas pérdidas</Link>
        </li>
      </ul>
      <ul className="menu flex">
        <li>
          <Link to="Mascotas_Adopcion">Mis reportes</Link>
        </li>
        <li>
          <Link to="Mascotas_Encontradas">¿Cómo hacer reportes?</Link>
        </li>
        <li>
          <Link to="Mascotas_Perdidas">¿Cómo hacer búsquedas?</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
