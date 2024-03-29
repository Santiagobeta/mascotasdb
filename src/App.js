import "./App.css";
import Mascotas from "./components/Mascotas/Mascotas";
import Mascotas_Perdidas from "./components/Mascotas_Perdidas/Mascotas_Perdidas";
import Mascotas_Encontradas from "./components/Mascotas_Encontradas/Mascotas_Encontradas";
import Mascotas_Adopcion from "./components/Mascotas_Adopcion/Mascotas_Adopcion";
import Mis_Reportes from "./components/Mis_Reportes/Mis_Reportes";
import Agregar from "./components/Agregar/Agregar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/template/Template";

import Login from "./components/Login/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Hacer_Reporte from "./components/Hacer_Reporte/Hacer_Reporte";
import Hacer_Busqueda from "./components/Hacer_Busqueda/Hacer_Busqueda";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="agregar_reporte" element={<Agregar/>} />
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/mascotas" replace />} />
            <Route path="mascotas" element={<Mascotas />} />
            <Route path="mascotas_perdidas" element={<Mascotas_Perdidas />} />
            <Route path="mascotas_encontradas" element={<Mascotas_Encontradas />} />
            <Route path="mascotas_adopcion" element={<Mascotas_Adopcion />} />
            <Route path="mascotas" element={<Mascotas />} />
            <Route path="series" element={<></>} />
            <Route path="login" element={<Login></Login>} />
            <Route path="mis_reportes" element={<Mis_Reportes />} />
            <Route path="hacer_reporte" element={<Hacer_Reporte />} />
            <Route path="hacer_busqueda" element={<Hacer_Busqueda />} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
