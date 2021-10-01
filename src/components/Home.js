import React from "react";
import styled from "styled-components";

import Locations from "./Locations";
import Tickets from "./Tickets";

const Background = styled.main`
  background-color: #fef2c6;
`;

const Home = () => {
  return (
    <Background>
      <Locations></Locations>
      <Tickets></Tickets>
    </Background>
  );
};

export default Home;
