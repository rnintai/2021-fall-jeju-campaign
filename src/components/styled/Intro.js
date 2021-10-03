import styled from "styled-components";

const StyledIntroWrap = styled.header``;
const IntroImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 120%;
  transform: translateX(-10%);
`;

export function IntroWrap() {
  return (
    <StyledIntroWrap>
      <IntroImg src="https://github.com/rnintai/2021-fall-jeju-campaign/blob/master/src/assets/image/intro_img.png?raw=true"></IntroImg>
    </StyledIntroWrap>
  );
}
