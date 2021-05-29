import React from 'react';
import './index.scss'
import logo from '../../assets/logo-footer.svg';
import TextBox from '../textBox';
import TextAreaCustom from '../textAreaCustom';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="contact-us-section">

                <div>
                    <p className="cu-heading"> Contact Us  </p>
                    <p className="cu-subtext"> Please feel free to connect with us. Our team is willing to serve better. Send us a message by simply filling up this form. </p>
                    <form>
                        <TextBox type="email" required={true} placeholder="Email" />
                        <TextBox type="text" required={true} placeholder="Subject" />
                        <TextAreaCustom  required={true} />
                        <input type="submit" className="btn btn-md btn-warning btn-text" value="Send Message" />
                    </form>

                </div>
                <div className="footer-last row">
                    <div className="col-xl-5">
                        <img src={logo} className="logo-footer img-fluid" />
                    </div>
                    <div className="col-xl-5">
                        <p className="footer-last-copy"> Copyright © 2021 Smplydeliver </p>
                    </div>
                    <div className="col-xl-2 footer-last-inline ">
                        <a className="footer-last-link" href="https://www.facebook.com/Smply-Deliver-110876137774251" target="_blank"> Facebook </a>
                        <a className="footer-last-link" href="https://www.instagram.com/smplydeliver/" target="_blank"> Instagram </a>
                        <a className="footer-last-link" href="https://www.linkedin.com/company/smplydeliver" target="_blank"> LinkedIn </a>
                    </div>
                </div>
            </div>
        );
    }
}