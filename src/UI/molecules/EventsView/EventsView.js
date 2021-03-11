import React, { Component } from "react";
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

const testing = [
  { name: "jake", age: 30, sports: "Hockey" },
  { name: "jake", age: 30, sports: "Hockey" },
  { name: "jake", age: 30, sports: "Hockey" },
  { name: "jake", age: 30, sports: "Hockey" },
  { name: "jake", age: 30, sports: "Hockey" },
  { name: "jake", age: 30, sports: "Hockey" },
];
const SCROLLBAR_SIZE = getScrollbarSize();
const liveGameID = 2020020414;
const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;
export default class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      liveGame: {},
    };
  }

  componentDidMount() {
    fetch(`https://statsapi.web.nhl.com/api/v1/game/${liveGameID}/feed/live`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            liveGame: result.liveData.plays.allPlays,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  checkIfDataLoaded() {}
  render() {
    const { error, isLoaded, liveGame } = this.state;

    return (
      <div style={{ overflowX: "auto" }}>
        {!liveGame ? (
          <Table style={{ minWidth: 500 }}>
            <Head>
              <HeaderRow>
                <HeaderCell>LOADING</HeaderCell>
                <HeaderCell>LOADING</HeaderCell>
                <HeaderCell>LOADING</HeaderCell>
                <StyledSpacerCell aria-hidden />
              </HeaderRow>
            </Head>
          </Table>
        ) : (
          <div>
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
                  {liveGame.map((play, idx) => (
                    <Row key={idx}>
                      <Cell>{play.result.name}</Cell>
                      <Cell>{play.age}</Cell>
                      <Cell>{play.result.description}</Cell>
                    </Row>
                  ))}
                </Body> */}
                <Body></Body>
              </Table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
