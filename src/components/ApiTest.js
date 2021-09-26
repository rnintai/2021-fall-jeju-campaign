import React from "react";
import axios from "axios";

function ApiTest() {
  const url = "https://8c7b6b03-a1ec-42ee-90d7-7b0204c22594.mock.pstmn.io";
  axios
    .get(url + "/locations")
    .then(function (response) {
      console.log(response.data.locations);
      console.log("성공");
    })
    .catch(function (error) {
      console.log("실패");
    });

  return null;
}

export default ApiTest;
