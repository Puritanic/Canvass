import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({
  onCancel, formValues, submitSurvey, history
}) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text right"
        type="submit"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
      <button
        onClick={onCancel}
        className="yellow darken-3 btn-flat white-text left"
      >
        Go back
        <i className="material-icons left">chevron_left</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
