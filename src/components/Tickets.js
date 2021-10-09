import React, { useState } from "react";
import axios from "axios";

import { TicketsWrap, Title, Ticket, SeeMore } from "./styled/Tickets";

function Tickets() {
  let [tickets, setTickets] = useState([]);

  function fetchApi(path) {
    const url = process.env.REACT_APP_BASEURL;
    axios
      .get(url + path)
      .then(function (response) {
        setTickets(response.data.tickets);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  if (tickets !== undefined && tickets.length > 0) {
    return (
      <TicketsWrap>
        <Title text="#내가 원하는 제주 여행은?"></Title>
        <Ticket tickets={tickets}></Ticket>
        <SeeMore text="제주 상품 더 보기"></SeeMore>
      </TicketsWrap>
    );
  } else {
    fetchApi("/tickets");
    return null;
  }
}

export default Tickets;
