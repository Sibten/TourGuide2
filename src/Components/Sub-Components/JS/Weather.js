import axios from 'axios';
import React, { useState } from 'react'
import "../CSS/weather.css"
import {FaTemperatureLow, FaThermometer, FaWind} from 'react-icons/fa'
import {BsSpeedometer, BsThermometerSun} from 'react-icons/bs'
import {WiHumidity} from 'react-icons/wi'
import { MdVisibility } from 'react-icons/md'

export default function Weather(props) {
    var data = require("../../../database/cityData.json");
    var city = props.text;

    var img = require("../../../database/city.json");
    // const[DatetData] = useState("");
    // var city = name;
    const[Temp,setTemp] = useState("");
    const[Pressure,setPressure] = useState("");
    const[Humidity,setHumidity] = useState("");
    const[Visibility,setVisibility] = useState("");
    const[Wind,setWind] = useState("");
    const[Rain,setRain] = useState("");
    var req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e40930f22babe508df3bbc1157538062`
    axios.get(req).then((Response)=>{
        setTemp(Response['data']['main']['temp']-273.15) ;
        setPressure(Response['data']['main']['pressure']);
        setHumidity(Response['data']['main']['humidity']);
        setVisibility(Response['data']['visibility'])
        setWind(Response['data']['wind']['speed']);
        setRain(Response['data']['rain']['1h'])
       });
    var cuTemp = parseFloat(Temp);

  return (
    <div className='weatherBody'>
        <h2> Weather Analysis </h2>
        <div className='Weather'>
            <div className="weCard">
                <h4> Current Weather </h4>
                <div className="data">
                    <table>
                        <tr>
                            <td> <FaTemperatureLow style={{marginLeft:'4.5px'}}/> Temperature </td>
                            <td> {cuTemp.toFixed(2)} &deg;C</td>
                        </tr>
                        <tr>
                            <td> <BsSpeedometer/> &nbsp; Pressure  </td>
                            <td> {parseFloat(Pressure)} mb </td>
                        </tr>
                        <tr>
                            <td> <WiHumidity style={{fontSize:'25px',marginLeft:'-5px'}}/> Humidity  </td>
                            <td> {parseFloat(Humidity)} % </td>
                        </tr>
                        <tr>
                            <td> <FaWind/> &nbsp;  Wind  </td>
                            <td> {parseFloat(Wind)} m/s</td>
                        </tr>
                        <tr>
                            <td>  <MdVisibility/> &nbsp; Visibility  </td>
                            <td> {(parseFloat(Visibility)/1000).toFixed(2)} km </td>
                        </tr>
                    </table>
                              
                </div>
            </div>
            {/* {city} */}
            <div className="weCard">
                <h4> Monthly Temp Analysis </h4>
                <img src={data[city]['month-temp']} alt="temp"/>
            </div>
            <div className="weCard">
                <h4>Monthly Rain Anlysis </h4> 
                <img src={data[city]['month-rain']} alt="rain"/>
            </div>
            <div className="weCard">
                <h4>Monthly Humidity  </h4> 
                <img src={data[city]['month-humidity']} alt="Humidity"/>
            </div>
            <div className="weCard">
                <h4>Monthly precipitation  </h4> 
                <img src={data[city]['month-precp']} alt="precp"/>
            </div>
        </div>
        <div className="best">
            <h4> Best Time to Visit </h4>
            {data[city]['bestTime']}
        </div>
        <div className="weatherFooter">
          <p>   Powerd By : OpenWeather | 
        Credit : &nbsp; World Weather &#38; Climate Information </p>
        </div>
    </div>
  )
}
