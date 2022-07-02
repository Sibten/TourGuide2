import React from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Search.css";
import Cards2 from "./Cards2";
import {
  FaArrowCircleLeft,
  FaHistory,
} from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Reach from "./Reach";
import Weather from "./Weather";
import Dish from "./Dish";
import axios from "axios";
import { useState } from "react";

function back() {
  // console.log("back")
  window.history.go(-1);
}

export default function Serach() {
  const location = useLocation();
  var data = location.state;
  data = data.toLowerCase();

  var details = require("../../../database/cityData.json");
  

  var city = details["cityList"];
  if (!city.includes(data)) {
    return (
      <>
        <button onClick={back}>
          {" "}
          <FaArrowCircleLeft /> Back{" "}
        </button>
        <h2> City Couldn't found </h2>
      </>
    );
  } else {
    var stateName = details[data]["state"];
    var countryName = details[data]["country"];
    var overview = details[data]["ovc"];
    var history = details[data]["history"];
    var cityPlaces = details[data]["places"];
    return (
      <div className="main">
        <div className="cityHead">
          <button onClick={back}>
            {" "}
            <FaArrowCircleLeft /> Back{" "}
          </button>
          <div className="title">
            <h1>{data.toUpperCase()} </h1>
          </div>
    
          <div className="state">
            <h4>
              {stateName}, {countryName}
            </h4>
          </div>
        </div>
        <div className="row1">
          <div className="dataCont">
            <h3>
              {" "}
              <FaHistory /> &nbsp; History{" "}
            </h3>
            <hr />
            <p>{history}</p>
          </div>
          <div className="dataCont">
            <h3>
              {" "}
              <BsFillInfoCircleFill /> &nbsp; Over View{" "}
            </h3>
            <hr />
            <p>{overview}</p>
          </div>
        </div>
        <div className="row2">
          <div className="rowtitle">
            {" "}
            <h3> Popular Place to Visit in {data} </h3>{" "}
          </div>
          <div className="content">
            {cityPlaces.map((i) => (
              <Cards2 text={i} />
            ))}
          </div>
        </div>
          <Reach text={data}/>
          <Weather text={data}/>
          <Dish text={data}/>
  
      </div>
    );
  }
}
