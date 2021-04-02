import React, { useState, useEffect } from 'react';
import { ensureObject } from '../../../lib'



// let color = 'grey' | 'red' | 'green' | 'yellow'

const AbvTeamName = ( { awayId, homeId } ) => {

  return (
  <div>
    <h6>
    {awayId}
    {homeId}
    </h6>
  </div>
  )
  };

export default AbvTeamName;