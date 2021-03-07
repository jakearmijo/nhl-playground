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
    margin-top: ${(p) => p.theme.space.sm};
  }
`;

// export const StyledTiledMain = `
//     border: 2px solid #000000;
//     border-radius: 50%;
//     width: 30px;
//     height: 30px;
//     padding: 0px;
// `;

export const StyledTiledMain = () => (
  <Tiles name="example" aria-label="Tiles component example">
    <Row>
      <Col sm={4}>
        <Tiles.Tile value="leaf">
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>Leaf</Tiles.Label>
        </Tiles.Tile>
      </Col>
      <StyledCol sm={4}>
        <Tiles.Tile value="image">
          <Tiles.Icon>
            <ImageIcon />
          </Tiles.Icon>
          <Tiles.Label>Image</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
      <StyledCol sm={4}>
        <Tiles.Tile value="presentation">
          <Tiles.Icon>
            <PresentationIcon />
          </Tiles.Icon>
          <Tiles.Label>Presentation</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
    </Row>
  </Tiles>
);

export default StyledTiledMain;
