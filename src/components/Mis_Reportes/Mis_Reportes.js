import "./Mis_Reportes.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Busqueda from "../Busqueda/Busqueda";

function Mis_Reportes() {
  const [mis_Reportes, setMis_Reportes] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;
  console.log("isUserLoggedIn", isUserLoggedIn);

  const cargarMis_Reportes = () => {
    fetch("http://localhost:3000/json/mascotas_encontradas.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMis_Reportes(data));
  };

  useEffect(() => {
    cargarMis_Reportes();
  }, []);

  return (
    <section id="mis_Reportes">
      <div className="container">
        <h1>Mascotas</h1>
        {isUserLoggedIn ? (
          <button className="btn btn-dark agregar-mis_Reportes">
            Agregar Reporte
          </button>
        ) : null}
        <div className="grid-mis_Reportes">
          {mis_Reportes.map((mascota) => (
            <Mascota key={mascota.id} data={mascota}></Mascota>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mis_Reportes;
