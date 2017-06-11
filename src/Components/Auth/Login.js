
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

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

	getRedirectPath() {
    const locationState = this.props.location.state;
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname // redirects to referring url
    } else {
      return '/'
    }
  }		

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (this.props.authenticated ?
			<Redirect to={{ pathname: this.getRedirectPath(), state: { from: this.props.location } }} />
			:
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

