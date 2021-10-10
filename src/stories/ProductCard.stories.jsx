import React from "react";
import styled from "styled-components";

import { ProductCard } from "../components/styled/ProductCard";

const FlexBox = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export default {
  title: "Example/ProductCard",
  component: ProductCard,
  argTypes: {
    themeColor: { control: "color" },
  },
};

const Template = (args) => (
  <FlexBox>
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
  </FlexBox>
);

export const Example = Template.bind({});
