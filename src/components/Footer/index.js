import React from 'react';
import './Footer.scss';
import { Segment, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment className='footer'>
    <div className="copyright">&copy; Diocese of Kwara</div>
    <div className="designer">
      <List horizontal link>
        <List.Item as='dashboard'>Dashboard</List.Item>
        <List.Item as='feedback'>Feedback</List.Item>
      </List>
    </div>
  </Segment>
)

export default Footer;

