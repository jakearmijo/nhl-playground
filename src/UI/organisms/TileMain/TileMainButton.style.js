import React from "react";
import styled from "styled-components";
import EventsView from "../../molecules/EventsView";
import StatsTable from "../../molecules/StatsTable/StatsTable";
import TeamName from '../../atoms/TeamName'

import {
  zdSpacingXs,
  zdSpacingXxs,
  zdColorGrey200,
} from "@zendeskgarden/css-variables";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";

const { Tile: _Tile } = Tiles;

export const GameListItemWrapper = styled(Col)`
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
  border-radius: ${zdSpacingXxs};
  &:nth-of-type(odd) {
    padding-right: 2px;
  }
  &:nth-of-type(even) {
    padding-left: 2px;
  }
  &:nth-of-type(even) {
    padding-top: 2px;
  }
  &:nth-of-type(even) {
    padding-bottom: 2px;
  }
  /* ${({ isInherited }) => isInherited && `opacity: 0.4;`} */
  `;
    
export const GameTile = styled(_Tile)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
  /* &:hover {
    ${({ selected }) =>
      selected
        ? `
        background-color: ${zdColorGrey200}!important;
        border-color: ${zdColorGrey200}!important;
      `
        : `
        background-color: ${zdColorGrey200}!important;
        border-color: ${zdColorGrey200}!important;
      `}
  } */
  /* ${({ selected }) =>
    selected &&
    `
    background-color: ${zdColorGrey200}!important;
    border-color: ${zdColorGrey200}!important;
  `} */
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const StyledGameNumber = styled.h4`
  display: block;
  float: left;
  font-size: .45em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 1em;
  font-weight: bold;
`
export const StyledHeader = styled.h4`
  display: block;
  align-content: center;
  justify-content: center;
  font-size: .5em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 1em;
  font-weight: bold;
`

export const StyledTiledMain = ({ gameData }) => (
  <GameTile name="game">
    <Row>
      {gameData.map((game, idx) => (
        <GameListItemWrapper sm={4} key={idx}>
          <Tiles.Tile name='game' value="game">
            {/* <div>
              <StyledGameNumber>Game {idx + 1}</StyledGameNumber>
            </div> */}
            <div>
              <Tiles.Icon>Game {idx + 1}</Tiles.Icon>
            </div>
            <div>
              <div>
                <StyledHeader>{game.status.detailedState}</StyledHeader>
                <StyledHeader>@ {game.venue.name}</StyledHeader>
              </div>
              <Tiles.Label>
                <StyledDiv>
                  <TeamName game={game}/>
                </StyledDiv>
              </Tiles.Label>
              <Tiles.Label>
                {game.teams.away.score} - {game.teams.home.score}
              </Tiles.Label>
            </div>
            <StatsTable game={game}/>
            <EventsView game={game}></EventsView>
          </Tiles.Tile>
        </GameListItemWrapper>
      ))}
    </Row>
  </GameTile>
);

export default StyledTiledMain;
