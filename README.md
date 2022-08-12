
# Getting Started with Today's Tilts

## Introduction

HELLO!!!!! and Welcome to my NHL Playground. I am Jake Armijo the creator. I always enjoyed listening to the hockey games on the radio with my dad. During the '90s and early 2000s, the Chicago Blackhawks were NOT broadcasted on TV. Therefore my father and I would listen to the games on this tiny black handheld radio. I can still picture this thing in my head.

I set out to create something with that memory. I found the [https://statsapi.web.nhl.com/api/v1/configurations](NHL-API) and thought it would be cool to create a central place for all the games including their play-by-play and an option to listen. I also envision a little hockey rink picture and to call the coordinates of the puck and have it move around the rink so you can, in a way, watch multiple games at one time.

The official start date of this project was 3-8-2021.

### Service endpoints

There are lots of endpoints available to get information about: divisions, conferences, seasons, tournaments, standings, prospects, awards, etc. The whole list can be found here: [https://statsapi.web.nhl.com/api/v1/configurations](configurations).

- people/ID, people/ID/stats — general information about each person/player. Or extended statistics by ID;
- schedule — a list of games taken places for the given period;
- game/ID/feed/live — complete game log by ID.

## Follow the process below to use the app

```bash
- $ git clone https://github.com/jakearmijo/nhl-playground.git
- $ cd todays-tilts
- $ npm install
- $ npm start
```

Visit [http://localhost:3000](localhost:3000) to view and enjoy!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](localhost:3000) to view it in the browser.

### `npm test`

--> Testing needs work!
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://github.com/jakearmijo) for more information.

### Features

• Play by play
• Real time stats
• Real time score
• Player Pictures? -> maybe of key events such as goals
• Ice Rink to follow puck / game on
• Listen Option to a radio broadcast

### Things I would improve or Add

• Firstly I would have spent more time on testing.
