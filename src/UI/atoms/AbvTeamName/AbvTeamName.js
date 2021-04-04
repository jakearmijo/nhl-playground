import React, { useState, useEffect } from 'react';
import { ensureObject } from '../../../lib'



// let color = 'grey' | 'red' | 'green' | 'yellow'

const AbvTeamName = ( { teamId } ) => {
  const [abv, setTeamAbv] = useState()

  useEffect(() => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
    .then( res => res.json())
    .then( result => {
      setTeamAbv({ abv: result.teams[0].abbreviation })
    })
  }, [teamId]);

const teamAbv = ensureObject(abv).abv

  return (
  <div>
    <h6>
    {teamAbv}
    </h6>
  </div>
  )
  };

export default AbvTeamName;