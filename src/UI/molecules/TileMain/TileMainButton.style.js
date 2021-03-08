import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import { ReactComponent as LeafIcon } from "@zendeskgarden/svg-icons/src/16/leaf-stroke.svg";
import { ReactComponent as ImageIcon } from "@zendeskgarden/svg-icons/src/16/file-image-stroke.svg";
import { ReactComponent as PresentationIcon } from "@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg";

const StyledCol = styled(Col)`
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
`;

export const StyledTiledMain = ({ gameData }) => (
  <Tiles name="example" aria-label="Tiles component example">
    {console.log(
      "🚀 ~ file: TileMainButton.style.js ~ line 1 ~ gameData",
      gameData
    )}
    <Row>
      {gameData.map((game, idx) => (
        <Col sm={4}>
          <Tiles.Tile value="leaf">
            <Tiles.Icon>
              <LeafIcon />
            </Tiles.Icon>
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
        </Col>
      ))}
      {/* <Col sm={4}>
        <Tiles.Tile value="leaf">
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>{idx}</Tiles.Label>
        </Tiles.Tile>
      </Col>
      <StyledCol sm={4}>
        <Tiles.Tile value="image">
          <Tiles.Icon>
            <ImageIcon />
          </Tiles.Icon>
          <Tiles.Label>GAME 2</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
      <StyledCol sm={4}>
        <Tiles.Tile value="presentation">
          <Tiles.Icon>
            <PresentationIcon />
          </Tiles.Icon>
          <Tiles.Label>GAME 3</Tiles.Label>
        </Tiles.Tile>
      </StyledCol> */}
    </Row>
  </Tiles>
);

export default StyledTiledMain;
