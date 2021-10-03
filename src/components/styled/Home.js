import styled from "styled-components";

export const Background = styled.main`
  position: relative;
  padding: 0 35%;
  background-color: #fef2c6;
  min-width: 500px;

  @media screen and (max-width: 768px) {
    padding: 0 7%;
  }

  transition: padding 0.5s ease-in-out;
`;
