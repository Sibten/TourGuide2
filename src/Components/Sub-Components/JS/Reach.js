import React from 'react'
import "../CSS/reach.css"
import {FaTrain,FaPlane,FaRoad, FaTimes, FaTimesCircle, FaCalendar} from "react-icons/fa"
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
export default function Reach(props) {
    var data = require("../../../database/cityData.json");
    var city = props.text;
    var trainList = data[city]["trainList"];

  return (
    <div className="reach">
        <h2>How to reach ?</h2> 
    <div className='reachCard'>
        {/* {props.text} */}
        <div className="reachMethod">
            <h3>  <FaTrain/> Train </h3>
            <hr/>
            {data[city]["train"]}
            <hr/>
            <Link to="/Train"> <Button> Search Trains</Button> </Link>
        </div>
        <div className="reachMethod">
            <h3><FaPlane/> Plane </h3> 
            <hr/>
            {data[city]["plane"]}
        </div>
        <div className="reachMethod">
            <h3> <FaRoad/> Road  </h3> 
            <hr/>
            {data[city]["road"]}
        </div> 
    </div>
    </div>
    
  );
}
