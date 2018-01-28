import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmail from '../../helpers/validateEmail';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title'
  },
  {
    label: 'Subject Line',
    name: 'subject'
  },
  {
    label: 'Email Body',
    name: 'body'
  },
  {
    label: 'Recipient List',
    name: 'emails'
  }
];

const validate = (values) => {
  const errors = {};
  errors.emails = validateEmail(values.emails || '');

  FIELDS.forEach(({ name }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields(FIELDS)}
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
  form: 'surveyForm'
})(SurveyForm);
