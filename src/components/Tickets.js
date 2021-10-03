import React, { useState } from "react";
import axios from "axios";

import { TicketsWrap, Title, TagMenu, Ticket } from "./styled/Tickets";

function Tickets() {
  let [tickets, setTickets] = useState([]);

  function searchApi() {
    const url = process.env.REACT_APP_BASEURL;
    axios
      .get(url + "/tickets")
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
        <TagMenu tickets={tickets}></TagMenu>
        <Ticket tickets={tickets}></Ticket>
      </TicketsWrap>
    );
  } else {
    searchApi();
    return null;
  }
}

export default Tickets;
