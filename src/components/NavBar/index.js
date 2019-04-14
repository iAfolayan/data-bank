import React, { Component, createRef, Fragment } from 'react';
import { Menu, Segment, Input, Sticky, Image, Header } from 'semantic-ui-react';
import ourLogo from '../../OurLogo.svg';
import './NavBar.scss';
// import PropTypes from 'prop-types';

class NavBar extends Component {
  state = { activeItem: 'Dashboard' }
  contextRef = createRef();

  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state

    return (
        <Segment padded size='mini'>
          <Sticky context={this.contextRef}>
            <Menu secondary>
              <Image src={ourLogo} size='tiny' alt="kwara Diocese" className="logo" />
              <Menu.Item position='right' name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
              <Menu.Item
                name='Feedback'
                active={activeItem === 'Feedback'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Profile'
                active={activeItem === 'Profile'}
                onClick={this.handleItemClick}
              />
              {/* <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu> */}
            </Menu>
          </Sticky>
        </Segment>
    )
  }
}

// NavBar.propTypes = {

// };

export default NavBar;