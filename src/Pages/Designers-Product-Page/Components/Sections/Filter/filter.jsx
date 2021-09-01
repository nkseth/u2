import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumb from "../../../../../utils/Breadcrumb/breadcrumb";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./filter.module.scss";
import { style } from "@material-ui/system";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

export default function Filter(props) {
  const { filterProduct, applyFilter } = props
  const [isCategory, setIsCategory] = useState(false)
  const [priceRange, setPriceRange] = useState([])
  const [colorFilter, setColor] = useState([])
  const [discountFilter, setDiscount] = useState([])
  const [fabricFilter, setFabric] = useState([])
  const [sizeFilter, setSize] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const tabViewPro = useMediaQuery("(max-width:835px)");
  const [selectedFilter, setSelectedFilter] = useState({
    categories: "All categories",
    price: "₹3000 to ₹6,000",
    itemType: "All items",
    color: "Brown",
    discount: "50%",
    fabric: "All categories",
    size: "M",
    sleevLength: "100m",
    length: "60",
    design: "New",
    shopByOccasion: "New",
  });

  const setFilters = async (props) => {
    setIsLoading(true)
    const { price_range, color, discount, fabric, size } = props.filter
    await setPriceRange(price_range)
    await setColor(color)
    await setDiscount(discount)
    await setFabric(fabric)
    await setSize(size)
    await setIsLoading(false)
  }

  const handleFilterChange = (filterName, value) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  useEffect(async () => {
    if (props.filter) {
      await setFilters(props)
    }
  }, [])
  console.log(applyFilter)
  return (
    <div className={styles.container}>
      {!tabViewPro && (
        <>

          <div className={styles.header}>
            <span>Filter</span>
            <span>
              <Link to='/product-description'>Clear all</Link>
            </span>
          </div>
        </>
      )}

      {isCategory ?
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            className={styles.accordionSummary}
          >
            <div className={styles.accordionSummaryInnerDiv}>
              <span>Categories</span>
              <span>{selectedFilter.categories}</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetials}>
            <RadioGroup
              aria-label='Categories'
              onChange={(e) => filterProduct("price", e.target.value)}
              value={selectedFilter.categories}
            >

              <FormControlLabel
                value='All categories'
                checked={selectedFilter.categories === "All categories"}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>All categories</p>}
              />

            </RadioGroup>
          </AccordionDetails>
        </Accordion>
        : ''}
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Price</span>
            <span>{!isLoading ? priceRange.length > 0 ? priceRange[0].name : '' : ''}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='price'
            onChange={(e) => filterProduct("price", e.target.value)}
            value={selectedFilter.price}
          >

            {!isLoading ? priceRange.map((value, key) => (
              <FormControlLabel
                value={value.value}
                checked={key === 0}
                control={<CustomRadio />}
                label={
                  <p className={styles.radioBtnsLabels}>
                    {value.name}
                  </p>
                }
              />
            )) : <span>Loading...</span>}

          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Item type</span>
            <span>{selectedFilter.itemType}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Item type'
            onChange={(e) => filterProduct("itemType", e.target.value)}
            value={selectedFilter.itemType}
          >
            <FormControlLabel
              value='Readymade'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Readymade</p>}
            />
            <FormControlLabel
              value='Customise'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Customise</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Colour</span>
            <span>{selectedFilter.color}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Colour'
            onChange={(e) => filterProduct("color", e.target.value)}
            value={selectedFilter.color}
          >
            {!isLoading ? colorFilter.map((value, key) => (
              <FormControlLabel
                value={value.id}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value.value[0].toUpperCase() + value.value.slice(1)}</p>}
              />
            )) : <span>Loading...</span>}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Discount</span>
            <span>{selectedFilter.discount}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Discount'
            onChange={(e) => filterProduct("discount", e.target.value)}
            value={selectedFilter.itemType}
          >
            {!isLoading ? discountFilter.map((value, key) => (
              <FormControlLabel
                value={value.discount}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value.discount}%</p>}
              />
            )) : <span>Loading...</span>}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Fabric</span>
            <span>{selectedFilter.fabric}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Fabric'
            onChange={(e) => filterProduct("fabric", e.target.value)}
            value={selectedFilter.fabric}
          >
            {!isLoading ? fabricFilter.map((value, key) => (
              <FormControlLabel
                value={value.id}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value.value}</p>}
              />
            )) : <span>Loading...</span>}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Size</span>
            <span>{selectedFilter.size}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Size'
            onChange={(e) => filterProduct("size", e.target.value)}
            value={selectedFilter.size}
          >
            {!isLoading ? sizeFilter.map((value, key) => (
              <FormControlLabel
                value={value.id}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value.value}</p>}
              />
            )) : <span>Loading...</span>}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Sleev Length</span>
            <span>{selectedFilter.sleevLength}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Sleev Length'
            onChange={(e) => handleFilterChange("sleevLength", e.target.value)}
            value={selectedFilter.sleevLength}
          >
            <FormControlLabel
              value='100m'
              checked={selectedFilter.sleevLength === "100m"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>100m</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Length</span>
            <span>{selectedFilter.length}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Length'
            onChange={(e) => handleFilterChange("length", e.target.value)}
            value={selectedFilter.length}
          >
            <FormControlLabel
              value='60'
              checked={selectedFilter.length === "60"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>60</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Design</span>
            <span>{selectedFilter.design}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Design'
            onChange={(e) => handleFilterChange("design", e.target.value)}
            value={selectedFilter.design}
          >
            <FormControlLabel
              value='New'
              checked={selectedFilter.design === "New"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>New</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Shop by occasion</span>
            <span>{selectedFilter.shopByOccasion}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Shop by occasion'
            onChange={(e) =>
              handleFilterChange("shopByOccasion", e.target.value)
            }
            value={selectedFilter.shopByOccasion}
          >
            <FormControlLabel
              value='New'
              checked={selectedFilter.shopByOccasion === "New"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>New</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
