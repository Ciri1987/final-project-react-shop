import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.scss';

export const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact-header"> Please, feel free to contact us!</h1>
            <h2 className="contact-adress">Downing Street 302901, New York, United States of America
            </h2>

            <a className="contact-phone" href="tel:+00822132732">+00822132732</a>
            <a className="contact-mail" href="mailto:beauty@shop.com">beauty@shop.com</a>
            <h3 className="contact-title">You can find us on:</h3>
            <div className="contact-social">
                <div className="contact-social-twitter"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></div>
                <div className="contact-social-facebook"> <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></div>
                <div className="contact-social-instagram"> <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></div>
                <div className="contact-social-github">  <FontAwesomeIcon icon={['fab', 'github']} size="lg" /></div>
            </div>
        </div>
    )
}

export default Contact;