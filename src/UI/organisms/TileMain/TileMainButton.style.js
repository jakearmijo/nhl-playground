import styled from "styled-components";

import {
  zdSpacingXs,
  zdSpacingXxs,
} from "@zendeskgarden/css-variables";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { Col } from "@zendeskgarden/react-grid";
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
  `;
    
export const GameTile = styled(_Tile)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
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
