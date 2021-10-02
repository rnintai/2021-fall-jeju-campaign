import styled from "styled-components";

export const Background = styled.main`
  position: relative;
  padding: 0 20%;
  background-color: #fef2c6;
  min-width: 500px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  transition: padding 0.5s ease-in-out;
`;
