import React from 'react'
import {Card}from 'react-bootstrap'
import "../CSS/card2.css"

export default function Cards2(props) {
  var data = require("../../../database/city.json");
  var name = props.text;
  return(

     <div className="destnCard">
      <Card className="destnCardBody" >
        <Card.Img variant="top" src={ data["popular"][name]["link"]} style={{height:"200px",position:"sticky",top:"0"}} alt="city"/>
        <Card.Body>
          <Card.Title className="title">{name},{data["popular"][name]["loc"]}</Card.Title>
          <Card.Text>{data["popular"][name]["details"]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
