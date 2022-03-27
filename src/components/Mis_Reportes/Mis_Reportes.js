import "./Mascotas_Adopcion.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Mascotas_adopcion() {
  const [mascotas_adopcion, setMascotas_adopcion] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;
  console.log("isUserLoggedIn", isUserLoggedIn);

  const cargarMascotas_adopcion = () => {
    fetch("http://localhost:3000/json/mascotas_adopcion.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMascotas_adopcion(data));
  };

  useEffect(() => {
    cargarMascotas_adopcion();
  }, []);

  return (
    <section id="mascotas_adopcion">
      <div className="container">
        <h1>Mascotas</h1>
        {isUserLoggedIn ? (
          <button className="btn btn-dark agregar-mascotas_adopcion">
            Agregar Mascota adopcion
          </button>
        ) : null}
        <div className="grid-mascotas_adopcion">
          {mascotas_adopcion.map((mascota) => (
            <Mascota key={mascota.id} data={mascota}></Mascota>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mascotas_adopcion;
