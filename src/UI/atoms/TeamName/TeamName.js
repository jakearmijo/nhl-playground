import React from 'react';
import { Row } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';
import { StyledCol } from './TeamName.style'
const color = 'grey' | 'red' | 'green' | 'yellow'

const TeamName = (props) => {
  console.log("🚀 ~ file: TeamName.js ~ line 11 ~ props", props)
  return (
  <Row>
    {/* <Col sm={4} textAlign="center">
      <Code hue="green">Veggies es bonus</Code>
    </Col> */}
    <StyledCol sm={2} textAlign="center">
      <Code hue='grey'data-slick={`{"slidesToShow":${color}}`}>{props.teamData.team.name}</Code>
    </StyledCol>
    
  </Row>
  )
  };

export default TeamName;