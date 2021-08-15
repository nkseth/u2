import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Star} from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    backgroundColor:'#ffffff',
    border:'1px solid #857250',
    fontFamily:"DM Sans",
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
    width:'100%',
    height:"48px",
    color:"white",
    fontSize:"12px"
    
  },
  time:{
    color:"red",
    float:"right",
    fontSize:"12px"
  },
  size:{
    fontSize:"12px"
  },
  que:{
    fontFamily:"DM Serif Display",
    fontSize:"16px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2" className= {classes.que} >
         What is your favourite designer brand?
        </Typography>
        <Typography display="inline" variant="body2" component="p" className={classes.size} >
     
        <br />
         45 votes
        </Typography>
        <Typography display="inline" variant="body2" className={classes.time}  >
          25 min left        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn} size="small"  ><Star />500 Voucher</Button>
      </CardActions>
    </Card>
  );
}