import styled from 'styled-components'
import {
  zdSpacingXs,
  zdSpacingXxs,
} from '@zendeskgarden/css-variables'
import { Table, Row } from '@zendeskgarden/react-tables'


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
export const StyledH2 = styled.h2`
font-size: 36px;
font-weight: bold;
justify-content: left;
float: left;
`

export const StyledH4 = styled.h4`
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledDivContainer = styled.div`
  display: flex;
  align-content: center;
`