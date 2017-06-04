
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
					<Field name="email" component="input" type="email" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component="input" type="password" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm Password:</label>
					<Field name="passwordConfirm" component="input" type="password" className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary">Register</button>
			</form>
		);
	}
}

Register = reduxForm({
	form: 'register',
	fields: ['email', 'password', 'passwordConfirm']
})(Register);

export default connect()(Register);
