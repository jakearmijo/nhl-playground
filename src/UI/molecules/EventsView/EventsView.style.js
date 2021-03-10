import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getScrollbarSize from "dom-helpers/scrollbarSize";
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@zendeskgarden/react-tables";
import { getLiveGameFeed } from "../../../BackendCalls";

const SCROLLBAR_SIZE = getScrollbarSize();
const liveGameID = 2020020326;
const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;

const EventsView = () => {
  const [liveGame, setState] = useState();
  useEffect(() => {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${liveGameID}/feed/live`)
    .then((res) => res.json())
    .then(
      (result) => {
        setState({
          liveData: result.liveData,
        });
      },
      (error) => {
        setState({
          error,
        });
      }
    )
  }
  )
    
    return (
    <div style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: 500 }}>
        <Head>
          <HeaderRow>
            <HeaderCell>Result:</HeaderCell>
            <HeaderCell>EventTypeId</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <StyledSpacerCell aria-hidden />
          </HeaderRow>
        </Head>
      </Table>
      <div style={{ maxHeight: 500, overflowY: "auto" }}>
        <Table>
          {/* <Body>
            {liveGame.liveData.map((play,idx) => (
              <Row key={idx}>
                <Cell>{play.allPlays.result.eventTypeId}}</Cell>
                <Cell>{play.result.event}</Cell>
                <Cell>{play.result.description}</Cell>
              </Row>
            ))}
          </Body> */}
          <Body>
            {console.log("🚀 ~ file: EventsView.style.js ~ line 32 ~ useEffect ~ liveGame", liveGame)}
          </Body>
        </Table>
      </div>
    </div>
  );
}
export default EventsView;
