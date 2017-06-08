
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Register extends Component {
	handleFormSubmit(formProps) {
		// call action creator to sign up the user
		this.props.registerUser(formProps);
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component={renderField} type="email" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component={renderField} type="password" className="form-control"/>	
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm Password:</label>
					<Field name="passwordConfirm" component={renderField} type="password" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Register</button>
			</form>
		);
	}
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
)

function validate(formProps) {
	const errors = {};

	if (!formProps.email) {
		errors.email = "Please enter an email";
	}

	if (!formProps.password) {
		errors.password = "Please enter a password";
	}

	if (!formProps.passwordConfirm) {
		errors.passwordConfirm = "Please enter a password confirmation";
	}

	if (formProps.password !== formProps.passwordConfirm) {
		errors.password = "Passwords must match!";
	}

	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error }
}

Register = reduxForm({
	form: 'register',
	fields: ['email', 'password', 'passwordConfirm'],
	validate: validate
})(Register);

export default connect(mapStateToProps, actions)(Register);
