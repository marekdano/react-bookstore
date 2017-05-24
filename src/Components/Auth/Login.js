
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Login extends Component {

	handleFormSubmit({ email, password }) {
		console.log(email, password);
		// Need to do something to log user in
		this.props.loginUser({ email, password });
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component="input" type="text" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component="input" type="text" className="form-control" />
				</fieldset>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		)
	}
}

Login = reduxForm({
	form: 'login',
	fields: ['email', 'password']
})(Login);

Login = connect(null, actions)(Login);

export default Login;

