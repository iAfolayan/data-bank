import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Footer />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;