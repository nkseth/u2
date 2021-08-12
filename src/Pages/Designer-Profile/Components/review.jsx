import React from 'react';
import Designer from './../../../Images/image/Designer.png';
import {Star} from '@material-ui/icons'

function review(props) {
    return (
        <div style={{borderRadius:"5px",padding:40,backgroundColor:"#ffffff"}}>
            <img style={{borderRadius:"50%"}} width="80x" height="80px" src={Designer}></img>
            <div style={{marginTop:5}}>
            <Star style={{color:"#DDAF0E"}} />
            <Star style={{color:"#DDAF0E"}} />
            <Star style={{color:"#DDAF0E"}} />
            <Star style={{color:"#DDAF0E"}} />
            <Star style={{color:"#CECECE"}} /><span style={{color:"#857250",fontFamily:"DM Sans", fontWeight:"bold",fontSize:"16px",marginLeft:10}}>480 votes</span>
            <span style={{fontFamily:"DM Sans", display:"block",fontSize:"16px",color:"#0a0a0a"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium vel dicta architecto tempore repudiandae nihil voluptas sunt ipsa? Officia?</span>
            </div>


            
        </div>
    );
}

export default review;