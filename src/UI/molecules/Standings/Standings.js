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
import { 
  StyledH2,
  StyledH4,
  StyledDiv,
  StyledDivContainer,
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
      
  return (
    <div>
      {standings === undefined ? (
        <div>
          <h4>LOADING</h4>
          <StyledSpacerCell aria-hidden />
        </div>        
      ) : (
        <StyledDivContainer>
            <Head>
              <StyledH2>
              {standings.standings[0].standingsType} Standings
              </StyledH2>
            </Head>
                {standings.standings
                  .map((team, idx) => (
          <StyledDiv style={{ maxHeight: 500, overflowY: "auto" }} key={idx}>
            <Table>
              <Body>
                    <Head  key={idx}>
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
              </Body>
            </Table>
          </StyledDiv>
                  ))}
        </StyledDivContainer>
      )}
                
    </div>
  );
}

export default Standings;
