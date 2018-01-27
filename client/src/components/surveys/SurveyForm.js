import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
