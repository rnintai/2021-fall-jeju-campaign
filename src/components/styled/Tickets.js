import { useState } from "react";
import styled from "styled-components";

import { MenuButton } from "./MenuButton";
import { ProductCard } from "./ProductCard";
import { ProductCardWrapper } from "./ProductCardWrapper";

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
      <ProductCardWrapper>
        {sortedTickets.map((ticket) => (
          <ProductCard
            key={ticket.id}
            themeColor={({ theme }) => theme.color.orange}
            numbersInRow="2"
            thumb={ticket.thumb}
            sort={ticket.sort}
            tag={ticket.location}
            title={ticket.title}
            originalPrice={ticket.cost}
            discountRatio={ticket.discountRatio}
          ></ProductCard>
        ))}
      </ProductCardWrapper>
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
