import React from 'react';
import Layout from '../common/layout';
import TextBox from '../common/textBox';
import './index.scss';
import ebb from '../assets/ebb.svg';
import MyHttp from '../helpers/myHttp';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '',
            phone: '',
            show: false, 
            type: "",
            message: ""
        }

        // function bindings 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            ...this.state, 
            [event.target.name]: event.target.value
        })
    }
    async onSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
        }

        if (this.state.phone.length !== 10){
            return this.setState({show: true, type: 'error', message:"Kindly enter correct phone number!"})
        }

        try {
            const response = await MyHttp.post('/api/v1/user/reg', data); 
            console.log(response.status)
            if(response.status === 200) {
                this.setState({show: true, type: 'success'})
            }
        } catch(error){
            console.error(error); 
            this.setState({show: true, type: 'error',  message: error})
        }
    }
    render() {
        return (
            <Layout>
                <div className="registration-component">
                    <center>
                        <p className="reg-title"> Early Bird <span>Registration (For Customers)</span> </p>
                        <p className="reg-sub-title"> Register to <span>Smply</span>deliver early bird benefits programe to avail discounts & offers.  </p>
                    </center>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={ebb} className="img-fluid" alt="register-illustration" />
                        </div>
                        <div className="col-xl-5 form-container">
                        <p className="reg-sub-title"> Fill up the details in the form given below  </p>
                            <form onSubmit={this.onSubmit}>
                                <TextBox type="text" name="name" onChange={(event) => this.onChange(event)} required={true} placeholder="Name" />
                                <TextBox type="email" name="email" onChange={(event) => this.onChange(event)} required={true} placeholder="Email" />
                                <TextBox type="number" name="phone" onChange={(event) => this.onChange(event)} required={true} placeholder="Phone Number" />

                                <input type="submit" className="btn btn-md btn-warning btn-text" value="Register" />
                            </form>
                            {
                            this.state.show ?
                                this.state.type !== "error" ? <div className="alert-spaces alert alert-success">
                                    You have been registered successfully!
                                </div> : <div className="alert-spaces alert alert-danger">
                                    {this.state.message}
                                </div> : ""
                            }
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}