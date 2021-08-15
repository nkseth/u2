import React from 'react';
import Image from '../../../../../../Images/image/Product.png'
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    btn:{
        border: "1px solid #857250",
        fontSize:"11px",
         color:"#857250",
          borderRadius:"15px",
          float:"right",
         marginRight:25,
    },
})

function Card(props) {
    const styles = useStyles()
    return (
        <div>
            <img src={Image} width="263px"  height="263px" ></img>
            <div style={{display:"inline-block"}}> 
            <h5 style={{fontFamily:"DM Sans",fontSize:"16px",fontWeight:"bold", color:"#0a0a0a"}}>Benstokes</h5>
            <h5 style={{fontFamily:"DM Sans",fontSize:"14px",fontWeight:"bold", color:"#857250"}}>$599</h5></div>
            <Button className={styles.btn}>Add</Button>
            
        </div>
    );
}

export default Card;