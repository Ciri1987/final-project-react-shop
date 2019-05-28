import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.scss';

export const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact-header"> Please, feel free to contact us!</h1>
            <p className="contact-adress">Downing Street 302901, New York, United States of America
            </p>

            <a className="contact-phone" href="tel:+123456789">mobile: +12 3456789</a>
            <a className="contact-mail" href="mailto:beauty@shop.com">mail: beauty@shop.com</a>
            <h2 className="contact-title">You can find us on:</h2>
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