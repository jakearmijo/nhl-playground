import styled from 'styled-components'
import {
  zdSpacingXs,
  zdSpacingXxs,
  zdColorGrey100,
} from '@zendeskgarden/css-variables'
import { Tiles } from '@zendeskgarden/react-forms'
import { Col } from '@zendeskgarden/react-grid'
const { Tile: _Tile } = Tiles
export const GamesListItemWrapper = styled(Col)`
  border-radius: ${zdSpacingXxs};
  &:nth-of-type(odd) {
    padding-right: 2px;
  }
  &:nth-of-type(even) {
    padding-left: 2px;
  }
  ${({ isInherited }) => (
    isInherited && `opacity: 0.4;`
  )}
`
export const GameTile = styled(_Tile)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
  &:hover {
    ${({ selected }) => selected
      ? `
        background-color: ${zdColorGrey100}!important;
        border-color: ${zdColorGrey100}!important;
      ` : `
        background-color: ${zdColorGrey100}!important;
        border-color: ${zdColorGrey100}!important;
      `
    }
  }
  ${({ selected }) => selected && `
    background-color: ${zdColorGrey100}!important;
    border-color: ${zdColorGrey100}!important;
  `}
`