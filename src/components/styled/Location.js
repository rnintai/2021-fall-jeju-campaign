import styled from "styled-components";

const LocationWrap = styled.section`
  :nth-child(even) {
    flex-direction: row-reverse;
  }

  display: flex;
  align-items: center;
  margin-bottom: 40px;

  :last-child {
    margin-bottom: 100px;
  }
`;

const Thumb = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100px;
  height: 100px;
  border: 5px solid ${({ theme }) => theme.color.light_green};
  border-radius: 100%;
  :nth-child(odd) {
    margin: 0 15px;
  }
`;

// Wrap
const Metadata = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100%;
`;
// Title
const MetaTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const MetaTitleNumber = styled.h3`
  display: inline-block;
  color: ${({ theme }) => theme.color.orange};
`;
const MetaTitleContent = styled.h3`
  display: inline-block;
`;

// Desc
const MetaDesc = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
`;
// Sights
const MetaSights = styled.span`
  font-size: 13px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.green};
`;

export function Location({ locations }) {
  return locations.map((location) => (
    <LocationWrap key={location.id}>
      <Thumb src={location.thumb}></Thumb>
      <Metadata>
        <MetaTitle>
          <MetaTitleNumber>{location.id}.&nbsp;</MetaTitleNumber>
          <MetaTitleContent>{location.title}</MetaTitleContent>
        </MetaTitle>
        <MetaDesc>{location.description}</MetaDesc>
        <MetaSights>추천명소 : {location.sights.join(", ")}</MetaSights>
      </Metadata>
    </LocationWrap>
  ));
}
