import React from 'react';
import './index.scss'
import logo from '../../assets/logo-footer.svg';
import TextBox from '../textBox';
import TextAreaCustom from '../textAreaCustom';
import MyHttp from '../../helpers/myHttp'


export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            subject: "",
            message: "",
            show: false,
            type: "error"
        }

        // function bindings 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    async onSubmit(e) {
        e.preventDefault();
        const data = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }
        
        try {
            const response = await MyHttp.post('/api/v1/contacts', data);
            if (response.status === 200) {
                this.setState({show: true, type: 'success'})
            }
        } catch (err) {
            console.error("ERR : " + err)
            this.setState({show: true, type: 'error'})
        }

    }



    render() {

        return (
            <div className="contact-us-section">

                <div>
                    <p className="cu-heading"> Tell us your Queries, We are Listening </p>
                    <form onSubmit={this.onSubmit}>
                        <TextBox type="email" name="email" required={true} onChange={(e) => this.onChange(e)} placeholder="Email" />
                        <TextBox type="text" name="subject" required={true} onChange={(e) => this.onChange(e)} placeholder="Subject" />
                        <TextAreaCustom name="message" onChange={(e) => this.onChange(e)} required={true} />
                        <input type="submit" className="btn btn-md btn-warning btn-text" value="Send Message" />
                        {
                            this.state.show ?
                                this.state.type !== "error" ? <div className="alert-spaces alert alert-success">
                                    Thank you for reaching out to us. Our team will get in touch with you soon.
                                </div> : <div className="alert-spaces alert alert-danger">
                                    Opps! something went wrong! Kindly try again in after sometime. 
                                </div> : ""
                        }

                    </form>

                </div>
                <div className="footer-last row">
                    <div className="col-xl-5">
                        <img src={logo} alt="logo" className="logo-footer img-fluid" />
                    </div>
                    <div className="col-xl-5">
                        <p className="footer-last-copy"> Copyright © 2021 Smplydeliver </p>
                    </div>
                    <div className="col-xl-2 footer-last-inline ">
                        <a className="footer-last-link" rel="noreferrer" href="https://www.facebook.com/Smply-Deliver-110876137774251" target="_blank"> Facebook </a>
                        <a className="footer-last-link" rel="noreferrer" href="https://www.instagram.com/smplydeliver/" target="_blank"> Instagram </a>
                        <a className="footer-last-link" rel="noreferrer" href="https://www.linkedin.com/company/smplydeliver" target="_blank"> LinkedIn </a>
                    </div>
                </div>
            </div>
        );
    }
}