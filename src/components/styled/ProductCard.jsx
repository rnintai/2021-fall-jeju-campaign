import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProductCardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => 100 / (props.numbersInRow * 1) + "%"};
  margin-bottom: 2rem;
`;
const Thumb = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 80%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const MetaData = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
`;

const Information = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Sort = styled.span`
  color: #4f4f4f;
`;
const StyledDiscountRatio = styled.span`
  color: white;
  background-color: ${(props) => props.themeColor};
  padding: 0 0.3rem;
  border-radius: 0.6rem;
  font-weight: 700;
`;

function DiscountRatio({ themeColor, ratio }) {
  return ratio !== undefined && ratio !== 0 ? (
    <StyledDiscountRatio themeColor={themeColor}>
      {ratio * 100 + "%"}
    </StyledDiscountRatio>
  ) : null;
}

const TitleWrap = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const Tag = styled.span``;
const Title = styled.span``;

const CostWrap = styled.div`
  font-size: 1rem;
`;
const StyledCost = styled.span`
  color: ${(props) => (props.discount ? "#4f4f4f" : "#000")};
  text-decoration-line: ${(props) =>
    props.discount ? "line-through" : "none"};
  font-weight: ${(props) => (props.discount ? "300" : "700")};
  margin-right: 0.3rem;
`;
const DiscountedCost = styled.span`
  color: black;
  text-decoration-line: none;
  font-weight: 800;
`;

function Price({ cost, ratio }) {
  const currencyFormatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
  const costStr = currencyFormatter.format(cost).substr(1) + "원";

  if (ratio === undefined) {
    return <StyledCost>{costStr}</StyledCost>;
  } else {
    // \14,000 -> 14,000 -> 14,000원
    const discountedStr =
      currencyFormatter.format(cost * (1 - ratio)).substr(1) + "원";
    return (
      <CostWrap>
        <StyledCost discount="true">{costStr}</StyledCost>
        <DiscountedCost>{discountedStr}~</DiscountedCost>
      </CostWrap>
    );
  }
}

export const ProductCard = ({
  themeColor,
  numbersInRow,
  thumb,
  sort,
  tag,
  title,
  originalPrice,
  discountRatio,
  ...props
}) => {
  return (
    <ProductCardItem numbersInRow={numbersInRow} {...props}>
      <Thumb src={thumb}></Thumb>
      <MetaData>
        <Information>
          <Sort>{sort}</Sort>
          <DiscountRatio
            themeColor={themeColor}
            ratio={discountRatio}
          ></DiscountRatio>
        </Information>
        <TitleWrap>
          <Tag>[{tag}]&nbsp;</Tag>
          <Title>{title}</Title>
        </TitleWrap>
        <Price cost={originalPrice} ratio={discountRatio} />
      </MetaData>
    </ProductCardItem>
  );
};

ProductCard.propTypes = {
  /**
   * 테마 색상
   */
  themeColor: PropTypes.string,
  /**
   * 한 줄에 몇개씩 표시?
   */
  numbersInRow: PropTypes.oneOf(["1", "2", "3", "4"]),
  /**
   * 썸네일 URL
   */
  thumb: PropTypes.string,
  /**
   * 상품의 종류
   */
  sort: PropTypes.string,
  /**
   * 태그. 소제목
   */
  tag: PropTypes.string,
  /**
   * 제목
   */
  title: PropTypes.string,
  /**
   * 원래 가격
   */
  originalPrice: PropTypes.number,
  /**
   * 할인율 (소수로 작성)
   */
  discountRatio: PropTypes.number,
};

ProductCard.defaultProps = {
  themeColor: "#ec7742",
  numbersInRow: "2",
  thumb:
    "https://github.com/rnintai/2021-fall-jeju-campaign/blob/master/src/assets/image/hwajowon.png?raw=true",
  sort: "입장권",
  tag: "소제목",
  title: "제목",
  originalPrice: 10000,
  discountRatio: 0.2,
};
