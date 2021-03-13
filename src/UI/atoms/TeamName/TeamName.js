import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';
import { StyledCol } from './TeamName.style'



const TeamName = (props) => (
  <Row>
    {/* <Col sm={4} textAlign="center">
      <Code hue="green">Veggies es bonus</Code>
    </Col> */}
    <StyledCol sm={4} textAlign="center">
      <Code hue="green">{props.teamName}</Code>
    </StyledCol>
    
  </Row>
);

export default TeamName;