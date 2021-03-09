// import React, { Component } from "react";
// import { StyledTiledMain } from "./TileMainButton.style";

// export default class TileMainButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoaded: false,
//       games: null,
//     };
//   }

//   componentDidMount() {
//     fetch("https://statsapi.web.nhl.com/api/v1/schedule")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             gameData: result.dates[0].games,
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, gameData } = this.state;

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <>
//           <StyledTiledMain gameData={gameData}></StyledTiledMain>
//           {/* <ul>
//             {gameData.games.map((game, idx) => (
//               <li key={idx}>
//                 {game.games} {game.status}
//               </li>
//             ))}
//           </ul> */}
//         </>
//       );
//     }
//   }
// }
