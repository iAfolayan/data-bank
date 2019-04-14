import React, { Component, createRef } from 'react';
import { Menu, Segment, Input, Sticky } from 'semantic-ui-react'
import './NavBar.scss';
// import PropTypes from 'prop-types';

class NavBar extends Component {
  state = { activeItem: 'home' }
  contextRef = createRef();

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sticky context={this.contextRef}>
        <Segment className="header">
            <Menu secondary>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </Segment>
      </Sticky>
    )
  }
}

// NavBar.propTypes = {

// };

export default NavBar;