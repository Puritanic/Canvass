import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href="/auth/google">Log in with Google</a>
        </li>
      );
    default:
      return [
        <li key="Payments">
          <Payments />
        </li>,
        <li key="credits" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
        </li>,
        <li key="Logout">
          <a href="/api/logout">Logout</a>
        </li>
      ];
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            style={{ marginLeft: '2rem' }}
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
          >
            <i className="material-icons">send</i>
            Canvass
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
