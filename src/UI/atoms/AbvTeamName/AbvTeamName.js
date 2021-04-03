import React, { useState, useEffect } from 'react';
import { ensureObject } from '../../../lib'



// let color = 'grey' | 'red' | 'green' | 'yellow'

const AbvTeamName = ( { teamId } ) => {
console.log("🚀 ~ file: AbvTeamName.js ~ line 9 ~ AbvTeamName ~ teamId", teamId)
  const [abv, setTeamAbv] = useState()
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
          
            setTeamAbv({
              abv: result,
            });
              console.log("🚀 ~ file: AbvTeamName.js ~ line 23 ~ result", result.teams[0].abbreviation)
              console.log("🚀 ~ file: AbvTeamName.js ~ line 23 ~ abv", abv)
              
          },
          (error) => {
            setTeamAbv({
              error,
            });
          }
        );
    };
    fetchData();
  }, [abv, teamId]);
  return (
  <div>
    <h6>
    {teamId} 
    </h6>
  </div>
  )
  };

export default AbvTeamName;