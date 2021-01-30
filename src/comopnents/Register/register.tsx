import React from 'react';
export interface User {
    firstname: string;
    lastname: string;
    email: string;
    subscribed: boolean;
}
class Register extends React.Component<{}, User> {
    constructor(props: User) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            subscribed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value,
            }
        );
    }

    handleSubmit() {
        var subscribed = this.state.subscribed ? 'Yes' : 'No';
        alert(`Firstname: ${this.state.firstname}, Lastname: ${this.state.lastname}, Email: ${this.state.email}, Subscribed: ${subscribed}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChange} />
                <input className="form-control" type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleChange} />
                <input className="form-control" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
        )
    }
}

export default Register;