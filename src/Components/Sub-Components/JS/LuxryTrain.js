import React from 'react'
import { Button, Card } from 'react-bootstrap';
import "../CSS/luxry.css"

function card(name){
    var data = require("../../../database/trainData.json");
    var route = data[name]["routes"];
    var cost = data[name]["Cost"];
    var trainName = name.toUpperCase();
    // var 
    return(
        <div className="lcbody">
            <Card className="lcbodyPart">
      <Card.Img variant="top" src={data[name]["img"]} className="lctimg"/> 
      <Card.Body className='lcbodydet'>
        <Card.Title className='lctitle'><h4> {trainName} </h4></Card.Title>
        <Card.Text>
          {data[name]["details"]}
          <hr/>
          Routes : {route.map((i)=>(
            <li>{i}</li>
          ))}
          <hr/>
          Fares  : {cost.map((i)=>(
            <li>{i}</li>
          ))}
          <hr/>
          <strong> Operation Days : </strong><br/>
          {data[name]["opertation"]}
          <hr/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <a href={data[name]["offical"]} target="_blank" rel="noreferrer">  <Button> Offical Website </Button> </a>
      </Card.Footer>
          
    </Card>
        </div>
    )
}
export default function LuxryTrain() {
    var trainList = require("../../../database/Trains.json");
    var list = trainList["trains"]["luxry"];
  return (
    <>
      <div className="head"><h2>Luxury Trains in India</h2> </div>
    <div className="lxrybody">
      <div className='lxry'>
        {list.map((i)=>card(i))}
      </div>
    </div>
    </>
  )
}
