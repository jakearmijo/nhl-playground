import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import EventsView from "../EventsView";
import {
  zdSpacingXs,
  zdSpacingXxs,
  zdColorGrey200,
} from "@zendeskgarden/css-variables";
import TeamName from '../../atoms/TeamName'

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
  ${({ isInherited }) => isInherited && `opacity: 0.4;`}
`;
export const GameTile = styled(_Tile)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
  &:hover {
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
  }
  ${({ selected }) =>
    selected &&
    `
    background-color: ${zdColorGrey200}!important;
    border-color: ${zdColorGrey200}!important;
  `}
`;

export const StyledTiledMain = ({ gameData }) => (
  <GameTile name="game">
    <Row>
      {gameData.map((game, idx) => (
        <GameListItemWrapper sm={4} key={idx}>
          <Tiles.Tile name='game' value="game">
            <div>
              <Tiles.Icon>Game #{idx + 1}</Tiles.Icon>
            </div>
            <div>
              <Tiles.Label>{game.status.detailedState}</Tiles.Label>
              <Tiles.Label>
                <div>
                  <TeamName teamData={game.teams.away}/> VS <TeamName teamData={game.teams.home}/>
                </div>
              </Tiles.Label>
              <Tiles.Label>
                {game.teams.away.score} - {game.teams.home.score}
              </Tiles.Label>
            </div>
            <EventsView gamePk={game.gamePk}></EventsView>
          </Tiles.Tile>
        </GameListItemWrapper>
      ))}
    </Row>
  </GameTile>
);

export default StyledTiledMain;
