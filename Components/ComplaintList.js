// ComplaintsList.jsx
import React, { useState, useEffect } from 'react';
import './ComplaintList.css';
import { Link } from 'react-router-dom';
import CardImages from './CardImages';


const ComplaintList=()=>{
  
  return (
    <div className="photos">
      <h2>Lists</h2>
      <img src="https://img.freepik.com/premium-photo/close-up-file-tab-with-word-complaints-focus-main-text-blur-effect-concept-image-illustration-customer-service-complaint-management_556904-1576.jpg?w=1060"/>
     
   <div className='List'>
   <CardImages/> 
     </div> 
     <Link to='/ComplaintForm' ><button>next page</button> </Link>
     </div>
     );
  }

export default ComplaintList;
