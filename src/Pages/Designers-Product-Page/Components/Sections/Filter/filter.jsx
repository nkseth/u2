import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
  Slider,
  TextField,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./filter.module.scss";
import { style } from "@material-ui/system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../../../Redux/actions/products";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterProduct, filters } = props;
  const [isCategory, setIsCategory] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [colorFilter, setColor] = useState([]);
  const [discountFilter, setDiscount] = useState([]);
  const [fabricFilter, setFabric] = useState([]);
  const [sizeFilter, setSize] = useState([]);
  const [sleeveLength, setSleeveLength] = useState([]);
  const [length, setLength] = useState([]);
  const [occasionsFilter, setOccasionsFilter] = useState([]);
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
      occasions,
    } = filters;
    setPriceRange(price_range);
    setColor(color);
    setDiscount(discount);
    setFabric(fabric);
    setSleeveLength(sleevs_length);
    setLength(length);
    setSize(size);
    setOccasionsFilter(occasions);
    setIsLoading(false);
  };

  const [selectedFilter, setSelectedFilter] = useState({
    // categories: "All categories",
    price: filters?.price_range[0].name || 0,
    itemType: "",
    color: filters?.color[0]?.value || null,
    discount: filters?.discount[0]?.discount || null,
    fabric: filters?.fabric[0]?.value || null,
    size: filters?.size[0]?.value || null,
    sleeveLength: filters?.sleevs_length[0]?.value || null,
    length: filters?.length[0]?.value || null,
    // design: "New",
    shopByOccasion: filters?.occasions[0]?.value,
  });

  // const [selectedFilter, setSelectedFilter] = useState({
  //   categories: "Select Category",
  //   price: "Select Price",
  //   itemType: "Select Item Type",
  //   color: "Select Color",
  //   discount: "Select Discount",
  //   fabric: "Select Fabric",
  //   size: "Select Size",
  //   sleeveLength: "Select Sleeve Length",
  //   length: "Select Length",
  //   design: "Select Design",
  //   shopByOccasion: "Shop By Occasion",
  // });

  const clearFilter = () => {
    setSelectedFilter({
      // categories: "All categories",
      price: filters?.price_range[0].name,
      itemType: "readymade",
      color: filters?.color[0]?.value,
      discount: filters?.discount[0]?.discount,
      fabric: filters?.fabric[0]?.value,
      size: filters?.size[0]?.value,
      sleeveLength: filters?.sleevs_length[0]?.value,
      length: filters?.length[0]?.value,
      // design: "New",
      shopByOccasion: filters?.occasions[0]?.value,
    });
  };
  const handleFilterChange = (filterName, value) => {
    console.log(filterName, value);
    setSelectedFilter((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));

    // if (filterName === "discount") filterProduct({ range: selectedFilter.price });
    // if (filterName === "size") filterProduct({ range: selectedFilter.price });
    // if (filterName === "sleeveLength") filterProduct({ range: selectedFilter.price });
    // if (filterName === "length") filterProduct({ range: selectedFilter.price });

    // console.log(selectedFilter[filterName]);
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
    const newShopByOccasion = occasionsFilter.filter(
      ({ value }) => value === selectedFilter.shopByOccasion
    )[0];

    if (filterName === "price") filterProduct({ range: selectedFilter.price });
    if (filterName === "itemType") {
      if (value === "customize") filterProduct({ product_type: "customize" });
      else filterProduct({ product_type: "readymade" });
    }

    if (filterName === "discount") {
      console.log(filterName, value);
      filterProduct({ discount: selectedFilter.discount });
    }

    if (filterName === "color") {
      console.log(filterName, value);
      filterProduct({
        attributeValue_id: `${newColor.attr_value_id}`,
        attribute_id: `${newColor.attribute_id}`,
      });
    }

    if (filterName === "fabric") {
      console.log(filterName, value);
      filterProduct({
        attributeValue_id: `${newFabric.attr_value_id}`,
        attribute_id: `${newFabric.attribute_id}`,
      });
    }

    if (filterName === "size") {
      console.log(filterName, value);
      filterProduct({
        attributeValue_id: `${newSize.attr_value_id}`,
        attribute_id: `${newSize.attribute_id}`,
      });
    }

    if (filterName === "sleeveLength") {
      console.log(filterName, value);
      filterProduct({
        attributeValue_id: `${newLength.attr_value_id}`,
        attribute_id: `${newLength.attribute_id}`,
      });
    }
    if (filterName === "length") {
      console.log(filterName, value);
      filterProduct({
        attributeValue_id: `${newLength.attr_value_id}`,
        attribute_id: `${newLength.attribute_id}`,
      });
    }
    if (filterName === "shopByOccasion") {
      console.log(filterName, value);
      history.push(`/designers-product-page/${props.type}/${value}`);
      dispatch(getProducts(props.type, { slug: value }));
      // filterProduct({
      //   attributeValue_id: `${newShopByOccasion.attr_value_id}`,
      //   attribute_id: `${newShopByOccasion.attribute_id}`,
      // });
    }
    // const newSleeveLength = sleeveLength.filter(
    //   ({ value }) => value === selectedFilter.sleeveLength
    // )[0];
    // console.log(selectedFilter.itemType);
    // if (selectedFilter.itemType.toLowerCase() === "customize") {
    //   const filterDataValue = {
    //     attributeValue_id: `${newColor.attr_value_id},${newFabric.attr_value_id},${newLength.attr_value_id},${newSize.attr_value_id},${newSleeveLength.attr_value_id}`,
    //     attribute_id: `${newColor.attribute_id},${newFabric.attribute_id},${newLength.attribute_id},${newSize.attribute_id},${newSleeveLength.attribute_id}`,
    //     // range: selectedFilter.price,
    //     discount: selectedFilter.discount,
    //     product_type: selectedFilter.itemType,
    //     // ...selectedFilter,
    //     // product_type: selectedFilter.itemType.toLowerCase(),
    //   };
    //   filterProduct(filterDataValue);
    // } else {
    //   const filterDataValue = {
    //     attributeValue_id: `${newColor.attr_value_id},${newFabric.attr_value_id},${newLength.attr_value_id},${newSize.attr_value_id},${newSleeveLength.attr_value_id}`,
    //     attribute_id: `${newColor.attribute_id},${newFabric.attribute_id},${newLength.attribute_id},${newSize.attribute_id},${newSleeveLength.attribute_id}`,
    //     range: selectedFilter.price,
    //     discount: selectedFilter.discount,
    //   };
    //   filterProduct(filterDataValue);
    // }
  };

  useEffect(() => {
    const setAllFilters = async () => {
      await setFilters(filters);
    };
    setAllFilters();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState([0, 19090.8]);

  return (
    <div className={styles.container}>
      {!tabViewPro && (
        <>
          <div className={styles.header}>
            <span>Filter</span>
            <span style={{ cursor: "pointer" }} onClick={clearFilter}>
              Clear all
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
            <span>{!isLoading && "Select price range"}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
          style={{ flexDirection: "column" }}
        >
          <Slider
            style={{ color: "#6A5B40" }}
            value={value}
            min={0}
            step={1}
            max={19090}
            // valueLabelFormat={numFormatter}
            marks={priceRange}
            // scale={scaleValues}
            onChange={handleChange}
            // valueLabelDisplay='auto'
            // aria-labelledby='non-linear-slider'
          />
          <br />
          <div className={styles.price}>
            <div style={{ position: "relative" }}>
              <p>From</p>
              <input type="text" value={value[0]} />
              <span>₹</span>
            </div>
            <div style={{ position: "relative" }}>
              <p>To</p>
              <input type="text" value={value[1]} />
              <span>₹</span>
            </div>
          </div>

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
              value="readymade"
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Readymade</p>}
            />
            <FormControlLabel
              value="customize"
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Customize</p>}
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
            {occasionsFilter.map(({ name, slug, id }) => (
              <FormControlLabel
                key={id}
                value={slug}
                checked={selectedFilter.shopByOccasion === "New"}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{name}</p>}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
