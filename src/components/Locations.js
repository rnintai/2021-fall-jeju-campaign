import React, { useState } from "react";
import axios from "axios";

function Locations() {
  let [locations, setLocations] = useState([]);

  function searchApi() {
    const url = process.env.REACT_APP_BASEURL;
    axios
      .get(url + "/locations")
      .then(function (response) {
        setLocations(response.data.locations);
        console.log(response.data.locations);
        console.log(url);
      })
      .catch(function (error) {
        console.log(url);
        console.log("실패");
      });
  }

  if (locations !== undefined && locations.length > 0) {
    return locations.map((location) => (
      <div key={location.id} className="title">
        <p>{location.title}</p>
        <p>{location.description}</p>
        <p>{location.sights}</p>
      </div>
    ));
  } else {
    searchApi();
    return null;
  }
}

export default Locations;
