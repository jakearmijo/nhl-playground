import React, { useEffect, useState } from 'react'
import { StatsGrid, StatsGridItem, StatsGridItemHeading } from './StatsTable.style'

export default function StatsTable( { gamePk } ) {
  const [liveGame, setGame] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setGame({
              liveGame: result.liveData,
            });
          },
          (error) => {
            setGame({
              error,
            });
          }
        );
    };
    fetchData();
  }, [gamePk]);
          

  if( liveGame ) {
    const awayStats = liveGame.liveGame.boxscore.teams.away.teamStats.teamSkaterStats
    const awayTeam = liveGame.liveGame.boxscore.teams.away.team.name
    const homeTeam = liveGame.liveGame.boxscore.teams.home.team.name
    const homeStats = liveGame.liveGame.boxscore.teams.home.teamStats.teamSkaterStats
      return (
      <div>
        <StatsGrid class="grid-container">
          <StatsGridItemHeading class="grid-item">TEAM</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">SoG</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">FO%</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">PP%</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">PIM</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">Hits</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">Blks</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">GA's</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">TA's</StatsGridItemHeading>
        
        
          <StatsGridItem class="grid-item">{homeTeam}</StatsGridItem>
          <StatsGridItem class="grid-item">{homeStats.shots}</StatsGridItem>  
          <StatsGridItem class="grid-item">{homeStats.faceOffWinPercentage}</StatsGridItem>
          <StatsGridItem class="grid-item">{homeStats.powerPlayPercentage}</StatsGridItem>
          <StatsGridItem class="grid-item">{homeStats.pim}</StatsGridItem>  
          <StatsGridItem class="grid-item">{homeStats.hits}</StatsGridItem>
          <StatsGridItem class="grid-item">{homeStats.blocked}</StatsGridItem>
          <StatsGridItem class="grid-item">{homeStats.giveaways}</StatsGridItem>  
          <StatsGridItem class="grid-item">{homeStats.takeaways}</StatsGridItem>
        
        
          <StatsGridItem class="grid-item">{awayTeam}</StatsGridItem>
          <StatsGridItem class="grid-item">{awayStats.shots}</StatsGridItem>  
          <StatsGridItem class="grid-item">{awayStats.faceOffWinPercentage}</StatsGridItem>
          <StatsGridItem class="grid-item">{awayStats.powerPlayPercentage}</StatsGridItem>
          <StatsGridItem class="grid-item">{awayStats.pim}</StatsGridItem>  
          <StatsGridItem class="grid-item">{awayStats.hits}</StatsGridItem>
          <StatsGridItem class="grid-item">{awayStats.blocked}</StatsGridItem>
          <StatsGridItem class="grid-item">{awayStats.giveaways}</StatsGridItem>  
          <StatsGridItem class="grid-item">{awayStats.takeaways}</StatsGridItem>

          <StatsGridItemHeading class="grid-item">TOTALS</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">{awayStats.shots + homeStats.shots}</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">{awayStats.faceOffWinPercentage + homeStats.faceOffWinPercentage}</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">{awayStats.powerPlayPercentage + homeStats.powerPlayPercentage}</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">{awayStats.pim + homeStats.pim}</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">{awayStats.hits + homeStats.hits}</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">{awayStats.blocked + homeStats.blocked}</StatsGridItemHeading>
          <StatsGridItemHeading class="grid-item">{awayStats.giveaways + homeStats.giveaways}</StatsGridItemHeading>  
          <StatsGridItemHeading class="grid-item">{awayStats.takeaways + homeStats.takeaways}</StatsGridItemHeading>
        </StatsGrid>
      </div>
      )
  }
    return (
      <div>
        <div>
          <h4>LOADING</h4>
        </div>
      </div>
    )
}
