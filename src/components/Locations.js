import axios from "axios";
import React, { useState } from "react";

import { LocationWrap } from "./styled/Location";

function Locations() {
  let [locations, setLocations] = useState([]);

  function apiLocation() {
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
    return <LocationWrap locations={locations}></LocationWrap>;
  } else {
    apiLocation();
    return null;
  }
}

export default Locations;
