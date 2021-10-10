import React from "react";
import styled from "styled-components";

const StyledProductCardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 0.8rem;
  padding-top: 2rem;
  margin-bottom: 4rem;
`;

export const ProductCardWrapper = ({ ...props }) => {
  return <StyledProductCardWrapper {...props}></StyledProductCardWrapper>;
};
