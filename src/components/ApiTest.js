import React, { useState } from "react";
import axios from "axios";

function ApiTest() {
  let [locations, setLocations] = useState([]);

  function searchApi() {
    const url = "https://stoplight.io/mocks/jeju/fall-jeju/22435321";
    axios
      .get(url + "/locations")
      .then(function (response) {
        setLocations(response.data.locations);
        console.log(response.data.locations);
      })
      .catch(function (error) {
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

export default ApiTest;
