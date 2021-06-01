import React from 'react';
import Layout from '../common/layout';
import TextBox from '../common/textBox';
import './index.scss';
import ebb from '../assets/ebb.svg';

export default class Registration extends React.Component {
    render() {
        return (
            <Layout>
                <div className="registration-component">
                    <center>
                        <p className="reg-title"> Early Bird <span>Registration</span> </p>
                        <p className="reg-sub-title"> Register to <span>Smply</span>deliver early bird benifits programe to avail discounts & offers.  </p>
                    </center>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={ebb} className="img-fluid" />
                        </div>
                        <div className="col-xl-5 form-container">
                        <p className="reg-sub-title"> Fill up the details in the form given below  </p>
                            <form>
                                <TextBox type="text" required={true} placeholder="Name" />
                                <TextBox type="email" required={true} placeholder="Email" />
                                <TextBox type="tel" required={true} placeholder="Phone Number" />

                                <input type="submit" className="btn btn-md btn-warning btn-text" value="Register" />
                            </form>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}