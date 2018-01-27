import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Header from './Header';
import SurveyNew from './surveys/SurveyNew';

class App extends React.Component {
  componentDidMount = () => {
    console.log('[did Mount]');
    this.props.fetchUser();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
