import { Link } from "react-router-dom";
import "./Mascota.css";

function Mascota({ data }) {
  return (
    <div className="mascota">
      <img src={data.imagen}></img>
      <div className="info">
        <h2>{data.Nombre}</h2>
        <h2>{data.Tipo_Reporte}</h2>
        <Link to={`/mascota/${data.id}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Mascota;
