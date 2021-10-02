import React, { useState } from "react";

import axios from "axios";

import { Location } from "./styled/Location";

function Locations() {
  let [locations, setLocations] = useState([]);

  function searchApi() {
    const url = process.env.REACT_APP_BASEURL;
    axios
      .get(url + "/locations")
      .then(function (response) {
        setLocations(response.data.locations);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  if (locations !== undefined && locations.length > 0) {
    return <Location locations={locations}></Location>;
  } else {
    searchApi();
    return null;
  }
}

export default Locations;
