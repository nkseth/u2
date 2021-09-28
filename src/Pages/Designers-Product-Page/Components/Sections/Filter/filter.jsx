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

  const { filterProduct, filters } = props;
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

  const [selectedFilter, setSelectedFilter] = useState({
    categories: "All categories",
    price: filters?.price_range[0]?.value || 0,
    itemType: "All items",
    color: filters?.color[0]?.value,
    discount: filters?.discount[0]?.discount,
    fabric: filters?.fabric[0]?.value,
    size: filters?.size[0]?.value,
    sleeveLength: filters?.sleevs_length[0]?.value,
    length: filters?.length[0]?.value,
    design: "New",
    shopByOccasion: "New",
  });
  const handleFilterChange = (filterName, value) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));

    console.log(selectedFilter);
    const newColor = colorFilter.filter(
      ({ value }) => value === selectedFilter.color
    )[0];
    const newFabric = fabricFilter.filter(
      ({ value }) => value === selectedFilter.fabric
    )[0];
    const newLength = length.filter(
      ({ value }) => value === selectedFilter.length
    )[0];
    const newSize = sizeFilter.filter(
      ({ value }) => value === selectedFilter.size
    )[0];

    const newSleeveLength = sleeveLength.filter(
      ({ value }) => value === selectedFilter.sleeveLength
    )[0];
    console.log(selectedFilter.itemType);
    if (selectedFilter.itemType === "Customise") {
      filterProduct({
        attributeValue_id: `${newColor.attr_value_id},${newFabric.attr_value_id},${newLength.attr_value_id},${newSize.attr_value_id},${newSleeveLength.attr_value_id}`,
        attribute_id: `${newColor.attribute_id},${newFabric.attribute_id},${newLength.attribute_id},${newSize.attribute_id},${newSleeveLength.attribute_id}`,
        range: selectedFilter.price,
        discount: selectedFilter.discount,
        product_type: selectedFilter.itemType.toLowerCase(),
      });
    } else {
      filterProduct({
        attributeValue_id: `${newColor.attr_value_id},${newFabric.attr_value_id},${newLength.attr_value_id},${newSize.attr_value_id},${newSleeveLength.attr_value_id}`,
        attribute_id: `${newColor.attribute_id},${newFabric.attribute_id},${newLength.attribute_id},${newSize.attribute_id},${newSleeveLength.attribute_id}`,
        range: selectedFilter.price,
        discount: selectedFilter.discount,
      });
    }
  };

  useEffect(() => {
    const setAllFilters = async () => {
      await setFilters(filters);
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
              onChange={(e) => handleFilterChange("price", e.target.value)}
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
            onChange={(e) => handleFilterChange("price", e.target.value)}
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
            onChange={(e) => handleFilterChange("itemType", e.target.value)}
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
            onChange={(e) => handleFilterChange("color", e.target.value)}
            value={selectedFilter.color}
          >
            {!isLoading ? (
              colorFilter?.map(({ value }) => (
                <FormControlLabel
                  value={value}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>
                      {value.toUpperCase()}
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
            onChange={(e) => handleFilterChange("discount", e.target.value)}
            value={selectedFilter.discount}
          >
            {!isLoading ? (
              discountFilter?.map(({ discount }, key) => (
                <FormControlLabel
                  value={discount}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>{discount}%</p>}
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
            onChange={(e) => handleFilterChange("fabric", e.target.value)}
            value={selectedFilter.fabric}
          >
            {!isLoading ? (
              fabricFilter?.map(({ value }, key) => (
                <FormControlLabel
                  value={value}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>{value}</p>}
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
            onChange={(e) => handleFilterChange("size", e.target.value)}
            value={selectedFilter.size}
          >
            {!isLoading ? (
              sizeFilter?.map(({ value }, key) => (
                <FormControlLabel
                  value={value}
                  control={<CustomRadio />}
                  label={
                    <p className={styles.radioBtnsLabels}>
                      {value.toUpperCase()}
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
