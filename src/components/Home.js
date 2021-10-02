import React from "react";

import Locations from "./Locations";
import Tickets from "./Tickets";
import { Background } from "./styled/Home";

const Home = () => {
  return (
    <Background>
      <Locations></Locations>
      <Tickets></Tickets>
    </Background>
  );
};

export default Home;
