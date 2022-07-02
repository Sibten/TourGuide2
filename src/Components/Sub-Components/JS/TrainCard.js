import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {BiTargetLock, BiTrain,BiTime} from 'react-icons/bi'
import {AiTwotoneSetting} from 'react-icons/ai'
import {BsArrowReturnLeft, BsCalendarDate, BsCalendarDay, BsSpeedometer2 } from 'react-icons/bs'
import { FaBed, FaSourcetree } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { GiPathDistance,GiBusStop } from 'react-icons/gi';
import "../CSS/trainCard.css"
export default function TrainCard(props) {

  var data = require("../../../database/trainData.json")
  var tn = props.tnumber;
  tn = tn.toString();
  // const [TName,setTName] = useState([]);
  
  return (
    <div>
      <Card className="cardBody" style={{ width: '18rem',margin:"5px",height:"350px",textAlign:"left" }}>
      
      <Card.Body>
        <Card.Title className='cardTitle'> {data[tn]["tname"]}</Card.Title>
        <Card.Text className='cardText'>
          <table>
            <tr>
              <td> <BiTrain/> Train No </td>
              <td> {tn}</td>
            </tr>
            <tr>
              <td> <FaSourcetree/> Source  </td>
              <td> {data[tn]["source"]}</td>
            </tr>
            <tr>
              <td> <GrLocationPin/>  Destination </td>
              <td> {data[tn]["destn"]}</td>
            </tr>
            <tr>
              <td> <BsSpeedometer2/>  Avg. Speed  </td>
              <td> {data[tn]["speed"]} </td>
            </tr>
            <tr>
              <td> <GiPathDistance/> Total Distance</td>
              <td> {data[tn]["distance"]} </td>
            </tr>
            <tr>
              <td> <BiTime/> Total Time   </td>
              <td> {data[tn]['travel']} </td>
            </tr>
            <tr>
              <td> <AiTwotoneSetting/> Type of Rake </td>
              <td>{data[tn]["type"]}</td>
            </tr>
            <tr>
              <td><BsCalendarDay/> Days </td>
              <td>{data[tn]['days']}</td>
            </tr>
            <tr>
              <td><BsArrowReturnLeft/> Return Train </td>
              <td>{data[tn]["return"]}</td>
            </tr>
            <tr>
              <td><FaBed/> Class </td>
              <td>{data[tn]["class"]}</td>
            </tr>
            <tr>
              <td><GiBusStop/> Total Stop </td>
              <td>{data[tn]["stoppage"]}</td>
            </tr>
          </table>
         
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
