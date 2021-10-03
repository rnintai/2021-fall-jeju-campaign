import styled from "styled-components";

const StyledIntroWrap = styled.header`
  margin-bottom: 3rem;
`;
const IntroImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  transform: scale(1.1);
`;

export function IntroWrap() {
  return (
    <StyledIntroWrap>
      <IntroImg src="https://github.com/rnintai/2021-fall-jeju-campaign/blob/master/src/assets/image/intro_img.png?raw=true"></IntroImg>
    </StyledIntroWrap>
  );
}
