import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Icon,
  Form,
  Image,
  Grid,
  Segment,
  Modal,
} from 'semantic-ui-react';
import ourLogo from '../../OurLogo.svg';
import './Home.scss';

// import PropTypes from 'prop-types';

class Home extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size} = this.state;
    
    return (
      <div className="form-holder">
        <Segment stacked padded raised size="mini" color="blue">
          <Grid columns={2} relaxed='very' stackable>
          <Grid.Column verticalAlign='middle'>
            <Image src={ourLogo} size='tiny' centered alt="kwara Diocese" />
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Input icon='at' iconPosition='left' label='Email Address' placeholder='Email Address' />
                <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='Password' />
                <Link to='dashboard'>
                  <Button icon='sign-in' labelPosition='left' content='LOGIN' fluid primary size='big' />
                </Link>
              </Form>
              <Divider horizontal>No account <Icon link name='help' size='tiny' /></Divider>
              <Button onClick={this.show('mini')} animated='fade' color="teal" fluid>
                <Button.Content hidden>REGISTER</Button.Content>
                <Button.Content visible>
                  <Icon name='signup' />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid>
          <Divider vertical className="loginDivider" />
        </Segment>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>CREATE AN ACCOUNT</Modal.Header>
          <Modal.Content>
          <Form>
            <Form.Input icon='user' iconPosition='left' label='Firstname' placeholder='Firstname' />
            <Form.Input icon='user' iconPosition='left' label='Lastname' placeholder='Lastname' />
            <Form.Input icon='at' iconPosition='left' label='Email Address' placeholder='Email Address' />
            <Form.Input icon='eye slash' iconPosition='left' label='Password' placeholder='Password' type="password" />            
            <select>
              <option value="0" disabled>Select Account type</option>
              <option value="1">Clergy</option>
              <option value="2">Fellowship</option>
            </select>
          </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon='signup' labelPosition='right' content='REGISTER' />
          </Modal.Actions>
        </Modal>
       </div>
    );
  }
}

// Home.propTypes = {};

export default Home;
