
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {

	handleFormSubmit({ email, password }) {
		console.log(email, password);
		// Need to do something to log user in
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />
				</fieldset>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'login',
	fields: ['email', 'password']
})(Login);