import React from 'react';
import Layout from '../common/layout';
import './index.scss'

export default function About(props) {

    return (
        <Layout>

            <div className="about-container ">
                <div className="about">

                    <p className="about-title"> About Smply<span>deliver</span></p>
                    <p className="about-sub-title"> We deliver almost everything to your doorstep. </p>
                </div>
                <p className="title container"> Connecting Stores & Customers </p>
                <p className="sub-title container">
                    Have you ever imagined getting your essentials to your  needs delivered to your home, all at just a click away?
                    Smply deliver is the easiest way to order food  fruits and vegetables, grocery, medicines, stationery,
                    Pet-supplies, meat and fish, food, etc. from your nearby hyperlocal.

                </p>
                <p className="sub-title container"> We are looking forward to serving you better with Smply deliver. </p>
            </div>
        </Layout>
    );

}