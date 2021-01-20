import React from "react";
import NavBar from "../shared/NavBar";
import Slider from "../Slider/Slider"
import SearchFromInput from "./SearchFromInput/SearchFromInput";

function Home() {
  return (
    <div>
      <NavBar />
      <Slider />

      <SearchFromInput />
    </div>
  );
}

export default Home;
