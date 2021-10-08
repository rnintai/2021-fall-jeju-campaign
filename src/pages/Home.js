import React from "react";

import Intro from "../components/Intro";
import Map from "../components/Map";
import Locations from "../components/Locations";
import Tickets from "../components/Tickets";
import { Background } from "../components/styled/Home";

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
