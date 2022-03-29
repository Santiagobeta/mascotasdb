import "./Mascotas_Encontradas.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Busqueda from "../Busqueda/Busqueda";

function Mascotas_encontradas() {
  const [mascotas_encontradas, setMascotas_encontradas] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;
  console.log("isUserLoggedIn", isUserLoggedIn);

  const cargarMascotas_encontradas = () => {
    fetch("http://localhost:3000/json/mascotas_encontradas.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMascotas_encontradas(data));
  };

  useEffect(() => {
    cargarMascotas_encontradas();
  }, []);

  return (
    <section id="mascotas_encontradas">
      <div>
      <Busqueda></Busqueda>
      </div>
      <div className="container">
        <h1>Mascotas</h1>
        {isUserLoggedIn ? (
          <button className="btn btn-dark agregar-mascotas_encontradas">
            Agregar Mascota encontradas
          </button>
        ) : null}
        <div className="grid-mascotas_encontradas">
          {mascotas_encontradas.map((mascota) => (
            <Mascota key={mascota.id} data={mascota}></Mascota>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mascotas_encontradas;
