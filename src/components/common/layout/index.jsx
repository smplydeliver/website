import React from 'react';
import NavBar from '../navbar';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}