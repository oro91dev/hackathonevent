import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteuous footer_logo_hack">Oslo Hackathon</div>
                <div className="footer_copyright">
                    Oslo Hackathon @2019. All rights reserved.
                </div>

            </Fade>
        </footer>
    );
};

export default Footer;