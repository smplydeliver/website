import React from 'react';
import Footer from '../footer';
import NavBar from '../navbar';

export default class Layout extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}