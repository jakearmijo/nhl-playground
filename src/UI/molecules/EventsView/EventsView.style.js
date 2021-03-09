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

const SCROLLBAR_SIZE = getScrollbarSize();

const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;
const rowData = 3;

const EventsView = () => {
  const [liveGame, setState] = useState([]);
  useEffect(() => {
    fetch("/api/data").then((res) => setState(res.data));
  }, []);
  return (
    <div style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: 500 }}>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
            <StyledSpacerCell aria-hidden />
          </HeaderRow>
        </Head>
      </Table>
      <div style={{ maxHeight: 500, overflowY: "auto" }}>
        <Table>
          <Body>
            {rowData.map((data) => (
              <Row key={data.index}>
                <Cell>{data.fruit}</Cell>
                <Cell>{data.sun}</Cell>
                <Cell>{data.soil}</Cell>
              </Row>
            ))}
          </Body>
        </Table>
      </div>
    </div>
  );
};

export default EventsView;
