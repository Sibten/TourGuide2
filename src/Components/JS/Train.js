import React, { useState } from "react";
import "../CSS/Train.css";
import { FaExchangeAlt } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import TrainCard from "../Sub-Components/JS/TrainCard";
import LuxryTrain from "../Sub-Components/JS/LuxryTrain";

// import TrainPage from "./TrainPage";

export default function Train() {
  const [To, setTo] = useState("");
  const [From, setFrom] = useState("");
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");

  const [show, setShow] = useState(false);

  var today = new Date();
  var day,month; 
  if(today.getDate()<9){
    day = "0"+today.getDate().toString();
  }
  else{
    day = today.getDate().toString();
  }
  if(today.getMonth()< 10){
    month = "0"+ (today.getMonth()+1).toString();
  }
  else{
    month = (today.getMonth()+1).toString();
  }
  var date = day + month + today.getFullYear().toString();
  const axios = require("axios");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const cityTo = {
      method: "GET",
      url: "https://indianrailways.p.rapidapi.com/findstations.php",
      params: { station: To },
      headers: {
        "X-RapidAPI-Key": "1ea0de10f2msh5365be07950ff49p1de1a7jsn3f7e7465cf24",
        "X-RapidAPI-Host": "indianrailways.p.rapidapi.com",
      },
    };
    axios
      .request(cityTo)
      .then((response) => {
        setTo(response["data"]["stations"][0]["stationCode"]);
      })
      .catch(function (error) {
        console.error(error);
      });

    const cityFrom = {
      method: "GET",
      url: "https://indianrailways.p.rapidapi.com/findstations.php",
      params: { station: From },
      headers: {
        "X-RapidAPI-Key": "1ea0de10f2msh5365be07950ff49p1de1a7jsn3f7e7465cf24",
        "X-RapidAPI-Host": "indianrailways.p.rapidapi.com",
      },
    };
    axios
      .request(cityFrom)
      .then((response) => {
        setFrom(response["data"]["stations"][0]["stationCode"]);
      })
      .catch(function (error) {
        console.error(error);
      });
    setShow(true);
  };

  var setChangeTo = (e) => {
    // console.log(e.target.value);
    setTo(e.target.value);
  };
  var setChangeFrom = (e) => {
    // console.log(e.target.value);
    setFrom(e.target.value);
  };
  var setChangeName = (e) => {
    setName(e.target.value);
  };

  var onClickCode = () => {
    console.log(Name);

    // console.log("Loading...");
    const cityTo = {
      method: "GET",
      url: "https://indianrailways.p.rapidapi.com/findstations.php",
      params: { station: Name },
      headers: {
        "X-RapidAPI-Key": "1ea0de10f2msh5365be07950ff49p1de1a7jsn3f7e7465cf24",
        "X-RapidAPI-Host": "indianrailways.p.rapidapi.com",
      },
    };
    axios
      .request(cityTo)
      .then((response) => {
        setCode(response["data"]["stations"][0]["stationCode"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

   const data = require("../../database/Trains.json");
  const rTrain = data['trains']['rajdhani'];
  const sTrain = data['trains']['shatabdi'];
  const hTrain = data['trains']['humsafar'];
  const vTrain = data['trains']['vandebharat'];
  const tTrain = data['trains']['tejas'];

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want Redirect to ixigo trains ? <br /> {From} -- {To} , Date :{" "}
          {date}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a
          //https://www.ixigo.com/search/result/train/ADI/MSH/11112022//1/0/0/0/ALL
            href={`https://www.ixigo.com/search/result/train/${From}/${To}/${date}//1/0/0/0/ALL`}
            target="_blank"
            rel="noreferrer"
          >
            <Button style={{ backgroundColor: "#ec5b24" }}>
              Goto{" "}
              <img
                src="https://www.ixigo.com/about/wp-content/uploads/sites/6/2021/10/ixi_90x44.png"
                width={"50px"}
                alt="ixigoLogo"
              />
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
      <div className="train">
        <div className="cont">
          <div className="trainSearch">
            <div className="title">
              {" "}
              <h2> Station Code Search </h2>{" "}
            </div>
            <input
              type="text"
              name="stncode"
              id="stncode"
              placeholder="Station Name"
              onChange={setChangeName}
            />{" "}
            <br />
            <Button onClick={onClickCode}>Search </Button>
            <div className="ans">
              <h4> Station Code: {Code} </h4>
            </div>
          </div>
          <div className="trainSearch">
            <div className="title">
              {" "}
              <h2> Train Search </h2>
            </div>
            {" "}
            <input
              type="text"
              name="to"
              id="to"
              placeholder="Station Code (From)"
              onChange={setChangeFrom}
            />
            <FaExchangeAlt />
            <input
              type="text"
              name="to"
              id="to"
              placeholder="Station Code (To)"
              onChange={setChangeTo}
            />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp; <br />
            <Button variant="primary" onClick={handleShow}>
              Search
            </Button>{" "}
            <br />
            <div className="footer">
              Powered By :{" "}
              <img
                src="https://www.ixigo.com/about/wp-content/uploads/sites/6/2021/10/ixi_90x44.png"
                width={"50px"}
                alt="ixigoLogo"
              />
            </div>
          </div>
          
        </div>

        <div className="infoRow">
          <div className="rowtitle">
            {" "}
            <h3> Top Rajdhani Express in India </h3>{" "}
          </div>
          <div className="content">
            {rTrain.map((i) => (
              <TrainCard tnumber={i} type="RJDN" />
            ))}
          </div>
          <div className="rowtitle">
              <h3> Top Shatabdi Expresss in India </h3>
          </div>
          <div className="content">
          {sTrain.map((i) => (
              <TrainCard tnumber={i} type="SHTBD"/>
            ))}
          </div>
          <div className="rowtitle">
              <h3> Top Humsafar Expresss in India </h3>
          </div>
          <div className="content">
          {hTrain.map((i) => (
              <TrainCard tnumber={i} type="HSFR"/>
            ))}
          </div>
        </div>
        <div className="luxry">
          <LuxryTrain/>
        </div>
      </div>
    </>
  );
}
