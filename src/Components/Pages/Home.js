import React from "react";
import NavBar from "../shared/NavBar";
import Slider from "../Slider/Slider"
import SearchFromInput from "./SearchFromInput/SearchFromInput";
import SearchFromNav from './SearchFromNav/SearchFromNav';

function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <SearchFromNav />
      <SearchFromInput />
    </div>
  );
}

export default Home;
