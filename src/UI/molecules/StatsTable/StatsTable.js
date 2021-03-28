import React from 'react'
import { StatsGrid, StatsGridItem } from './StatsTable.style'

export default function StatsTable() {
    return (
      <div>
        <StatsGrid class="grid-container">
          <StatsGridItem class="grid-item">Team 1</StatsGridItem>
          <StatsGridItem class="grid-item">Shots on Goal</StatsGridItem>  
          <StatsGridItem class="grid-item">Faceoff %</StatsGridItem>
          <StatsGridItem class="grid-item">Power Play</StatsGridItem>
          <StatsGridItem class="grid-item">PIM</StatsGridItem>  
          <StatsGridItem class="grid-item">Hits</StatsGridItem>
          <StatsGridItem class="grid-item">Blocks</StatsGridItem>
          <StatsGridItem class="grid-item">Giveaways</StatsGridItem>  
          <StatsGridItem class="grid-item">Takeaways</StatsGridItem>
        </StatsGrid>

        <StatsGrid class="grid-container">
          <StatsGridItem class="grid-item">Team 2</StatsGridItem>
          <StatsGridItem class="grid-item">Shots on Goal</StatsGridItem>  
          <StatsGridItem class="grid-item">Faceoff %</StatsGridItem>
          <StatsGridItem class="grid-item">Power Play</StatsGridItem>
          <StatsGridItem class="grid-item">PIM</StatsGridItem>  
          <StatsGridItem class="grid-item">Hits</StatsGridItem>
          <StatsGridItem class="grid-item">Blocks</StatsGridItem>
          <StatsGridItem class="grid-item">Giveaways</StatsGridItem>  
          <StatsGridItem class="grid-item">Takeaways</StatsGridItem>
        </StatsGrid>
      </div>
    )
}
