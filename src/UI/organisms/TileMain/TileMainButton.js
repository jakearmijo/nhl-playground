import React,  { useState, useEffect } from "react";
import { StyledTiledMain } from './TileMain'

export const TileMainButton = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [gameData, setGameData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://statsapi.web.nhl.com/api/v1/schedule")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setGameData(result.dates[0].games)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <StyledTiledMain gameData={gameData}></StyledTiledMain>
      </>
    );
  }
};

export default TileMainButton;