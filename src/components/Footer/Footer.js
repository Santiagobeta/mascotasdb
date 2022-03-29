import React from 'react';

function Footer() {
    return (
        <div>
            <hr className="seperator" />
                <section className='container flex justify-space-between align-center'>
                    <div>
                        <h3>Encuentra a tu peludito</h3>
                        <p> Aplicación web donde se puede sistematizar los reportes y realizar consultas sobre las mascotas perdidas o en adopción en el Área Metropolitana, con el objetivo de que retornen pronto a su hogar o consigan uno, antes de llegar a convertirse en fauna feral, proporcionando datos sobre la mascota y la localización del lugar en que se extravió o reportó su avistamiento.  </p>
                    </div>
                    <div >
                        <h3> <i className="fa-solid fa-envelope"></i> Contáctanos</h3>
                        <ul> angela.alarcon.bioing@gmail.com</ul>  
                        <ul>bioing.santiago.betancur@gmail.com</ul> 
                    </div>
                </section>
                <section className='container flex justify-space-between align-center'>
                    <br></br>
                    © 2022 Copyright
                </section>
                
            <hr className="seperator" />
        </div>
    );
}

export default Footer;