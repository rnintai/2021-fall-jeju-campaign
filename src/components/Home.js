import React from "react";

import Intro from "./Intro";
import Locations from "./Locations";
import Tickets from "./Tickets";
import { Background } from "./styled/Home";

const Home = () => {
  return (
    <Background>
      <Intro></Intro>
      <Locations></Locations>
      <Tickets></Tickets>
    </Background>
  );
};

export default Home;
