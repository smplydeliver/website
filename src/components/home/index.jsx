import React from 'react';
import Layout from '../common/layout';
import './index.scss';
import hero from '../assets/hero-2.svg';
import RegisterButton from '../common/registerButton';
import groceries from '../assets/1.svg'; 
import p2 from '../assets/2.svg'; 
import p3 from '../assets/3.svg'; 
import p4 from '../assets/4.svg'; 
import p5 from '../assets/5.svg'; 
import p6 from '../assets/6.svg'; 


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
                            <p className="we-deliver-heading-2"> On-Demand | Same-Day | Reliable | Exceptional at Door Experience  </p>
                           <div className="we-deliver-photos row">
                               <WeDeliverImgComponent photo={groceries} name="Grocerries" />
                               <WeDeliverImgComponent photo={p2} name="Food" />
                               <WeDeliverImgComponent photo={p3} name="Fruits & Vegitables" />
                               <WeDeliverImgComponent photo={p4} name="Medicines" />
                               <WeDeliverImgComponent photo={p5} name="Stationery" />
                               <WeDeliverImgComponent photo={p6} name="Pet Supplies" />
                           </div>
                        </div>
                    </div>

                </Layout>
            </React.Fragment>
        )
    }
}