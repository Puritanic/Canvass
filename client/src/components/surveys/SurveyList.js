import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

export class SurveyList extends Component {
  componentDidMount = () => {
    this.props.fetchSurveys();
  };

  render() {
    return this.props.surveys
      .reverse()
      .map(({
        id, title, subject, body, dateSent, yes, no
      }) => (
        <div className="card blue-grey darken-1" key={id}>
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{body}</p>
            <p className="right">
              Sent on {new Date(dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Positive votes: {yes}</a>
            <a>Negative votes: {no}</a>
          </div>
        </div>
      ));
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
