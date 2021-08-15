import React from 'react';
import Header from "../../utils/Header/header";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import { Grid, Typography, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '../../utils/Custom Divider/divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    que:{
        fontFamily:"DM Sans",
        fontWeight:"bold",
        fontSize:"35px"
    },
    radio:{      
fontFamily: "DM Sans",
fontweight: 500,
fontSize:"25px",
color: "#6C6C6C"
    },
    radioText:{
      fontSize:"25px",
    },

    btn:{
        backgroundColor:'#857250',
        height:"43px",
        color:"white",
        marginTop:40,
        fontSize:"16px"
    }

})
function PollQuestion(props) {
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const classes = useStyles();
  const [value, setValue] = React.useState('Raymond');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <div>
            <Header> </Header>
            <div style={{margin:"auto", width:"90%", marginTop:0, }}> <Divider></Divider></div>
            <CustomSection>
          <Breadcrumb
            path='Home/Explore /'
            activePath='Polls'
          />
        </CustomSection>
        {
          !tabViewPro ? 
          <div style={{ marginLeft:"7%", fontSize:"28px", marginTop:30,marginRight:"5%", fontFamily:"DM Serif Display"}}>
                <h1 style={{fontSize:"28px"}} >Polls</h1>
                <div style={{margin:"40px auto"}}>
                <Divider></Divider>
                </div>
                <Typography className={classes.que} >What is your favourite designer brand?</Typography>
            </div>
            :
            <div style={{ marginLeft:"10%", marginTop:30,marginRight:20, fontFamily:"DM Serif Display"}}>
            <h2>Polls</h2>
            <div style={{margin:"20px auto"}}>
                <Divider></Divider>
                </div>
                <Typography className={classes.que} style={{fontSize:"25px"}}>What is your favourite designer brand?</Typography>
        </div>
      }
      <Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"85%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      
     <FormControl component="fieldset">
     
      <RadioGroup aria-label="Designer" name="Designer1" value={value} onChange={handleChange}>
        <FormControlLabel className={classes.radio} value="A.Jack & Jones" control={<Radio classes={{label:classes.radioText}} color="#857250" />} label={<span style={{fontSize:"25px"}}>A.Jack & Jones</span>}/>
        <FormControlLabel className={classes.radio} value="B.Arrow" control={<Radio  color="#857250"  />} label={<span style={{fontSize:"25px"}}>B.Arrow</span>} />
        <FormControlLabel className={classes.radio} value="Raymond" control={<Radio  color="#857250"  />} label={<span style={{fontSize:"25px"}}>Raymond</span>}  />
        <FormControlLabel className={classes.radio} value="Gucci" control={<Radio  color="#857250"  />} label={<span style={{fontSize:"25px"}}>Gucci</span>}  />
      </RadioGroup>
      <Button className={classes.btn}>Submit</Button>
    </FormControl></Grid>
         
            
           
        </div>
    );
}

export default PollQuestion;