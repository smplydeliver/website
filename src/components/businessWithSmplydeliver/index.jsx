import React from 'react';
import Layout from '../common/layout';
import b1 from '../assets/b1.svg'
import b2 from '../assets/b2.svg'
import b3 from '../assets/b3.svg'
import b4 from '../assets/b4.svg'
import b5 from '../assets/b5.svg'
import b6 from '../assets/b6.svg'
import b7 from '../assets/b7.svg'
import './index.scss'
import TitleDesc from './titleDesc';

export default class BusinessWithSmplydeliver extends React.Component {
    render() {
        return (
            <Layout>
                <div className="business-with-smplydeliver">
                    <div className="bwsd-section-1">

                        <p className="bwsd-title"> Business With Smply<span>deliver</span></p>
                        <p className="bwsd-sub-title"> Accelerate your business with <span>Smply</span>deliver </p>
                    </div>

                    <div className="bwsd-section-2">
                        <p className="bwsd-title-2"> What We Bring On The Table </p>
                        <div className="row">
                            <TitleDesc
                                src={b1}
                                title="Increase Sales"
                                desc="With our fast & increasing user-base, create an online presence where it really matters. "
                            />
                            <TitleDesc
                                src={b2}
                                title="Inventory Management"
                                desc="Manage your inventory with our simple and easy to use App & Dashboard. "
                            />

                            <TitleDesc
                                src={b6}
                                title="Order Management"
                                desc="Manage your order to be delivered with our simple and easy to use App and Dashboard"
                            />

                            <TitleDesc
                                src={b4}
                                title="Revenue Management"
                                desc="Manage your weekly and monthly revenues with our simple and easy to use App & Dashboard"
                            />
                            <TitleDesc
                                src={b5}
                                title="Logistics Solution"
                                desc="With our expert delivery executives, you don't have to worry about things getting delivered on time."
                            />
                            <TitleDesc
                                src={b3}
                                title="Improved Customer Management"
                                desc="Improve your customer relationships by facilitating them on ordering items with our smple & easy to use App."
                            />
                        </div>

                    </div>
                    <div className="bwsd-section-3">
                    <p className="bwsd-title-3"> Register With Us For <span>Early Bird Benifits</span>  </p>
                    <p className="bwsd-sub-title"> Enjoy early bird benifits by registering your store with us.</p>
                    <div className="row">
                                <div className="col-xl-5">
                                    <img src={b7} alt="hero" className="img-fluid img-hero" />
                                </div>
                                <div className="col-xl-5">
                                    <p className="reb-heading-3"> Early Bird <span>Benifits </span></p>
                                    <ul>
                                        <li> <p className="reb-list"> Avail 4 months free advertisement on our app.   </p> </li>
                                        <li> <p className="reb-list"> Premium Seller Tag for 2 months. </p> </li>
                                        <input type="button" onClick={() => this.props.history.push('/business/register')} className="btn btn-md btn-warning btn-text" value="Register Now" />
                                        
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>

            </Layout>
        );
    }
}