import React, {useState} from 'react';
import "./Busqueda.css";

const especies =[
    {
        "docs" : "Perro"
    },
    {
        "docs" : "Gato"
    }
]

const edades =[
    {
        "docs" : "0-1 Año"
    },
    {
        "docs" : "1-6 Años"
    },
    {
        "docs" : "6-10 Años"
    },
    {
        "docs" : "Mayor a 10 Años"
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

function Busqueda() {

    


    return (
        <div className="jumbotron">
            <h1>Búsqueda de mascotas</h1>
            <form className='registro'>
                <select name="especies" id="selectEspecies">
                        <option value={-1}> Especie</option>
                        {
                            especies.map((item,i)=>(
                                <option key={"especies"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>

                <select name="edades" id="selectEdades">
                        <option value={-1}> Edad</option>
                        {
                            edades.map((item,i)=>(
                                <option key={"edades"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <select name="estaturas" id="selectEstaturas">
                        <option value={-1}> Estatura</option>
                        {
                            estaturas.map((item,i)=>(
                                <option key={"estaturas"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <select name="municipios" id="selectMunicipios">
                        <option value={-1}> Municipio</option>
                        {
                            municipios.map((item,i)=>(
                                <option key={"municipios"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <input type="submit" value="Buscar"></input>
            </form>
        </div>
    );
}

export default Busqueda;