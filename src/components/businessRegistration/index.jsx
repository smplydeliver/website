import React from 'react';
import Layout from '../common/layout';
import TextBox from '../common/textBox';
import './index.scss';
import b7 from '../assets/b7.svg';
import MyHttp from '../helpers/myHttp';

export default class RegistrationBusiness extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            store_name: "",
            email: "",
            phone: "",
            store_category: "",
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
            store_name: this.state.store_name,
            email: this.state.email,
            phone: this.state.phone,
            store_category: this.state.store_category,
        }

        if (this.state.phone.length !== 10){
            return this.setState({show: true, type: 'error', message:"Kindly enter correct phone number!"})
        }

        try {
            const response = await MyHttp.post('/api/v1/store/reg', data); 
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
                        <p className="reg-title"> Early Bird <span>Registration</span> </p>
                        <p className="reg-sub-title"> Register to <span>Smply</span>deliver early bird benifits programe to avail benifits.  </p>
                    </center>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src={b7} className="img-fluid" alt="Regiter For Early Bird Benifits" />
                        </div>
                        <div className="col-xl-5 form-container">
                        <p className="reg-sub-title"> Fill up the details in the form given below  </p>
                            <form onSubmit={this.onSubmit}>
                                <TextBox type="text" onChange={(event) => this.onChange(event)} name="name" required={true} placeholder="Name" />
                                <TextBox type="text" onChange={(event) => this.onChange(event)} name="store_name" required={true} placeholder="Your Store Name" />
                                <TextBox type="email" onChange={(event) => this.onChange(event)} name="email" required={true} placeholder="Email" />
                                <TextBox type="number" onChange={(event) => this.onChange(event)} name="phone" required={true} placeholder="Phone Number" />
                                <TextBox type="text" onChange={(event) => this.onChange(event)} name="store_category" required={true} placeholder="Store Category" />
                                <input type="submit" onChange={(event) => this.onChange(event)} className="btn btn-md btn-warning btn-text" value="Register" />
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