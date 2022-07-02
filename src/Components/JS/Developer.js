import React from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import axios from "axios";

export default function Developer() {

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
    params: {fromStationCode: 'AHEMDABAD', toStationCode: 'AJMER'},
    headers: {
      'X-RapidAPI-Key': '1ea0de10f2msh5365be07950ff49p1de1a7jsn3f7e7465cf24',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  


var handleClick = () =>{
  axios.request(options).then((response) =>{
    var RespData = response['data'];
    console.log(RespData);
  }).catch(function (error) {
    console.error(error);
  });
}

// var Rdata = require("../../database/rough.json");
// var t = Rdata['data'][0]['train_number'];
  return (
    <div>
      {/* {Rdata['data'][0]['train_name']} */}
      <Button onClick={handleClick}> Fetch</Button>
    </div>
  )
}
