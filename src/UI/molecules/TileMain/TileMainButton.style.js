import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import EventsView from "../EventsView";

const StyledCol = styled(Col)`
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
`;

export const StyledTiledMain = ({ gameData }) => (
  <Tiles name="game">
    <Row>
      {gameData.map((game, idx) => (
        <StyledCol sm={4} key={idx}>
          <Tiles.Tile value="game">
            <div>
              <Tiles.Icon>Game #{idx + 1}</Tiles.Icon>
            </div>
            <Tiles.Label>{game.gameDate}</Tiles.Label>
            <Tiles.Label>{game.status.detailedState}</Tiles.Label>
            <Tiles.Label>
              {game.teams.away.team.name} VS {game.teams.home.team.name}
            </Tiles.Label>
            <Tiles.Label>
              {game.teams.away.score} - {game.teams.home.score}
            </Tiles.Label>
            <EventsView gamePk={game.gamePk}></EventsView>
          </Tiles.Tile>
        </StyledCol>
      ))}
    </Row>
  </Tiles>
);

export default StyledTiledMain;
