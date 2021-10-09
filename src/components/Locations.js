import FetchApi from "../api/FetchApi";
import { LocationWrap } from "./styled/Locations";

function Locations() {
  const { payload, loading, error } = FetchApi("/locations");
  return (
    <>
      {loading && <span>Loading...</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && (
        <LocationWrap locations={payload.locations}></LocationWrap>
      )}
    </>
  );
}

export default Locations;
