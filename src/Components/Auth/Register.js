
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Register extends Component {
	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

		return (
			<form>
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

Register = reduxForm({
	form: 'register',
	fields: ['email', 'password', 'passwordConfirm'],
	validate: validate
})(Register);

export default connect()(Register);
