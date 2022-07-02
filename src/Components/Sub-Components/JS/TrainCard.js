import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {BiTargetLock, BiTrain,BiTime} from 'react-icons/bi'
import {AiTwotoneSetting} from 'react-icons/ai'
import {BsArrowReturnLeft, BsCalendarDate, BsCalendarDay, BsSpeedometer2 } from 'react-icons/bs'
import { FaBed, FaSourcetree,FaLocationArrow } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { GiPathDistance,GiBusStop } from 'react-icons/gi';
// import { IoLocationSharp } from 'react-icons/io';
import "../CSS/trainCard.css"
export default function TrainCard(props) {

  var data = require("../../../database/trainData.json")
  var tn = props.tnumber;
  tn = tn.toString();
  // const [TName,setTName] = useState([]);
  
  return (
    <div>
      <Card className="cardBody" style={{ width: '18rem',margin:"5px",height:"350px",textAlign:"left" }}>
      
      <Card.Body style={{padding:"0px"}}>
        <Card.Title className='cardTitle'> {data[tn]["tname"]}</Card.Title>
        <Card.Text className='cardText'>
          <table style={{marginLeft:"24px"}}>
            <tr>
              <td className='tdTitle'> <BiTrain/> Train No </td>
              <td> {tn}</td>
            </tr>
            <tr>
              <td className='tdTitle'> <FaSourcetree/> Source  </td>
              <td> {data[tn]["source"]}</td>
            </tr>
            <tr>
              <td className='tdTitle'> <FaLocationArrow/>  Destination </td>
              <td> {data[tn]["destn"]}</td>
            </tr>
            <tr>
              <td className='tdTitle'> <BsSpeedometer2/>  Avg. Speed  </td>
              <td> {data[tn]["speed"]} </td>
            </tr>
            <tr>
              <td className='tdTitle'> <GiPathDistance/> Total Distance</td>
              <td> {data[tn]["distance"]} </td>
            </tr>
            <tr>
              <td className='tdTitle'> <BiTime/> Total Time   </td>
              <td> {data[tn]['travel']} </td>
            </tr>
            <tr>
              <td className='tdTitle'> <AiTwotoneSetting/> Type of Rake </td>
              <td>{data[tn]["type"]}</td>
            </tr>
            <tr>
              <td className='tdTitle'><BsCalendarDay/> Days </td>
              <td>{data[tn]['days']}</td>
            </tr>
            <tr>
              <td className='tdTitle'><BsArrowReturnLeft/> Return Train </td>
              <td>{data[tn]["return"]}</td>
            </tr>
            <tr>
              <td className='tdTitle'><FaBed/> Class </td>
              <td>{data[tn]["class"]}</td>
            </tr>
            <tr>
              <td className='tdTitle'><GiBusStop/> Total Stop </td>
              <td>{data[tn]["stoppage"]}</td>
            </tr>
          </table>
         
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
