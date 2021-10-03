import styled from "styled-components";

const StyledLocationWrap = styled.ul`
  margin-bottom: 6.3rem;
`;

const LocationItem = styled.li`
  :nth-child(even) {
    flex-direction: row-reverse;
  }

  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const Thumb = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 6.3rem;
  height: 6.3rem;
  border: 0.3rem solid ${({ theme }) => theme.color.light_green};
  border-radius: 100%;
  :nth-child(odd) {
    margin: 0 1rem;
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
  margin-bottom: 0.3rem;
`;
const MetaTitleNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  display: inline-block;
  color: ${({ theme }) => theme.color.orange};
`;
const MetaTitleContent = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  display: inline-block;
`;

// Desc
const MetaDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
`;
// Sights
const MetaSights = styled.span`
  font-size: ${({ theme }) => theme.fontSize.ms};
  font-weight: 300;
  color: ${({ theme }) => theme.color.green};
`;

export function LocationWrap({ locations }) {
  return (
    <StyledLocationWrap>
      <Location locations={locations}></Location>
    </StyledLocationWrap>
  );
}

function Location({ locations }) {
  return locations.map((location) => (
    <LocationItem key={location.id}>
      <Thumb src={location.thumb}></Thumb>
      <Metadata>
        <MetaTitle>
          <MetaTitleNumber>{location.id}.&nbsp;</MetaTitleNumber>
          <MetaTitleContent>{location.title}</MetaTitleContent>
        </MetaTitle>
        <MetaDesc>{location.description}</MetaDesc>
        <MetaSights>
          추천명소 :{" "}
          {location.sights.length > 3
            ? location.sights.slice(0, 3).join(", ") + " 등"
            : location.sights.slice(0, 3).join(", ")}
        </MetaSights>
      </Metadata>
    </LocationItem>
  ));
}
