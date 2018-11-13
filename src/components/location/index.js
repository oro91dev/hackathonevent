import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
        <div className="location_tag">
                <div>Lokasjon</div>
            </div>
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.7702000641023!2d10.729979216096195!3d59.91936108186919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7933444839%3A0x3e652c3192df0813!2sLinstows+gate+3%2C+0166+Oslo!5e0!3m2!1sno!2sno!4v1542126052939" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>

            </iframe>

      
        </div>
    );
};

export default Location;