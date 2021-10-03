import styled from "styled-components";

const StyledIntroWrap = styled.header`
  margin-bottom: 3rem;
  padding: 0 25%;
  transition: padding 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const IntroImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
`;

export function IntroWrap() {
  return (
    <StyledIntroWrap>
      <IntroImg src="https://github.com/rnintai/2021-fall-jeju-campaign/blob/master/src/assets/image/intro_img.png?raw=true"></IntroImg>
    </StyledIntroWrap>
  );
}
