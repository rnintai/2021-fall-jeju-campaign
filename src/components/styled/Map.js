import styled from "styled-components";

const StyledMapWrap = styled.section`
  margin-bottom: 3rem;
  padding: 0 25%;
  transition: padding 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0 7%;
  }
`;
const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  text-shadow: 2px 3px 3px #6363636b;
`;
const StyledStrongTitle = styled.span`
  color: ${({ theme }) => theme.color.green};
`;
const StyledPlainTitle = styled.span``;

function Title({ strong_text, text }) {
  return (
    <StyledTitle>
      <StyledStrongTitle>{strong_text}</StyledStrongTitle>
      <StyledPlainTitle>{text}</StyledPlainTitle>
    </StyledTitle>
  );
}

const MapImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
`;

export function MapWrap() {
  return (
    <StyledMapWrap>
      <Title strong_text="제주 쉬기좋은 " text="지역별 안내"></Title>
      <MapImage src="https://github.com/rnintai/2021-fall-jeju-campaign/blob/master/src/assets/image/jeju_map.png?raw=true"></MapImage>
    </StyledMapWrap>
  );
}
