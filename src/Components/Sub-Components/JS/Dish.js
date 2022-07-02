import React from 'react'
import { Card } from 'react-bootstrap';
import '../CSS/dish.css'
function card(name){
  var dishes = require("../../../database/cityDishes.json");
  return(
    <Card className="cardBody" >
    <Card.Img variant="top" src={dishes[name]['link']} className="dishImg" />
    <Card.Body>
      <Card.Title><h3> {name} </h3></Card.Title>
      <Card.Text>
        {dishes[name]['details']}
      </Card.Text>
      <hr/>

      Famaous In : {dishes[name]['where']}
    </Card.Body>
  </Card>
  );
}
export default function Dish(props) {
    var data = require("../../../database/cityData.json");
    var city = props.text;
    var cityDishList = data[city]['famousDish'];
  return (
    <>
      <div className="main">
        <h2> Famous Dish in {city} </h2>
      <div className='dishes'>
        <div className="dishCard">
          {
            cityDishList.map( (i) => card(i))
          }
        </div>
    </div>
    </div>
    </>
  );
}
