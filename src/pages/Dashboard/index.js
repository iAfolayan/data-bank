import React, { Component, Fragment } from 'react';
import { Statistic} from 'semantic-ui-react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
// import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Statistic.Group widths='three'>
            <Statistic>
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>Clergy</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>56</Statistic.Value>
              <Statistic.Label>Members</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>5</Statistic.Value>
              <Statistic.Label>Flights</Statistic.Label>
            </Statistic>

            {/* <Statistic>
              <Statistic.Value>
                <Image src='/images/avatar/small/joe.jpg' className='circular inline' />
                42
              </Statistic.Value>
              <Statistic.Label>Team Members</Statistic.Label>
            </Statistic> */}
          </Statistic.Group>
        <Footer />
      </Fragment>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
