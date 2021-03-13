import styled from 'styled-components'
import {
  zdSpacingXs,
  zdSpacingXxs,
  zdColorGrey100,
} from '@zendeskgarden/css-variables'
import { Row } from '@zendeskgarden/react-forms'
import { Table } from '@zendeskgarden/react-grid'

const { Row: _Row } = Row
export const StandingsItemWrapper = styled(Table)`
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
export const StandingsTile = styled(Row)`
  min-height: 60px;
  padding: ${zdSpacingXs};
  margin-bottom: ${zdSpacingXxs};
  display: flex;
  flex-direction: column;
  background-color: white;
`