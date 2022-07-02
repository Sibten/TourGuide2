import React from "react";
import "../CSS/card.css"
import { Card } from "react-bootstrap";
import {FaFire} from 'react-icons/fa'
function Destination(name) {
  var img = require("../../../database/city.json");
  
  
   
  return (
    <div className="destnCard">
      <Card className="Cardbody" style={{ width: "18rem",height:"100%",overflowY:"scroll" }}>
        <Card.Img variant="top" src={img["popular"][name]["link"]} />
        <Card.Body>
          <Card.Title>{img["popular"][name]["loc"]}</Card.Title>
          <Card.Text>{img["popular"][name]["details"]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default function Cards() {
  var list = ["Darjiling","Hawamahal","Lakshdweep","Park","Leh","Jaisalmer","Shimla","Goa","Srinagar"];
  return (
    <>
    <div className="destnTitle"> <FaFire/> Trending Destination  </div>
  <div className="destn">
    { list.map((i)=>Destination(i)) }
  </div>
    </>
  );
}
