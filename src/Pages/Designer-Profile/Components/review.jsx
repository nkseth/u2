import React from 'react';
import Designer from './../../../Images/image/Designer.png';
import {Star} from '@material-ui/icons'

function review(props) {
    return (
        <div style={{borderRadius:"5px"}}>
            <img style={{borderRadius:"50%"}} width="80x" height="80px" src={Designer}></img>
            <div style={{marginTop:30}}>
            <Star color="yellow" /><Star  />
            </div>


            
        </div>
    );
}

export default review;