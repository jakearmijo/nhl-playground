import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getScrollbarSize from "dom-helpers/scrollbarSize";
import { white } from "chalk";
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@zendeskgarden/react-tables";
import { 
  StyledH2,
  StyledH4 
} from './Standings.style'

const SCROLLBAR_SIZE = getScrollbarSize();

const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;
function Standings() {
  const [standings, setState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://statsapi.web.nhl.com/api/v1/standings`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setState({
              standings: result.records,
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
      }, []);
      console.log("🚀 ~ file: Standings.js ~ line 39 ~ fetchData ~ standings", standings)
  return (
    <div>
      {standings === undefined ? (
        <Table style={{ minWidth: 500, maxWidth: 700, backgroundColor: white }}>
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
              <StyledH2>
              {standings.standings[0].standingsType} Standings
              </StyledH2>
            </Head>
          </Table>
          <div style={{ maxHeight: 500, overflowY: "auto" }}>
            <Table>
              <Body>
                {standings.standings
                  .map((team, idx) => (
                    <div key={idx}>
                    <Head>
                        <StyledH4>{team.division.name}</StyledH4>
                        <StyledSpacerCell aria-hidden />
                    </Head>
                    <Head>
                      <HeaderRow>
                        <HeaderCell>#</HeaderCell>
                        <HeaderCell>Team</HeaderCell>
                        <HeaderCell>Pts</HeaderCell>
                        <StyledSpacerCell aria-hidden />
                      </HeaderRow>
                    </Head>
                      {team.teamRecords.map((teamRank, idx) => (
                      <Row key={idx}>
                        <Cell>{teamRank.divisionRank}</Cell>
                        <Cell>{teamRank.team.name}</Cell>
                        <Cell>{teamRank.points}</Cell>
                      </Row>
                      ))}
                    </div>
                  ))}
              </Body>
            </Table>
          </div>
        </div>
      )}
                
    </div>
  );
}

export default Standings;
