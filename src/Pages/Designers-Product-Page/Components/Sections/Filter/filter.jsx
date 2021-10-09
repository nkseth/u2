import React, { useState, useEffect } from "react";
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
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./filter.module.scss";
import { style } from "@material-ui/system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../../../Redux/actions/products";
import {
  clearFilterData,
  storefilterData,
} from "../../../../../Redux/actions/filter-category";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const CustomCheckbox = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Filter(props) {
  const dispatch = useDispatch();
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
  const filterDataList = useSelector((state) => state.root.storefilter);
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
    setIsCategory(true);
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
    categories: "All categories",
    price: filters?.price_range[0].name || 0,
    itemType: "",
    color: filters?.color[0]?.value || null,
    discount: filters?.discount[0]?.discount || null,
    fabric: filters?.fabric[0]?.value || null,
    size: filters?.size[0]?.value || null,
    sleeveLength: filters?.sleevs_length?.value || null,
    // sleeveLength: filters?.sleevs_length[0]?.value || null,
    length: filters?.length[0]?.value || null,
    // design: "New",
    shopByOccasion: filters?.occasions[0]?.value,
  });

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

  useEffect(() => {
    const setAllFilters = async () => {
      await setFilters(filters);
    };
    setAllFilters();
  }, [filters]);

  const showChange = (event, newValue) => {
    setValue(newValue);
    setCheckedPrice(newValue);
  };

  const [value, setValue] = React.useState([0, 19090.8]);

  // * CHECK BOX VALUES *

  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [checkedSleeveLength, setCheckedSleeveLength] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState(value);
  const [checkedItemType, setCheckedItemType] = useState([]);
  const [checkedFabric, setCheckedFabric] = useState([]);
  const [checkedDiscount, setCheckedDiscount] = useState([]);
  const [checkedDesign, setCheckedDesign] = useState([]);
  const [checkedShopOccasion, setCheckedShopOccasion] = useState([]);

  const handleValue = (items, e, item) => {
    let values = [...items];
    const ids = values.map((ele) => ele.id);
    if (e.target.checked) values.push(item);
    else {
      const index = ids.indexOf(item.id);
      values.splice(index, 1);
    }
    return values;
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      handleCheckBoxValues();
    }, 1000);

    return () => clearTimeout(debounce);
  }, [value]);

  const priceInputHandler = (e) => {
    if (e.target.name === "startPrice") {
      if (e.target.value === "") return;
      if (e.target.value < 0)
        return alert("Min price range cannot be less than 0");
      setValue((val) => [e.target.value, val[1]]);
    }
    if (e.target.name === "endPrice") {
      if (e.target.value === "") return;
      if (e.target.value < 1)
        return alert("Max price range cannot be less than 1");
      setValue((val) => [val[0], e.target.value]);
    }
  };

  const sendFilter = (product_type, range) => {
    let attributeValue_id = [],
      attribute_id = [];
    Object.values(filterDataList).map((value, i) => {
      if (value) {
        attributeValue_id.push(value.attributeValue_id);
        attribute_id.push(value.attribute_id);
      }
    });

    if (product_type) {
      if (attributeValue_id.length > 0 && attribute_id.length > 0)
        filterProduct({
          product_type,
          range,
          attributeValue_id: attributeValue_id.toString(),
          attribute_id: attribute_id.toString(),
        });
      else
        filterProduct({
          product_type,
          range,
        });
    } else {
      if (attributeValue_id.length > 0 && attribute_id.length > 0)
        filterProduct({
          range,
          attributeValue_id: attributeValue_id.toString(),
          attribute_id: attribute_id.toString(),
        });
      else
        filterProduct({
          range,
        });
    }
  };

  const handleCheckBoxValues = (e, cat, item) => {
    let product_type = null,
      range = null;
    if (cat === "color") {
      console.log("color", e.target.value);
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const colors = handleValue(checkedColors, e, item);
      setCheckedColors(colors);
    }
    if (cat === "size") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const sizes = handleValue(checkedSize, e, item);
      setCheckedSize(sizes);
    }
    if (cat === "sleeve") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const sleevs = handleValue(checkedSleeveLength, e, item);
      setCheckedSleeveLength(sleevs);
    }
    if (cat === "price") {
      range = `${value[0]}-${value[1]}`;
      const prices = handleValue(checkedPrice, e, item);
      setCheckedPrice(prices);
    }

    if (cat === "discount") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const discounts = handleValue(checkedDiscount, e, item);
      setCheckedDiscount(discounts);
    }
    if (cat === "fabric") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const fabrics = handleValue(checkedFabric, e, item);
      setCheckedFabric(fabrics);
      console.log(fabrics, e.target.value);
    }
    if (cat === "design") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const designs = handleValue(checkedDesign, e, item);
      setCheckedDesign(designs);
    }
    if (cat === "occasion") {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else dispatch(clearFilterData(cat));
      const occasion = handleValue(checkedShopOccasion, e, item);
      setCheckedShopOccasion(occasion);
    }

    if (cat === "itemType") {
      if (item.checked) {
        const itemType = handleValue(checkedItemType, e, item.value);
        setCheckedItemType(itemType);
        product_type = item.value.toLowerCase();
      } else {
        if (item.value.toLowerCase() === "customize")
          product_type = "readymade";
        if (item.value.toLowerCase() === "readymade")
          product_type = "customize";
      }
    } else {
      if (checkedItemType.length > 0)
        product_type =
          checkedItemType[checkedItemType.length - 1].toLowerCase();
    }
    range = `${value[0]}-${value[1]}`;
    sendFilter(product_type, range);
  };

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
              // onChange={(e) => handleFilterChange("price", e.target.value)}
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
            onChange={showChange}
            // valueLabelDisplay='auto'
            // aria-labelledby='non-linear-slider'
          />
          <br />
          <div className={styles.price}>
            <div style={{ position: "relative" }}>
              <p>From</p>

              <input
                type="number"
                min="0"
                value={value[0]}
                name="startPrice"
                onChange={priceInputHandler}
              />
              <span>₹</span>
            </div>
            <div style={{ position: "relative" }}>
              <p>To</p>

              <input
                type="number"
                min="1"
                value={value[1]}
                name="endPrice"
                onChange={priceInputHandler}
              />
              <span>₹</span>
            </div>
          </div>
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
          {["Readymade", "Customize"].map((value) => {
            return (
              <FormControlLabel
                // value="readymade"
                control={<CustomCheckbox />}
                onChange={(e) => {
                  // handleFilterChange("itemType", e.target.value);
                  const item = {
                    value: e.target.value,
                    checked: e.target.checked,
                  };
                  handleCheckBoxValues(e, "itemType", item);
                }}
                value={value}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            );
          })}
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
          {!isLoading ? (
            colorFilter?.map(({ value, attr_value_id, attribute_id }) => {
              return (
                <FormControlLabel
                  control={<CustomCheckbox />}
                  onChange={(e) => {
                    // handleFilterChange("color", e.target.value);
                    const item = {
                      attributeValue_id: attr_value_id,
                      attribute_id: attribute_id,
                      value: e.target.value,
                    };
                    handleCheckBoxValues(e, "color", item);
                  }}
                  value={value}
                  label={
                    <div className={styles.colorsLabel}>
                      <span
                        style={{ backgroundColor: value.toLowerCase() }}
                      ></span>
                      <p className={styles.radioBtnsLabels}>{value}</p>
                    </div>
                  }
                />
              );
            })
          ) : (
            <span>Loading...</span>
          )}
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
          {!isLoading ? (
            discountFilter?.map(
              ({ attr_value_id, attribute_id, discount }, key) => (
                <FormControlLabel
                  control={<CustomCheckbox />}
                  onChange={(e) => {
                    // handleFilterChange("discount", e.target.value);
                    const item = {
                      attributeValue_id: attr_value_id,
                      attribute_id: attribute_id,
                      value: e.target.value,
                    };
                    // handleCheckBoxValues(e, "discount", item);
                  }}
                  value={discount}
                  label={<p className={styles.radioBtnsLabels}>{discount}%</p>}
                />
              )
            )
          ) : (
            <span>Loading...</span>
          )}
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
          {!isLoading ? (
            fabricFilter?.map(({ attr_value_id, attribute_id, value }, key) => (
              // <FormControlLabel
              //   value={value}
              //   control={<CustomRadio />}
              //   label={<p className={styles.radioBtnsLabels}>{value}</p>}
              // />
              <FormControlLabel
                control={<CustomCheckbox />}
                onChange={(e) => {
                  // handleFilterChange("fabric", e.target.value);
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, "fabric", item);
                }}
                value={value}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            ))
          ) : (
            <span>Loading...</span>
          )}
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
          {!isLoading ? (
            sizeFilter?.map(({ attr_value_id, attribute_id, value }, key) => (
              <FormControlLabel
                control={<CustomCheckbox />}
                onChange={(e) => {
                  // handleFilterChange("size", e.target.value);
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, "size", item);
                }}
                value={value}
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
          {/* </RadioGroup> */}
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Sleeve Length</span>
            <span>{selectedFilter.length}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {length.map(({ value, attr_value_id, attribute_id }) => (
            <FormControlLabel
              control={<CustomCheckbox />}
              onChange={(e) => {
                // handleFilterChange("sleeveLength", e.target.value);
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, "sleeve", item);
              }}
              value={value}
              label={<p className={styles.radioBtnsLabels}>{value}</p>}
            />
          ))}
          {/* </RadioGroup> */}
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
          <FormControlLabel
            value="New"
            onChange={(e) => {
              // handleFilterChange("design", e.target.value);
              const item = {
                id: Date.now(),
                value: e.target.value,
              };
              // handleCheckBoxValues(e, "design", item);
            }}
            control={<CustomCheckbox />}
            label={<p className={styles.radioBtnsLabels}>New</p>}
          />
          {/* </RadioGroup> */}
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
          {occasionsFilter.map(
            ({ attr_value_id, attribute_id, name, slug, id }) => (
              <FormControlLabel
                control={<CustomCheckbox />}
                onChange={(e) => {
                  // handleFilterChange("shopByOccasion", e.target.value);
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, "occasion", item);
                }}
                value={slug}
                label={<p className={styles.radioBtnsLabels}>{slug}</p>}
              />
            )
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
