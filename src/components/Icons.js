import React from 'react';
import {FaTimes, FaPen, FaRegCircle, FaCircle } from "react-icons/fa"

function Icons({name}) {
  switch (name) {
    case "circle": 
            return <FaRegCircle className='icon'/>
            break;
    case "cross": 
            return <FaTimes className='icon'/>
            break;
    default: return <FaPen className='icon'/>
        break;
  }
}

export default Icons;