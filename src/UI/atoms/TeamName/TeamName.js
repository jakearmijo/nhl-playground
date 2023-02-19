import React from 'react';
import { Row } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';
import { StyledCol } from './TeamName.style'

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

  return (
  <Row>
    <StyledCol textAlign="center">
      <Code hue={colorScore(homeScore, awayScore).color.awayColor}>{awayTeamName}</Code>
      <div></div>
      vs
      <div></div>
      <Code hue={colorScore(homeScore, awayScore).color.homeColor}>{homeTeamName}</Code>
    </StyledCol>
  </Row>
  )
  };

export default TeamName;