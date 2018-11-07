import React from 'react';
import Carrousel from './Carrousel';
import Timer from './Timer';

const Event = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

        <div className="event_name">
            <div className="wrapper">
                HSM React Hackathon
            </div>
        </div>

        <Timer/>
            
        </div>
    );
};

export default Event;