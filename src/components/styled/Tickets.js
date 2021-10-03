import { useState } from "react";
import styled from "styled-components";

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

// const StyledTagMenu = styled.li`
//   display: flex;
// `;

const TagBtn = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.active === props.tag_id
      ? "white"
      : ({ theme }) => theme.color.dark_orange};
  font-size: ${({ theme }) => theme.fontSize.ml};
  background-color: ${(props) =>
    props.active === props.tag_id
      ? ({ theme }) => theme.color.orange
      : "white"};
  border: 1px solid ${({ theme }) => theme.color.dark_orange};
  padding: 0.6rem 1.8rem;
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
  var currency_formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
  const cost_str = currency_formatter.format(cost).substr(1) + "원";

  if (ratio === undefined) {
    return <StyledCost>{cost_str}</StyledCost>;
  } else {
    // \14,000 -> 14,000 -> 14,000원
    const discounted_str =
      currency_formatter.format(cost * (1 - ratio)).substr(1) + "원";
    return (
      <CostWrap>
        <StyledCost discount="true">{cost_str}</StyledCost>
        <DiscountedCost>{discounted_str}~</DiscountedCost>
      </CostWrap>
    );
  }
}

export function Ticket({ tickets }) {
  var tag_arr = [];
  tag_arr = filter_tag_duplication(tickets);

  const [activated, setActivated] = useState(tag_arr[0].id);
  const [sortedTickets, setSortedTickets] = useState(
    filter_by_tag(tickets, tag_arr[0].tag)
  );

  return (
    <StyledTicketsWrap>
      <TagWrap>
        {tag_arr.map((tag) => (
          <TagBtn
            key={tag.id}
            onClick={() => {
              setActivated(tag.id);
              setSortedTickets(filter_by_tag(tickets, tag.tag));
            }}
            tag_id={tag.id}
            active={activated}
          >
            {tag.tag}
          </TagBtn>
        ))}
      </TagWrap>
      <StyledTicketsTable>
        {sortedTickets.map((ticket) => (
          <StyledTicket key={ticket.id}>
            <Thumb src={ticket.thumb}></Thumb>
            <MetaData>
              <Information>
                <Sort>{ticket.sort}</Sort>
                <DiscountRatio ratio={ticket.discount_ratio}></DiscountRatio>
              </Information>
              <TitleWrap>
                <Location>[{ticket.location}]&nbsp;</Location>
                <TicketTitle>{ticket.title}</TicketTitle>
              </TitleWrap>
              {Price(ticket.cost, ticket.discount_ratio)}
            </MetaData>
          </StyledTicket>
        ))}
      </StyledTicketsTable>
    </StyledTicketsWrap>
  );
}

const StyledSeeMoreButton = styled.button`
  background-color: ${({ theme }) => theme.color.dark_red};
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
 * filter_tag_duplication
 * 태그의 중복을 제거해준다. 태그 메뉴 탭 표시용
 * @param src_arr - Original 배열
 * @returns 중복 제거된 tickets 배열
 */

function filter_tag_duplication(src_arr) {
  var result_arr = [];
  // copy array.
  src_arr.forEach(function (ticket) {
    result_arr.push({
      id: ticket.id,
      tag: ticket.tag,
    });
  });

  // remove duplications
  result_arr = src_arr.filter((elem, i) => {
    return (
      result_arr.findIndex((elem2, j) => {
        return elem.tag === elem2.tag;
      }) === i
    );
  });

  return result_arr;
}

/**
 * filter_by_tag
 * 인자로 받은 tag로 filtering해주는 메서드
 * @param {*} src_arr - original array
 * @param {*} tag - filtering할 태그.
 * @returns tag에 맞게 필터링 된 결과 배열
 */
function filter_by_tag(src_arr, tag) {
  var result_arr = [];
  // copy array.
  src_arr.forEach(function (ticket) {
    result_arr.push(ticket);
  });

  // filter by tags
  result_arr = src_arr.filter((elem) => {
    return elem.tag === tag;
  });

  return result_arr;
}
