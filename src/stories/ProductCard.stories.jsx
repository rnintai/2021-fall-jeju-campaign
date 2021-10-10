import React from "react";

import { ProductCard } from "../components/styled/ProductCard";
import { ProductCardWrapper } from "../components/styled/ProductCardWrapper";

export default {
  title: "Example/ProductCard",
  component: ProductCard,
  argTypes: {
    themeColor: { control: "color" },
  },
};

const Template = (args) => (
  <ProductCardWrapper>
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
  </ProductCardWrapper>
);

export const Example = Template.bind({});
