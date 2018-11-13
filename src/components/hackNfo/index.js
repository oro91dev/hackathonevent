import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/icons/calendar.png';
import icon_location from '../../resources/icons/location.png';
import icon_menu from '../../resources/icons/menu.png';



const HackNfo = () => {
    return (
        <div className="bck_green">
            <div className="center_wrapper">
                <div className="hn_wrapper">
                <Zoom duration={500}>
                    <div className="hn_item">
                        <div className="hn_outer">
                            <div className="hn_inner">
                                <div className="hn_icon_square bck_red"></div>
                            <div
                                className="hn_icon"
                                style={{
                                    background:`url(${icon_calendar})`
                                }}
                            ></div>
                            <div className="hn_title">
                                Event Dato & Tid
                            </div>
                            <div className="hn_desc">
                                18 April 2019 @09:00
                            </div>
                            </div>
                        </div>
                    </div>

                </Zoom>
                <Zoom duration={500} delay={500}>
                   <div className="hn_item">
                      <div className="hn_outer">
                            <div className="hn_inner">
                                <div className="hn_icon_square bck_yellow"></div>
                                <div
                                    className="hn_icon"
                                    style={{
                                        background:`url(${icon_location})`
                                    }}
                                ></div>
                                <div className="hn_title">
                                    Sted: Festsalen
                                </div>
                                <div className="hn_desc">
                                Linstows gate 3, 0130 Oslo
                                </div>
                            </div>

                      </div>

                   </div>

                </Zoom>  
                <Zoom duration={500} delay={500}>
                   <div className="hn_item">
                      <div className="hn_outer">
                            <div className="hn_inner">
                                <div className="hn_icon_square bck_purple"></div>
                                <div
                                    className="hn_icon"
                                    style={{
                                        background:`url(${icon_menu})`
                                    }}
                                ></div>
                                <div className="hn_title">
                                    Pizza og Brus
                                </div>
                                <div className="hn_desc">
                                Servering klokken 13:00
                                </div>
                            </div>

                      </div>

                   </div>

                </Zoom> 
            </div>

            </div>
           
        </div>
    );
};

export default HackNfo;