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
import DetailButton from "../../atoms/DetailButton";
import { ensureObject } from '../../../lib'

import { white } from "chalk";

const SCROLLBAR_SIZE = getScrollbarSize();

const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;
function EventsView( props ) {
  
  const [liveGame, setState] = useState();
  const { gamePk } = props.game
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setState({
              liveGame: result.liveData.plays.allPlays,
            });
          },
          (error) => {
            setState({
              error,
            });
          }
        );
    };
    fetchData();
  }, [gamePk]);

  function handleClick(e) {
    e.preventDefault();
    fetch(
      `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
      )
      .then((res) => res.json())
      .then(
        (result) => {
          setState({
            liveGame: ensureObject(result.liveData.plays.allPlays),
          });
        },
        (error) => {
          setState({
            error,
          });
        }
        );
        console.log(`Updating Play by Play for game ID ${gamePk}.`);
  }

  return (
    <div style={{ overflowX: "auto" }}>
      {liveGame === undefined ? (
        <Table style={{ minWidth: 500, backgroundColor: white }}>
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
          <DetailButton handleClick={handleClick} />
          <Table style={{ minWidth: 500 }}>
            <Head>
              <HeaderRow>
                <HeaderCell>Time:</HeaderCell>
                <HeaderCell>Event</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <StyledSpacerCell aria-hidden />
              </HeaderRow>
            </Head>
          </Table>
          <div style={{ maxHeight: 500, overflowY: "auto" }}>
            <Table>
              <Body>
                {liveGame.liveGame
                  .slice(0)
                  .reverse()
                  .map((play, idx) => (
                    <Row key={idx}>
                      <Cell>{play.about.periodTimeRemaining}</Cell>
                      <Cell>{play.result.event}</Cell>
                      <Cell>{play.result.description}</Cell>
                    </Row>
                  ))}
              </Body>
              <Body></Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsView;
