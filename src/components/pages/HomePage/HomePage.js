import React from "react";
import TopNavBar from "../../../UI/organisms/TopNavBar";
import TodaysTiltLogo from "../../../UI/atoms/TodaysTiltLogo";
import Standings from "../../../UI/molecules/Standings";
import TileMainButton from "../../../UI/organisms/TileMain";

import logo from "../../../assests/NHL_Logo_former.svg";

export default function HomePage() {
  return (
    <header className="App-header">
      <TopNavBar />
      <img src={logo} className="App-logo" alt="logo" />
      <TodaysTiltLogo />
      <Standings />
      <TileMainButton></TileMainButton>
    </header>
  );
}
