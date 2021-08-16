import { useState, useEffect } from 'react';
import axios from '../../utils/axios.config.js';

import DesignerWear from "./Components/DesignerWear";
import TopCategory from "./Components/TopCategory";
import Trending from "./Components/Trending";
import PopularCategory from "./Components/PopularCategory";
import SuitWear from "./Components/SuitWear";
import Top_Designer from "./Components/Top_Designer";
import Collabrate_With_US from "./Components/Collabrate_With_US";
import Season_Offers from "./Components/Season_Offers";
import Talk_With_Stylish from "./Components/Talk_With_Stylish";
import HandMade_Clothes from "./Components/HandMade_Clothes";
import Measurement_Simulation from "./Components/Measurement_Simulation";
import Customer_Review from "./Components/Customer_Review";
import Container from "../../utils/Container/container";

// I use Apple Pie Order To Readable Code -neerajcodes
const DesignerHome = () => {

  const[groupOne,setGroupOne] = useState()
  const[groupTwo,setGroupTwo] = useState()
  const[slider,setSlider] = useState({})
  const[trending,setTrending] = useState({})
  const[designer,setDesigner] = useState({})
  const[suitWear,setSuitWear] = useState({})
  const[handMade,setHandMade] = useState({})
  const[isLoading,setIsloading] = useState(false)

  const getSlider= async() =>{                 
    await setIsloading(true)              
    var result = await axios.get('/getSlider').then((res)=>{
                        return res.data.data
                      }).catch((error)=>{
                        console.log(error)
                      })       
   
    await setSlider(result)              
    await setIsloading(false)              
  }

  const getGroup = async() =>{
    await setIsloading(true)              
    var result = await axios.get('/getGroups').then((res)=>{
                        return res.data
                      }).catch((error)=>{
                        console.log(error)
                      })       
    var {designer_group_1,designer_group_2} = result

    await setGroupOne(designer_group_1)          
    await setGroupTwo(designer_group_2)          
    await setIsloading(false)              
  }

  const getThemeOptions = async() =>{
    await setIsloading(true)              
    var result = await axios.post('/getThemeOption',{type:'designer_home'}).then((res)=>{
                        return res.data
                      }).catch((error)=>{
                        console.log(error)
                      })       
   // result
   const{
          trending_categories,
          hand_made_cloth,
          suit_wear
        } = result 

    await setTrending(trending_categories)      
    await setSuitWear(suit_wear)      
    await setHandMade(hand_made_cloth)      

  }

  const getThemeOptionsDesigner = async() =>{
    await setIsloading(true)              
    var result = await axios.post('/getThemeOptionDesigner',{type:'designer_home'}).then((res)=>{
                        return res.data
                      }).catch((error)=>{
                        console.log(error)
                      })       
   // result
   const{top_designer} = result
    await setDesigner(top_designer)      
  }

  useEffect(async ()=>{
    await getGroup()
    await getSlider()
    await getThemeOptions()
    await getThemeOptionsDesigner()
    await setIsloading(false)              
  },[])

  return (
    <>
      <Container footerOnAllView>
     
        <>
          <DesignerWear slider={slider}/>
          <TopCategory />
          <Trending trending = {trending}/>
          <PopularCategory groupOne={groupOne}/>
          <Top_Designer designer={designer}/>
          <Collabrate_With_US />
          <Season_Offers groupTwo={groupTwo} />
          <SuitWear suitWear={suitWear} />
          <HandMade_Clothes handMade = {handMade}/>
        </>  
        
        
        <Talk_With_Stylish />
        <Measurement_Simulation />
        <Customer_Review />
      </Container>
    </>
  );
};

export default DesignerHome;
