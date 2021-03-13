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
import { testingData } from './TestData'
import { white } from "chalk";

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
      console.log("🚀 ~ file: Standings.js ~ line 37 ~ fetchData ~ standings", standings)
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
              <HeaderRow>
                standingsType
              </HeaderRow>
            </Head>
          </Table>
          <div style={{ maxHeight: 500, overflowY: "auto" }}>
            <Table>
              <Body>
                {standings.standings
                  .map((team, idx) => (
                    <div>
                    <Head>
                      <HeaderRow>
                        <HeaderCell>{team.division.name}</HeaderCell>
                        <StyledSpacerCell aria-hidden />
                      </HeaderRow>
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
              <Body></Body>
            </Table>
          </div>
        </div>
      )}
                
    </div>
  );
}

export default Standings;
