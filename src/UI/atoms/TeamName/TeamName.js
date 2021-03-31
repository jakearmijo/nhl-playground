import React from 'react';
import { Row } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';
import { StyledCol } from './TeamName.style'


// let color = 'grey' | 'red' | 'green' | 'yellow'

const TeamName = ({ game }) => {
  let awayScore = game.teams.away.score
  let awayTeamName = game.teams.away.team.name
  let homeScore = game.teams.home.score
  let homeTeamName = game.teams.home.team.name
  let gameState = game.status.detailedState
    
  function colorScore(homeScore, awayScore){    
     if (homeScore > awayScore && gameState === 'Final') {
       return { 
         color: { 
          homeColor: 'green',
          awayColor: 'grey'
          } 
        }
     } else if (awayScore > homeScore && gameState === 'Final') {
      return { 
        color: { 
         homeColor: 'grey',
         awayColor: 'green'
         } 
       }
      } else {
        return { 
          color: { 
           homeColor: 'grey',
           awayColor: 'grey'
           } 
         }
     }
  }

  // function checkForHomeColor(){    
  //   if(homeScore > awayScore){
  //     return 'green'
  //   } else{
  //     return 'grey'
  //   } 
  // }

  return (
  <Row>
    {/* <Col sm={4} textAlign="center">
      <Code hue="green">Veggies es bonus</Code>
    </Col> */}
    <StyledCol textAlign="center">
      <Code hue={colorScore(homeScore, awayScore).color.awayColor}>{awayTeamName}</Code>
      vs
      <Code hue={colorScore(homeScore, awayScore).color.homeColor}>{homeTeamName}</Code>
    </StyledCol>
  </Row>
  )
  };

export default TeamName;