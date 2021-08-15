import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Star} from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Box, Container, Icon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor:'#ffffff',
    boxShadow: "14px 10px 31px rgba(0, 0, 0, 0.08)",
    fontFamily:"DM Sans",
    padding:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontFamily:"DM Sans",
    fontWeight:"bold",
    fontSize:"16px"
  },
  btn:{
    backgroundColor:'#857250',
   float:"right",
    color:"white",
    fontSize:"12px"


  },
  time:{
    color:"red",
    marginLeft:10,
    fontSize:"12px"
  },
  que:{
    fontFamily:"DM Serif Display",
    fontSize:"28px"
  },
  box:{
    paddingTop:50
    
  },
  vote:{
    fontSize:"12px"
  }

});

export default function ResultCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2" className= {classes.que}>
         What is your favourite designer brand?
        </Typography>
        <Typography style={{fontSize:"12px"}} display="inline" variant="body2" component="p">
        <br />
         45 votes
        </Typography>
        <Typography display="inline" variant="body2" className={classes.time}>
          25 min left        </Typography>
          <Button className={classes.btn} size="small"><Star size="small" />500 Voucher</Button>
      
          <Box width="100%" className={classes.box}>
      <Box width="25%" boxSizing bgcolor="grey.300"  p={1} my={0.5}>Width 25%
       </Box>
  
     
      <Box width="25%" boxSizing bgcolor="grey.300" p={1} my={0.5}>Width 25%
       </Box>
    
     
      <Box width="25%" boxSizing bgcolor="grey.300"  p={1} my={0.5}>Width 25%
       </Box>
    
      <Box width="25%" boxSizing bgcolor="grey.300" p={1} my={0.5}>Width 25%
       </Box>
      </Box>
      </CardContent>
   
    </Card>
  );
}