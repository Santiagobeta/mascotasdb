import "./Mascotas.css";
import Mascota from "../Mascota/Mascota";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Mascotas() {
  

  return (
    <div>
      <img src={"http://localhost:3000/img/1.png"} className="portada"></img>
    </div>
  );
}

export default Mascotas;
