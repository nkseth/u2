import React from 'react';
import Image from '../../../../../../Images/image/Product.png'




function Card(props) {
  
    return (
        <div style={{backgroundColor:"#F3F1EE"}}>
            <img src={Image} width="263px"  height="263px" ></img>
            <h5 style={{fontFamily:"DM Sans",fontSize:"16px",fontWeight:"bold", color:"#0a0a0a"}}>Brand Name</h5>
            
            
        </div>
    );
}

export default Card;