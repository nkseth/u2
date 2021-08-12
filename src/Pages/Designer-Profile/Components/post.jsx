import React from 'react';
import Image from './../../../Images/image/Product.png'
import Image1 from './../../../Images/image/Man.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import SendIcon from '@material-ui/icons/Send';
function post(props) {
    return (
        <div style={{borderRadius:"5px",padding:10,backgroundColor:"#ffffff"}}>
             <img style={{borderRadius:"100%", width:"20%", float:"left", marginLeft:30,marginTop:40 }} src={Image} width="50px" height="50px"></img>
            <div style={{marginTop:30}}><img src={Image1} width="95%"></img></div> 
             
        </div>
    );
}

export default post;