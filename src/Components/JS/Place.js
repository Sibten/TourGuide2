import React, { useState } from 'react'
import '../CSS/Placs.css'
import {FaSearch} from 'react-icons/fa'
import Cards from '../Sub-Components/JS/Cards'
import { Link } from 'react-router-dom';

export default function Place() {
  const [Query, setQuery] = useState('');

  const updateQuery = (event) =>{
    setQuery(event.target.value);
    // console.log(Query);
  }
  return (
    <div className='place'>
      <div className="sboxCont">
      <h2>  <FaSearch/> Search </h2>
       <input type="text" name="SearchPlace" id="searchBox" className='sbox' placeholder='Type here to Search Place' onChange={updateQuery}/>
      <Link to="/Places/Search" state={Query}>  <button className='sbtn'>Search </button> </Link>
      <div className="card">
          <Cards/>
      </div>
      </div>
    </div>
  )
}
