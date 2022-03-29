import "./Mis_Reportes.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Agregar from "../Agregar/Agregar";

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
        <h1>Mis reportes</h1>
        {isUserLoggedIn ? (
          <div>
          <Agregar></Agregar>
          </div>
        ) : null}
        <br></br>
        <br></br>
        <br></br>
        <div className="grid-mis_Reportes">
          {mis_Reportes.map((mascota) => (
            <Mascota key={mascota.id} data={mascota}></Mascota>
          ))}
        </div>{isUserLoggedIn ? (
          <button className="btn btn-dark botones-mis_Reportes">
            Editar Reporte
          </button>
        ) : null}
        {isUserLoggedIn ? (
          <button className="btn btn-dark botones-mis_Reportes">
            Borrar Reporte
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default Mis_Reportes;
