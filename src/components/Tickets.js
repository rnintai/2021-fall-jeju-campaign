import FetchApi from "../api/FetchApi";
import { TicketsWrap, Title, Ticket, SeeMore } from "./styled/Tickets";

function Tickets() {
  const { payload, loading, error } = FetchApi("/tickets");
  return (
    <>
      {loading && <span> </span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && (
        <TicketsWrap>
          <Title text="#내가 원하는 제주 여행은?"></Title>
          <Ticket tickets={payload.tickets}></Ticket>
          <SeeMore text="제주 상품 더 보기"></SeeMore>
        </TicketsWrap>
      )}
    </>
  );
}

export default Tickets;
