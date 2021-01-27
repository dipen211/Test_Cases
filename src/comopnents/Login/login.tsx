import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div className="container-fluid box mt-5">
                <div className="loginbox shadow p-5">
                    <form className="p-2 mt-5">
                        <div className="mb-3">
                            <input id="email" type="text" name="email" onChange={this.handleChange} placeholder="Email/Username" className="text-center" />
                        </div>
                        <div className="mb-3 mt-4">
                            <input id="password" type="password" name="password" onChange={this.handleChange} placeholder="Password" className="text-center" />
                        </div>
                        <div className="Log-button">
                            <button className="btn" style={{ width: '10rem' }}>LOGIN</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}