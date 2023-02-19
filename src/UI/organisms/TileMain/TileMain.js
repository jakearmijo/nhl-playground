import {
  GameTile,
  GameListItemWrapper,
  StyledHeader,
  StyledDiv,

} from "./TileMainButton.style";
import { Row } from "@zendeskgarden/react-grid";
import { Tiles } from "@zendeskgarden/react-forms";
import TeamName from "../../atoms/TeamName";
import StatsTable from "../../molecules/StatsTable/StatsTable";
import EventsView from "../../molecules/EventsView";

export const StyledTiledMain = ({ gameData }) => (
  <GameTile name="game">
    <Row>
      {gameData.map((game, idx) => (
        <GameListItemWrapper sm={4} key={idx}>
          <Tiles.Tile name="game" value="game">
            {/* <div>
              <StyledGameNumber>Game {idx + 1}</StyledGameNumber>
            </div> */}
            <div>
              <Tiles.Icon>Game {idx + 1}</Tiles.Icon>
            </div>
            <div>
              <div>
                <StyledHeader>{game.status.detailedState}</StyledHeader>
                <StyledHeader>@ {game.venue.name}</StyledHeader>
              </div>
              <Tiles.Label>
                <StyledDiv>
                  <TeamName game={game} />
                </StyledDiv>
              </Tiles.Label>
              <Tiles.Label>
                {game.teams.away.score} - {game.teams.home.score}
              </Tiles.Label>
            </div>
            <StatsTable game={game} />
            <EventsView game={game}></EventsView>
          </Tiles.Tile>
        </GameListItemWrapper>
      ))}
    </Row>
  </GameTile>
);

export default StyledTiledMain;
