import { useState } from "react";
import styled from "styled-components";

import { MenuButton } from "./MenuButton";

export const TicketsWrap = styled.section`
  padding: 0 25%;
  transition: padding 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0 7%;
  }
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 3rem 0 1.5rem 0;
`;

const TagWrap = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

const StyledTicketsWrap = styled.ul``;
const StyledTicketsTable = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 0.8rem;
  padding-top: 2rem;
  margin-bottom: 4rem;
`;

const StyledTicket = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
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
  font-size: ${({ theme }) => theme.fontSize.ms};
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Sort = styled.span`
  color: ${({ theme }) => theme.color.gray};
`;
const StyledDiscountRatio = styled.span`
  color: white;
  background-color: ${({ theme }) => theme.color.orange};
  padding: 0 0.3rem;
  border-radius: 0.6rem;
  font-weight: 700;
`;

function DiscountRatio({ ratio }) {
  return ratio !== undefined ? (
    <StyledDiscountRatio>{ratio * 100 + "%"}</StyledDiscountRatio>
  ) : null;
}

const TitleWrap = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.m};
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const Location = styled.span``;
const TicketTitle = styled.span``;

const CostWrap = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const StyledCost = styled.span`
  color: ${(props) =>
    props.discount ? ({ theme }) => theme.color.gray : "#000"};
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

function Price(cost, ratio) {
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

export function Ticket({ tickets }) {
  let tagArr = [];
  tagArr = filterTagDuplication(tickets);

  const [activated, setActivated] = useState(tagArr[0].id);
  const [sortedTickets, setSortedTickets] = useState(
    filterByTag(tickets, tagArr[0].tag)
  );

  return (
    <StyledTicketsWrap>
      <TagWrap>
        {tagArr.map((tag) => (
          <MenuButton
            key={tag.id}
            tagId={tag.id}
            primary={activated === tag.id}
            size="medium"
            label={tag.tag}
            themeColor={({ theme }) => theme.color.orange}
            secondaryColor={({ theme }) => theme.color.darkOrange}
            onClick={() => {
              setActivated(tag.id);
              setSortedTickets(filterByTag(tickets, tag.tag));
            }}
          ></MenuButton>
        ))}
      </TagWrap>
      <StyledTicketsTable>
        {sortedTickets.map((ticket) => (
          <StyledTicket key={ticket.id}>
            <Thumb src={ticket.thumb}></Thumb>
            <MetaData>
              <Information>
                <Sort>{ticket.sort}</Sort>
                <DiscountRatio ratio={ticket.discountRatio}></DiscountRatio>
              </Information>
              <TitleWrap>
                <Location>[{ticket.location}]&nbsp;</Location>
                <TicketTitle>{ticket.title}</TicketTitle>
              </TitleWrap>
              {Price(ticket.cost, ticket.discountRatio)}
            </MetaData>
          </StyledTicket>
        ))}
      </StyledTicketsTable>
    </StyledTicketsWrap>
  );
}

const StyledSeeMoreButton = styled.button`
  background-color: ${({ theme }) => theme.color.darkRed};
  padding: 0.7rem 3rem;
  font-size: ${({ theme }) => theme.fontSize.ml};
  font-weight: 700;
  color: white;
  margin-bottom: 4rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export function SeeMore({ text }) {
  return <StyledSeeMoreButton>{text}</StyledSeeMoreButton>;
}

/**
 * filterTagDuplication
 * 태그의 중복을 제거해준다. 태그 메뉴 탭 표시용
 * @param srcArr - Original 배열
 * @returns 중복 제거된 tickets 배열
 */

function filterTagDuplication(srcArr) {
  let resultArr = [];
  // copy array.
  srcArr.forEach(function (ticket) {
    resultArr.push({
      id: ticket.id,
      tag: ticket.tag,
    });
  });

  // remove duplications
  resultArr = srcArr.filter((elem, i) => {
    return (
      resultArr.findIndex((elem2, j) => {
        return elem.tag === elem2.tag;
      }) === i
    );
  });

  return resultArr;
}

/**
 * filterByTag
 * 인자로 받은 tag로 filtering해주는 메서드
 * @param {*} srcArr - original array
 * @param {*} tag - filtering할 태그.
 * @returns tag에 맞게 필터링 된 결과 배열
 */
function filterByTag(srcArr, tag) {
  let resultArr = [];
  // copy array.
  srcArr.forEach(function (ticket) {
    resultArr.push(ticket);
  });

  // filter by tags
  resultArr = srcArr.filter((elem) => {
    return elem.tag === tag;
  });

  return resultArr;
}
