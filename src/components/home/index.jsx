import React from 'react';
import Layout from '../common/layout';
import './index.scss';
import hero from '../assets/hero-2.svg';
import hero2 from '../assets/hero-summer.svg';
import RegisterButton from '../common/registerButton';
import groceries from '../assets/1.svg';
import p2 from '../assets/2.svg';
import p3 from '../assets/3.svg';
import p4 from '../assets/4.svg';
import p5 from '../assets/5.svg';
import p6 from '../assets/6.svg';
import p7 from '../assets/7.svg';
import p9 from '../assets/9.svg';
import p11 from '../assets/11.svg';
import p12 from '../assets/12.svg';
import p13 from '../assets/13.svg';
import p14 from '../assets/14.svg';

import WeDeliverImgComponent from '../common/weDeliverImgComponent';
export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="home-container">
                        <div className="hero-container">
                            <div className="row">
                                <div className="heading-holder col-xl-4 ">
                                    <p className="heading"> Order items from your favorite stores. </p>
                                    <p className="sub-heading">Order groceries, food, fruits, vegitables, medicines and many more from nearby stores and vendors to your doorstep. </p>
                                    <RegisterButton value="Register Now" />
                                </div>
                                <div className="hero-holder col-xl-8">
                                    <img src={hero} alt="hero" className="img-fluid img-hero" />
                                </div>
                            </div>
                        </div>
                        <div className="home-we-deliver">
                            <p className="we-deliver-heading"> WE <span>DELIVER</span> </p>
                            <p className="we-deliver-heading-2 container"> From essentials to wants we got you covered </p>
                            <div className="we-deliver-photos row">

                                <WeDeliverImgComponent col="2" photo={groceries} name="Grocerries" />
                                <WeDeliverImgComponent col="2" photo={p2} name="Food" />
                                <WeDeliverImgComponent col="2" photo={p3} name="Fruits & Vegitables" />
                                <WeDeliverImgComponent col="2" photo={p4} name="Medicines" />
                                <WeDeliverImgComponent col="2" photo={p5} name="Stationery" />
                                <WeDeliverImgComponent col="2" photo={p6} name="Pet Supplies" />
                            </div>
                            <p className="we-deliver-heading"> WHY <span>CHOOSE US</span> </p>
                            <p className="we-deliver-heading-2"> On-Demand | Same-Day | Reliable | Exceptional at Door Experience  </p>
                            <div className="row">
                                <WeDeliverImgComponent col="4" photo={p12} name="Express Delivery" />
                                <WeDeliverImgComponent col="4" photo={p7} name="Trained Delivery Executives" />
                                <WeDeliverImgComponent col="4" photo={p13} name="Best Offers & Discounts" />
                                <WeDeliverImgComponent col="4" photo={p9} name="Live tracking " />
                                <WeDeliverImgComponent col="4" photo={p14} name="24X7 Availability" />
                                <WeDeliverImgComponent col="4" photo={p11} name="Specail Care For Fragile Items" />
                            </div>
                        </div>
                        <div className="register-early-bird">
                            <p className="reb-heading"> REGISTER <span>FOR BENIFITS</span> </p>
                            <p className="reb-heading-2 text-center container"> Enjoy early bird benifits by registering yourself with us</p>
                            <div className="row">
                                <div className="col-xl-8">
                                    <img src={hero2}  alt="hero" className="img-fluid img-hero" />
                                </div>
                                <div className="col-xl-4">
                               
                                </div>
                            
                            </div>
                        </div>
                    </div>

                </Layout>
            </React.Fragment>
        )
    }
}