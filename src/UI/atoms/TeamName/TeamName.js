import React from 'react';
import { Row } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';
import { StyledCol } from './TeamName.style'


// let color = 'grey' | 'red' | 'green' | 'yellow'

const TeamName = (props) => {
  function checkForAwayColor(){
    let awayScore = props.gameData.away.score
    let homeScore = props.gameData.home.score
    
      if(awayScore > homeScore){
        return 'green'
      } else{
        return 'grey'
      } 
  }

  function checkForHomeColor(){
    let awayScore = props.gameData.away.score
    let homeScore = props.gameData.home.score
    
      if(homeScore > awayScore){
        return 'green'
      } else{
        return 'grey'
      } 
  }

  return (
  <Row>
    {/* <Col sm={4} textAlign="center">
      <Code hue="green">Veggies es bonus</Code>
    </Col> */}
    <StyledCol sm={2} textAlign="center">
      <Code hue={checkForAwayColor()}>{props.gameData.away.team.name}</Code>
      vs
      <Code hue={checkForHomeColor()}>{props.gameData.home.team.name}</Code>
    </StyledCol>
  </Row>
  )
  };

export default TeamName;