import { useState, useEffect } from "react";
import axios from '../../utils/axios.config.js';
import { Grid, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Filter from "./Components/Sections/Filter/filter";
import HeroSection from "./Components/Sections/HeroSection/heroSection";
import styles from "./designer-product-page.module.scss";
import ProductsSection from "./Components/Sections/Products/products";

function DesignerProductPage(props) {
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const[products,setProduct] = useState({})
  const[category,setCategory] = useState({})
  const[Filters,setFilters] = useState()
  const[cateLoading,setCateLoading] = useState(true)
  const[proLoading,setProLoading] = useState(true)
  const[filterLoading,setFilterLoading] = useState(true)
  const[applyFilter,setApplyFilter] = useState({
    category:'',
    price:'',
    itemType:'',
    color:'',
    discount:'',
    fabric:'',
    size:''

  })

  const getProducts = async(categorySlug) =>{
    await setCateLoading(true)
    // await setProLoading(true)

    var products = await axios.post('/getProductByCategory',{category:categorySlug}).then((result)=>{
                      return result.data
                    }).catch((error)=>{
                      console.log(error)
                    })  

    const{product,category} = products
    
    await setProduct(product) 
    await setCategory(category) 

    await setCateLoading(false)
    await setProLoading(false)
  }

  const getFilter = async() => {
    var result = await axios.post('/filterList').then((res)=>{
                    return res.data
                  }).catch((error)=>{
                    console.log(error)
                  })

    await setFilters(result)
    await setFilterLoading(false)
  }

  const filterProduct=async (type,value)=>{

    if(type==='price'){
      setApplyFilter({...applyFilter, price:value})
    }
    if(type==='itemType'){
      setApplyFilter({...applyFilter,itemType:value})
    }
    if(type==='color'){
      setApplyFilter({...applyFilter,color:value})
    }
    if(type==='discount'){
      setApplyFilter({...applyFilter,discount:value})
    }
    if(type==='fabric'){
      setApplyFilter({...applyFilter,fabric:value})
    }
    if(type==='size'){
      setApplyFilter({...applyFilter,size:value})
    }
  }

  useEffect(async ()=>{
    await getProducts(props.match.params.category);
    await getFilter();
  },[])

  return (
    <Container bottomDivider footerOnAllView>
      {!tabViewPro && (
        <CustomSection>
          <Breadcrumb
            path='Designers Home / Men /'
            activePath='Designer Profile'
          />
        </CustomSection>
      )}

      <div className={styles.container}>
        {!tabViewPro && (
          <div className={styles.firstSection}>
            {!filterLoading ?
              <Filter 
                filter = {Filters}
                applyFilter = {applyFilter}
                filterProduct={filterProduct}
              />
            :<span>Loading...</span>}
          </div>
        )}

        <div className={styles.secondSection}>
          {cateLoading ? <span>Loading...</span>:
            <HeroSection 
              category={category}
            />
          }
          <div style={{ padding: "1rem 1rem 5rem" }}>
          {proLoading ? <span>Loading...</span>:
            <ProductsSection 
              products={products}
            />
          }
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DesignerProductPage;