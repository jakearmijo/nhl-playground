import React from "react";
// import styled from "styled-components";
// import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import EventsView from "../EventsView";
// const StyledCol = styled(Col)`
//   ${(p) => mediaQuery("down", "xs", p.theme)} {
//     margin-top: ${(p) => p.theme.space};
//   }
// `;

export const StyledTiledMain = ({ gameData }) => (
  <Tiles name="example" aria-label="Tiles component example">
    <Row>
      {gameData.map((game, idx) => (
        <Col sm={4} key={idx}>
          <Tiles.Tile value="game">
            <Tiles.Icon>{}</Tiles.Icon>
            <Tiles.Label>Game #{idx + 1}</Tiles.Label>
            <Tiles.Label>{game.gameDate}</Tiles.Label>
            <Tiles.Label>{game.status.detailedState}</Tiles.Label>
            <Tiles.Label>
              {game.teams.away.team.name} VS {game.teams.home.team.name}
            </Tiles.Label>
            <Tiles.Label>
              {game.teams.away.score} - {game.teams.home.score}
            </Tiles.Label>
          </Tiles.Tile>
          <EventsView></EventsView>
        </Col>
      ))}
    </Row>
  </Tiles>
);

export default StyledTiledMain;
