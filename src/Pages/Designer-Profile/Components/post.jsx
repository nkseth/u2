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
            <div style={{marginTop:100,}}><img src={Image1} width="95%"></img></div> 
            <div style={{display:"inline",marginTop:100}}><FavoriteBorderIcon style={{ color: "#857250"}}  /><MessageIcon style={{ color: "#857250"}} /> <SendIcon style={{ color: "#857250"}}  /></div>
            <p style={{fontFamily:"DM Sans", fontSize:"12px", fontWeight:500,}}>500 Likes</p>
            <p style={{fontFamily:"DM Sans", fontSize:"16px", fontWeight:"bold",}}>Title of Post</p>
            <p style={{fontFamily:"DM Sans", fontSize:"16px", color:"#3b3b3b",}}>lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard see more </p>
        </div>
    );
}

export default post;