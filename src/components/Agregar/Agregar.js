import React, {useState} from 'react';

import "./Agregar.css";

const tipo_reporte =[
    {
        "docs" : "Mascotas perdidas"
    },
    {
        "docs" : "Mascotas encontradas"
    },
    {
        "docs" : "Mascotas en adopción"
    }
]

const sexo =[
    {
        "docs" : "Hembra"
    },
    {
        "docs" : "Macho"
    }
]

const especies =[
    {
        "docs" : "Perro"
    },
    {
        "docs" : "Gato"
    }
]

const estaturas =[
    {
        "docs" : "Bajo"
    },
    {
        "docs" : "Mediano"
    },
    {
        "docs" : "Alto"
    }   
]

const municipios =[
    {
        "docs" : "Barbosa"
    },
    {
        "docs" : "Bello"
    },
    {
        "docs" : "Caldas"
    },
    {
        "docs" : "Copacabana"
    }, 
    {
        "docs" : "Envigado"
    },
    {
        "docs" : "Girardota"
    }, 
    {
        "docs" : " Itagüí"
    },
    {
        "docs" : "La estrella"
    },
    {
        "docs" : "Medellin"
    },
    {
        "docs" : "Sabaneta"
    },  
]

const microchip =[
    {
        "docs" : "Sí"
    },
    {
        "docs" : "No"
    }
]

function Agregar() {
    
    const [valorFecha, setFecha]=useState("");

    return (
        <section id="agregar_reporte">
        <div className="jumbotron">
            <form className='agregar-reporte'>
                <input type="date" id='date' value={valorFecha} onChange={(e)=>setFecha(e.target.value)}></input>
                <select name="tipo_reporte" id="selectReporte">
                        <option value={-1}> Tipo de reporte</option>
                        {
                            tipo_reporte.map((item,i)=>(
                                <option key={"tipo_reporte"+i} value={i}> {item.docs} </option>
                            ))
                        }
                </select>
                <input type="text" id='nombre' placeholder='Nombre'></input>
                <select name="sexo" id="selectSexo">
                        <option value={-1}> Sexo</option>
                        {
                            sexo.map((item,i)=>(
                                <option key={"sexo"+i} value={i}> {item.docs} </option>
                            ))
                        }
                </select>
                <input type="number" id='edad' placeholder='Edad (meses)'></input>
                <select name="especies" id="selectEspecies">
                        <option value={-1}> Especie</option>
                        {
                            especies.map((item,i)=>(
                                <option key={"especies"+i} value={i}> {item.docs} </option>
                            ))
                        }
                </select>
                <input type="text" id='raza' placeholder='Raza'></input>
                <input type="text" id='color' placeholder='Color'></input>
                <select name="estaturas" id="selectEstaturas">
                        <option value={-1}> Estatura</option>
                        {
                            estaturas.map((item,i)=>(
                                <option key={"estaturas"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <input type="text" id='rasgos' placeholder='Rasgos'></input>
                <select name="municipios" id="selectMunicipios">
                        <option value={-1}> Municipio</option>
                        {
                            municipios.map((item,i)=>(
                                <option key={"municipios"+i} value={i}> {item.docs} </option>
                            ))
                        }
                </select>
                <input type="text" id='enfermedades' placeholder='Enfermedades'></input>
                <select name="microchip" id="selectMicrochip">
                        <option value={-1}> Microchip</option>
                        {
                            microchip.map((item,i)=>(
                                <option key={"microchip"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <input type="submit" value="Subir foto"></input>
                <input type="submit" value="Agregar"></input>
            </form>
        </div>
    </section>
    );
}

export default Agregar;