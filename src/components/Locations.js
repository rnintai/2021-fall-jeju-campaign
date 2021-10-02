import React, { useState } from "react";

import axios from "axios";

import {
  Location,
  Thumb,
  Metadata,
  MetaTitle,
  MetaTitleNumber,
  MetaTitleContent,
  MetaDesc,
  MetaSights,
} from "./styled/Location";

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
    return locations.map((location) => (
      <Location key={location.id}>
        <Thumb src={location.thumb}></Thumb>
        <Metadata>
          <MetaTitle>
            <MetaTitleNumber>{location.id}.&nbsp;</MetaTitleNumber>
            <MetaTitleContent>{location.title}</MetaTitleContent>
          </MetaTitle>
          <MetaDesc>{location.description}</MetaDesc>
          <MetaSights>추천명소 : {location.sights.join(", ")}</MetaSights>
        </Metadata>
      </Location>
    ));
  } else {
    searchApi();
    return null;
  }
}

export default Locations;
