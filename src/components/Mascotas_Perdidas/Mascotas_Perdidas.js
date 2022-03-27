import "./Mascotas_Perdidas.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Mascotas_perdidas() {
  const [mascotas_perdidas, setMascotas_perdidas] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;
  console.log("isUserLoggedIn", isUserLoggedIn);

  const cargarMascotas_perdidas = () => {
    fetch("http://localhost:3000/json/mascotas_perdidas.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMascotas_perdidas(data));
  };

  useEffect(() => {
    cargarMascotas_perdidas();
  }, []);

  return (
    <section id="mascotas_perdidas">
      <div className="container">
        <h1>Mascotas</h1>
        {isUserLoggedIn ? (
          <button className="btn btn-dark agregar-mascotas_perdidas">
            Agregar Mascota perdida
          </button>
        ) : null}
        <div className="grid-mascotas_perdidas">
          {mascotas_perdidas.map((mascota) => (
            <Mascota key={mascota.id} data={mascota}></Mascota>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mascotas_perdidas;
