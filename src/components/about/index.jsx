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
                    Smply deliver is an online platform where you can order groceries, medicines, food and other
                    daily and essential items from your nearby store. Our journey began with a problem of getting items delivered to doorstep from near by stores.
                    Our team found out a solution to resolve this problem by focusing on logistics and bringing stores to customer's phone in a single tap.
                </p>
                <p className="sub-title container">
                    Join us on our journey, we are looking forward to serve you better :)
                </p>
            </div>
        </Layout>
    );

}