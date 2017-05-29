
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

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage }
				</div>
			)
		}
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component="input" type="email" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component="input" type="password" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return { 
		authenticated: state.auth.authenticated,
		errorMessage: state.auth.error };
}

Login = reduxForm({
	form: 'login',
	fields: ['email', 'password']
})(Login);

Login = connect(mapStateToProps, actions)(Login);

export default Login;

