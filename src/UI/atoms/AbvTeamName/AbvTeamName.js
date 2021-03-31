import React, { useState, useEffect } from 'react';



// let color = 'grey' | 'red' | 'green' | 'yellow'

const AbvTeamName = ( { gamePk } ) => {
  
  const [teamName, setTeamName] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://statsapi.web.nhl.com/api/v1/game/${gamePk}/feed/live`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setTeamName({
              teamName: result.liveData,
            });
          },
          (error) => {
            setTeamName({
              error,
            });
          }
        );
    };
    fetchData();
  }, [gamePk]);
  return (
  <div>
    <h6>

    </h6>
  </div>
  )
  };

export default AbvTeamName;