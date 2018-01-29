import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../helpers/validateEmail';
import formFields from './formFields';

const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmail(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${name}`;
    } else if (name === 'body' && values.body.length < 15) {
      errors.body = 'Email body must be longer than 30 characters';
    }

    return errors;
  });

  return errors;
};

export class SurveyForm extends Component {
  renderFields = arr =>
    arr.map(({ label, name }) => (
      <Field
        key={name}
        component={SurveyField}
        type="text"
        name={name}
        label={label}
      />
    ));

  render() {
    return (
      <div>
        {/* handleSubmit func is provided to us by reduxForm */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields(formFields)}
          <button className="teal btn-flat white-text right" type="submit">
            Continue
            <i className="material-icons right">done</i>
          </button>
          <Link to="/surveys" className="red btn-flat white-text left">
            Cancel
            <i className="material-icons left">clear</i>
          </Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: 'surveyForm'
})(SurveyForm);
