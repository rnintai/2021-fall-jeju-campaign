import React from "react";

import Intro from "./Intro";
import Map from "./Map";
import Locations from "./Locations";
import Tickets from "./Tickets";
import { Background } from "./styled/Home";

const Home = () => {
  return (
    <Background>
      <Intro></Intro>
      <Map></Map>
      <Locations></Locations>
      <Tickets></Tickets>
    </Background>
  );
};

export default Home;
