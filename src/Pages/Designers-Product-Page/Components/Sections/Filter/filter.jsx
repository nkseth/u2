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
import { useSelector } from "react-redux";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function Filter(props) {
  // const { filters } = useSelector((state) => state.root.filterCategory);
  console.log(props.filters);
  const { filterProduct, applyFilter } = props;
  const [isCategory, setIsCategory] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [colorFilter, setColor] = useState([]);
  const [discountFilter, setDiscount] = useState([]);
  const [fabricFilter, setFabric] = useState([]);
  const [sizeFilter, setSize] = useState([]);
  const [sleeveLength, setSleeveLength] = useState([]);
  const [length, setLength] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabViewPro = useMediaQuery("(max-width:835px)");

  const setFilters = async (filters) => {
    setIsLoading(true);
    console.log(filters);
    const {
      price_range,
      color,
      discount,
      fabric,
      size,
      sleevs_length,
      length,
    } = filters;
    setPriceRange(price_range);
    setColor(color);
    setDiscount(discount);
    setFabric(fabric);
    setSleeveLength(sleevs_length);
    setLength(length);
    setSize(size);
    setIsLoading(false);
  };

  console.log(
    "price",
    priceRange,
    colorFilter,
    discountFilter,
    fabricFilter,
    sizeFilter
  );
  const [selectedFilter, setSelectedFilter] = useState({
    categories: "All categories",
    price: priceRange[0]?.value,
    itemType: "All items",
    color: colorFilter[0]?.value,
    discount: discountFilter[0]?.value,
    fabric: fabricFilter[0]?.value,
    size: sizeFilter[0]?.value,
    sleeveLength: sleeveLength[0]?.value,
    length: length[0]?.value,
    design: "New",
    shopByOccasion: "New",
  });
  const handleFilterChange = (filterName, value) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  useEffect(() => {
    const setAllFilters = async () => {
      await setFilters(props.filters);
    };
    setAllFilters();
  }, []);

  return (
    <div className={styles.container}>
      {!tabViewPro && (
        <>
          <div className={styles.header}>
            <span>Filter</span>
            <span>
              <Link to="/product-description">Clear all</Link>
            </span>
          </div>
        </>
      )}

      {isCategory ? (
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={styles.accordionSummary}
          >
            <div className={styles.accordionSummaryInnerDiv}>
              <span>Categories</span>
              <span>{selectedFilter.categories}</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetials}>
            <RadioGroup
              aria-label="Categories"
              onChange={(e) => filterProduct("price", e.target.value)}
              value={selectedFilter.categories}
            >
              <FormControlLabel
                value="All categories"
                checked={selectedFilter.categories === "All categories"}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>All categories</p>}
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      ) : (
        ""
      )}
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Price</span>
            <span>
              {!isLoading
                ? priceRange?.length > 0
                  ? priceRange[0].name
                  : ""
                : ""}
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="price"
            onChange={(e) => filterProduct("price", e.target.value)}
            value={selectedFilter?.price}
          >
            {!isLoading && priceRange?.length > 0 ? (
              priceRange?.map(({ value, name }, key) => (
                <FormControlLabel
                  value={value}
                  checked={selectedFilter?.price === value}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>{name}</p>}
                />
              ))
            ) : (
              <span>Loading...</span>
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Item type</span>
            <span>{selectedFilter.itemType}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Item type"
            onChange={(e) => filterProduct("itemType", e.target.value)}
            value={selectedFilter.itemType}
          >
            <FormControlLabel
              value="Readymade"
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Readymade</p>}
            />
            <FormControlLabel
              value="Customise"
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Customise</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Colour</span>
            <span>{selectedFilter.color}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Colour"
            onChange={(e) => filterProduct("color", e.target.value)}
            value={selectedFilter.color}
          >
            {!isLoading ? (
              colorFilter?.map((value, key) => (
                <FormControlLabel
                  value={value.id}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>
                      {value.value[0].toUpperCase() + value.value.slice(1)}
                    </p>
                  }
                />
              ))
            ) : (
              <span>Loading...</span>
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Discount</span>
            <span>{selectedFilter.discount}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Discount"
            onChange={(e) => filterProduct("discount", e.target.value)}
            value={selectedFilter.itemType}
          >
            {!isLoading ? (
              discountFilter?.map((value, key) => (
                <FormControlLabel
                  value={value.discount}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>{value.discount}%</p>
                  }
                />
              ))
            ) : (
              <span>Loading...</span>
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Fabric</span>
            <span>{selectedFilter.fabric}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Fabric"
            onChange={(e) => filterProduct("fabric", e.target.value)}
            value={selectedFilter.fabric}
          >
            {!isLoading ? (
              fabricFilter?.map((value, key) => (
                <FormControlLabel
                  value={value.id}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>{value.value}</p>
                  }
                />
              ))
            ) : (
              <span>Loading...</span>
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Size</span>
            <span>{selectedFilter.size}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Size"
            onChange={(e) => filterProduct("size", e.target.value)}
            value={selectedFilter.size}
          >
            {!isLoading ? (
              sizeFilter?.map((value, key) => (
                <FormControlLabel
                  value={value.id}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>{value.value}</p>
                  }
                />
              ))
            ) : (
              <span>Loading...</span>
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Sleev Length</span>
            <span>{selectedFilter.sleevLength}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Sleeve Length"
            onChange={(e) => handleFilterChange("sleeveLength", e.target.value)}
            value={selectedFilter.sleeveLength}
          >
            {sleeveLength.map(({ value, attr_value_id }) => (
              <FormControlLabel
                key={attr_value_id}
                value={value}
                checked={selectedFilter.sleeveLength === value}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Length</span>
            <span>{selectedFilter.length}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Length"
            onChange={(e) => handleFilterChange("length", e.target.value)}
            value={selectedFilter.length}
          >
            {length.map(({ value, attr_value_id }) => (
              <FormControlLabel
                key={attr_value_id}
                value={value}
                checked={selectedFilter.length === value}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Design</span>
            <span>{selectedFilter.design}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Design"
            onChange={(e) => handleFilterChange("design", e.target.value)}
            value={selectedFilter.design}
          >
            <FormControlLabel
              value="New"
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
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Shop by occasion</span>
            <span>{selectedFilter.shopByOccasion}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label="Shop by occasion"
            onChange={(e) =>
              handleFilterChange("shopByOccasion", e.target.value)
            }
            value={selectedFilter.shopByOccasion}
          >
            <FormControlLabel
              value="New"
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
