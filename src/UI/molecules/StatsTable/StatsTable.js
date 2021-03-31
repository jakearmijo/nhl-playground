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
        <StatsGrid className="grid-container">
          <StatsGridItemHeading className="grid-item">TEAM</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">SoG</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">FO%</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">PP%</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">PIM</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">Hits</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">Blks</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">GA's</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">TA's</StatsGridItemHeading>
        
        
          <StatsGridItem className="grid-item">{homeTeam}</StatsGridItem>
          <StatsGridItem className="grid-item">{homeStats.shots}</StatsGridItem>  
          <StatsGridItem className="grid-item">{homeStats.faceOffWinPercentage}</StatsGridItem>
          <StatsGridItem className="grid-item">{homeStats.powerPlayPercentage}</StatsGridItem>
          <StatsGridItem className="grid-item">{homeStats.pim}</StatsGridItem>  
          <StatsGridItem className="grid-item">{homeStats.hits}</StatsGridItem>
          <StatsGridItem className="grid-item">{homeStats.blocked}</StatsGridItem>
          <StatsGridItem className="grid-item">{homeStats.giveaways}</StatsGridItem>  
          <StatsGridItem className="grid-item">{homeStats.takeaways}</StatsGridItem>
        
        
          <StatsGridItem className="grid-item">{awayTeam}</StatsGridItem>
          <StatsGridItem className="grid-item">{awayStats.shots}</StatsGridItem>  
          <StatsGridItem className="grid-item">{awayStats.faceOffWinPercentage}</StatsGridItem>
          <StatsGridItem className="grid-item">{awayStats.powerPlayPercentage}</StatsGridItem>
          <StatsGridItem className="grid-item">{awayStats.pim}</StatsGridItem>  
          <StatsGridItem className="grid-item">{awayStats.hits}</StatsGridItem>
          <StatsGridItem className="grid-item">{awayStats.blocked}</StatsGridItem>
          <StatsGridItem className="grid-item">{awayStats.giveaways}</StatsGridItem>  
          <StatsGridItem className="grid-item">{awayStats.takeaways}</StatsGridItem>

          <StatsGridItemHeading className="grid-item">TOTALS</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">{awayStats.shots + homeStats.shots}</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">%</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">%</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">{awayStats.pim + homeStats.pim}</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">{awayStats.hits + homeStats.hits}</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">{awayStats.blocked + homeStats.blocked}</StatsGridItemHeading>
          <StatsGridItemHeading className="grid-item">{awayStats.giveaways + homeStats.giveaways}</StatsGridItemHeading>  
          <StatsGridItemHeading className="grid-item">{awayStats.takeaways + homeStats.takeaways}</StatsGridItemHeading>
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
