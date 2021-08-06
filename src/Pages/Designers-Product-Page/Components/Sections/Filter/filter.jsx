import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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

export default function Filter() {
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

  const handleFilterChange = (filterName, value) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };
  return (
    <div className={styles.container}>
      {!tabViewPro && (
        <div className={styles.header}>
          <span>Filter</span>
          <span>
            <Link to='/product-description'>Clear all</Link>
          </span>
        </div>
      )}

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
            onChange={(e) => handleFilterChange("price", e.target.value)}
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
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Price</span>
            <span>{selectedFilter.price}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='price'
            onChange={(e) => handleFilterChange("price", e.target.value)}
            value={selectedFilter.price}
          >
            <FormControlLabel
              value='₹3000 to ₹6,000'
              checked={selectedFilter.price === "₹3000 to ₹6,000"}
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>
                  ₹3000 to ₹6,000&nbsp;<span>(900)</span>
                </p>
              }
            />
            <FormControlLabel
              checked={selectedFilter.price === "₹10,000 to ₹15,000"}
              value='₹10,000 to ₹15,000'
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>
                  ₹10,000 to ₹15,000&nbsp;<span>(300)</span>
                </p>
              }
            />
            <FormControlLabel
              checked={selectedFilter.price === "₹20,000 to ₹30,000"}
              value='₹20,000 to ₹30,000'
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>
                  ₹20,000 to ₹30,000&nbsp;<span>(100)</span>
                </p>
              }
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
            <span>Item type</span>
            <span>{selectedFilter.itemType}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Item type'
            onChange={(e) => handleFilterChange("itemType", e.target.value)}
            value={selectedFilter.itemType}
          >
            <FormControlLabel
              value='All Items'
              checked={selectedFilter.price === "₹3000 to ₹6,000"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>All Items</p>}
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
            onChange={(e) => handleFilterChange("color", e.target.value)}
            value={selectedFilter.color}
          >
            <FormControlLabel
              value='Brown'
              checked={selectedFilter.color === "Brown"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Brown</p>}
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
            <span>Discount</span>
            <span>{selectedFilter.discount}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Discount'
            onChange={(e) => handleFilterChange("discount", e.target.value)}
            value={selectedFilter.itemType}
          >
            <FormControlLabel
              value='50%'
              checked={selectedFilter.discount === "50%"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>50%</p>}
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
            <span>Fabric</span>
            <span>{selectedFilter.fabric}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Fabric'
            onChange={(e) => handleFilterChange("fabric", e.target.value)}
            value={selectedFilter.fabric}
          >
            <FormControlLabel
              value='All categories'
              checked={selectedFilter.fabric === "All categories"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>All categories</p>}
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
            <span>Size</span>
            <span>{selectedFilter.size}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Size'
            onChange={(e) => handleFilterChange("size", e.target.value)}
            value={selectedFilter.size}
          >
            <FormControlLabel
              value='M'
              checked={selectedFilter.size === "M"}
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>M</p>}
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
