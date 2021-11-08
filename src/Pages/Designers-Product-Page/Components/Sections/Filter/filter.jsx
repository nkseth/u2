import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumb from '../../../../../utils/Breadcrumb/breadcrumb';

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
  Checkbox,

} from "@material-ui/core";
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./filter.module.scss";
import { style } from "@material-ui/system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  clearAllFilter,
  clearFilterData,
  storefilterData,
} from '../../../../../Redux/actions/filter-category';
import CheckboxComponents from './Components/CheckBox';

const CustomRadio = withStyles({
  root: {
    color: '#9D9D9D',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <Radio color='default' {...props} />);

const CustomCheckbox = withStyles({
  root: {
    color: '#9D9D9D',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <Checkbox color='default' {...props} />);

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
  const [designFilter, setDesignFilter] = useState([]);
  const [fit, setFit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabViewPro = useMediaQuery('(max-width:835px)');
  const filterDataList = useSelector(state => state.root.storefilter);
  const setFilters = async filters => {
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
      design,
      fit,
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
    setDesignFilter(design);
    setIsLoading(false);
    setFit(fit);
  };

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(0)
    },
  }))(MuiAccordionDetails);

  const [selectedFilter, setSelectedFilter] = useState({
    categories: 'All categories',
    price: filters?.price_range[0].name || 0,
    itemType: 'All',
    color: filters?.color[0]?.value || null,
    discount: filters?.discount[0]?.discount || null,
    fabric: filters?.fabric[0]?.value || null,
    size: filters?.size[0]?.value || null,
    sleeveLength: filters?.sleevs_length?.value || null,
    // sleeveLength: filters?.sleevs_length[0]?.value || null,
    length: filters?.length[0]?.value || null,
    fit: filters?.fit[0]?.value || null,
    // design: "New",
    shopByOccasion: filters?.occasions[0]?.value,
  });

  const clearAllFilterFromReducer = () => {
    if (props.clearAll) return;
    dispatch(clearAllFilter());
    props.setClearAll(true);
    filterProduct();
  };

  useEffect(() => {
    const setAllFilters = async () => {
      await setFilters(filters);
    };
    setAllFilters();
  }, [filters]);

  useEffect(() => {
    setCheckedItemType(['All']);
  }, []);

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
  const [checkedFit, setCheckedFit] = useState([]);

  const handleFilterChange = (filterName, value) => {
    setSelectedFilter(prevState => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  const handleValue = (items, e, item) => {
    let values = [...items];
    const ids = values.map(ele => ele.id);
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

  const priceInputHandler = e => {
    if (e.target.name === 'startPrice') {
      if (e.target.value === '') return;
      if (e.target.value < 0)
        return alert('Min price range cannot be less than 0');
      setValue(val => [e.target.value, val[1]]);
    }
    if (e.target.name === 'endPrice') {
      if (e.target.value === '') return;
      if (e.target.value < 1)
        return alert('Max price range cannot be less than 1');
      setValue(val => [val[0], e.target.value]);
    }
  };

  const sendFilter = (product_type, range, discount) => {
    let attributeValue_id = [],
      attribute_id = [];
    console.log(filterDataList);
    Object.values(filterDataList).forEach(values => {
      if (values.length > 0) {
        values.forEach(value => {
          attributeValue_id.push(value.attributeValue_id);
          attribute_id.push(value.attribute_id);
        });
      }
    });

    if (product_type) {
      if (attributeValue_id.length > 0 && attribute_id.length > 0) {
        if (product_type === 'all')
          filterProduct({
            discount,
            range,
            attributeValue_id: attributeValue_id.toString(),
            attribute_id: attribute_id.toString(),
          });
        else
          filterProduct({
            discount,
            product_type,
            range,
            attributeValue_id: attributeValue_id.toString(),
            attribute_id: attribute_id.toString(),
          });
      } else {
        if (product_type === 'all')
          filterProduct({
            discount,
            range,
          });
        else
          filterProduct({
            discount,
            product_type,
            range,
          });

        // filterProduct({ discount, product_type, range });
      }
    } else {
      if (attributeValue_id.length > 0 && attribute_id.length > 0)
        filterProduct({
          discount,
          range,
          attributeValue_id: attributeValue_id.toString(),
          attribute_id: attribute_id.toString(),
        });
      else filterProduct({ discount, range });
    }
    props.setClearAll(false);
  };
  const clearFilterReducer = (cat, item) => {
    const newData = filterDataList[cat].filter(
      ({ attribute_id, attributeValue_id }, i) =>
        attributeValue_id !== item.attributeValue_id
    );
    dispatch(clearFilterData(cat, newData));
  };
  const handleCheckBoxValues = (e, cat, item) => {
    let product_type = null,
      range = null,
      discount = null;
    if (cat === 'color') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const colors = handleValue(checkedColors, e, item);
      setCheckedColors(colors);
    }
    if (cat === 'size') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const sizes = handleValue(checkedSize, e, item);
      setCheckedSize(sizes);
    }
    if (cat === 'sleeve') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const sleevs = handleValue(checkedSleeveLength, e, item);
      setCheckedSleeveLength(sleevs);
    }
    if (cat === 'price') {
      range = `${value[0]}-${value[1]}`;
      const prices = handleValue(checkedPrice, e, item);
      setCheckedPrice(prices);
    }

    if (cat === 'discount') {
      if (e.target.checked) {
        const discountData = handleValue(checkedDiscount, e, item.value);
        setCheckedDiscount(discountData);
        discount = item.value;
      } else {
        setCheckedDiscount([]);
      }
      const discounts = handleValue(checkedDiscount, e, item);
      setCheckedDiscount(discounts);
    }
    if (cat === 'fabric') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const fabrics = handleValue(checkedFabric, e, item);
      setCheckedFabric(fabrics);
    }
    if (cat === 'design') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const designs = handleValue(checkedDesign, e, item);
      setCheckedDesign(designs);
    }
    if (cat === 'occasion') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const occasion = handleValue(checkedShopOccasion, e, item);
      setCheckedShopOccasion(occasion);
    }

    if (cat === 'itemType') {
      if (item.checked) {
        const itemType = handleValue(checkedItemType, e, item.value);
        setCheckedItemType(itemType);
        product_type = item.value.toLowerCase();
      }
    } else {
      if (checkedItemType.length > 0)
        product_type =
          checkedItemType[checkedItemType.length - 1].toLowerCase();
    }

    if (cat === 'fit') {
      if (e.target.checked) {
        dispatch(
          storefilterData(item.attribute_id, item.attributeValue_id, cat)
        );
      } else clearFilterReducer(cat, item);
      const Fits = handleValue(checkedFit, e, item);
      setCheckedFit(Fits);
    }

    range = `${value[0]}-${value[1]}`;
    sendFilter(product_type, range, discount);
  };

  console.log(checkedDiscount)

  return (
    <div className={styles.container}>
      {!tabViewPro && (
        <>
          <div className={styles.header}>
            <span>Filter</span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={clearAllFilterFromReducer}
            >
              Clear all
            </span>
          </div>
        </>
      )}
      {isCategory ? (
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
              value={selectedFilter.categories}
            >
              <FormControlLabel
                value='All categories'
                checked={selectedFilter.categories === 'All categories'}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>All Categories</p>}
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      ) : (
        ''
      )}
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Price</span>
            <span>{!isLoading && 'Select price range'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
          style={{ flexDirection: 'column' }}
        >
          <Slider
            style={{ color: '#6A5B40' }}
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
            <div style={{ position: 'relative' }}>
              <p>From</p>
              <input
                type='number'
                min='0'
                value={value[0]}
                name='startPrice'
                onChange={priceInputHandler}
              />
              <span>₹</span>
            </div>
            <div style={{ position: 'relative' }}>
              <p>To</p>

              <input
                type='number'
                min='1'
                value={value[1]}
                name='endPrice'
                onChange={priceInputHandler}
              />
              <span>₹</span>
            </div>
          </div>
          <p onClick={() => setValue([0, 19090.8])} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
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
            onChange={e => handleFilterChange('itemType', e.target.value)}
            value={selectedFilter.itemType}
          >
            {['All', 'Readymade', 'Customize'].map(value => {
              return (
                // <FormControlLabel
                //   // value="readymade"
                //   control={<CustomCheckbox />}
                //   onChange={e => {
                //     const item = {
                //       value: e.target.value,
                //       checked: e.target.checked,
                //     };
                //     handleCheckBoxValues(e, 'itemType', item);
                //   }}
                //   value={value}
                //   label={<p className={styles.radioBtnsLabels}>{value}</p>}
                // />
                <FormControlLabel
                  checked={checkedItemType[checkedItemType.length - 1] == value ? true : false}
                  onChange={e => {
                    const item = {
                      value: e.target.value,
                      checked: e.target.checked,
                    };
                    handleCheckBoxValues(e, 'itemType', item);
                  }}
                  value={value}
                  control={<CustomRadio />}
                  label={<p className={styles.radioBtnsLabels}>{value}</p>}
                />
              );
            })}
          </RadioGroup>
          <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'itemType', { value: "All", checked: true })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
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
            <span>{checkedColors.length > 0 ? checkedColors[checkedColors.length -1].value : 'Select Colour'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {colorFilter?.map(({ value, attr_value_id, attribute_id }) => {
            return (
              <FormControlLabel
                control={<CustomCheckbox />}
                checked={checkedColors[checkedColors.length - 1]?.value == value ? true : false}
                onChange={e => {
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, 'color', item);
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
          })}
          <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'color', {})} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
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
            <span>{checkedDiscount.length > 0 ? checkedDiscount[checkedDiscount.length -1].value + '%' : 'Select Discount'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup
            aria-label='Discount'
            onChange={e => handleFilterChange('discount', e.target.value)}
            value={selectedFilter.discount}
          >
            {discountFilter?.map(({ name, value }, key) => (
              // <FormControlLabel
              //   control={<CustomCheckbox />}
              //   onChange={e => {
              //     const item = {
              //       value: e.target.value,
              //     };
              //     handleCheckBoxValues(e, 'discount', item);
              //   }}
              //   value={discount}
              //   label={<p className={styles.radioBtnsLabels}>{discount}%</p>}
              // />
              <FormControlLabel
                checked={checkedDiscount[checkedDiscount.length - 1]?.value == value ? true : false}
                value={name}
                onChange={e => {
                  const item = {
                    value: value,
                  };
                  handleCheckBoxValues(e, 'discount', item);
                }}
                control={<CustomRadio />}
                label={<p className={styles.radioBtnsLabels}>{name}</p>}
              />
            ))}
          </RadioGroup>
          <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'discount', {})} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
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
            <span>{checkedFabric.length > 0 ? checkedFabric[checkedFabric.length -1].value : 'Select Fabric'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {fabricFilter?.map(({ attr_value_id, attribute_id, value }, key) => (
            <FormControlLabel
              checked={checkedFabric[checkedFabric.length - 1]?.value == value ? true : false}
              control={<CustomCheckbox />}
              onChange={e => {
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, 'fabric', item);
              }}
              value={value}
              label={<p className={styles.radioBtnsLabels}>{value}</p>}
            />
          ))}
          <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'fabric', {})} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
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
            <span>{checkedSize.length > 0 ? checkedSize[checkedSize.length -1].value : 'Select Size'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {sizeFilter?.map(({ attr_value_id, attribute_id, value }, key) => (
            <FormControlLabel
            checked={checkedSize[checkedSize.length - 1]?.value == value ? true : false}
              control={<CustomCheckbox />}
              onChange={e => {
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, 'size', item);
              }}
              value={value}
              label={
                <p className={styles.radioBtnsLabels}>{value.toUpperCase()}</p>
              }
            />
          ))}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'size', {  })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
          {/* </RadioGroup> */}
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Sleeve Length</span>
            <span>{checkedSleeveLength.length > 0 ? checkedSleeveLength[checkedSleeveLength.length -1].value : 'Select Sleevelength'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {sleeveLength.map(({ value, attr_value_id, attribute_id }) => (
            <FormControlLabel
            checked={checkedSleeveLength[checkedSleeveLength.length - 1]?.value == value ? true : false}
              control={<CustomCheckbox />}
              onChange={e => {
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, 'sleeve', item);
              }}
              value={value}
              label={<p className={styles.radioBtnsLabels}>{value}</p>}
            />
          ))}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'sleeve', {})} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
          {/* </RadioGroup> */}
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
            <span>{checkedDesign.length > 0 ? checkedDesign[checkedDesign.length -1].value : 'Select Design'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {designFilter.map(
            ({ attr_value_id, attribute_id, category_id, value }) => (
              <FormControlLabel
              checked={checkedDesign[checkedDesign.length - 1]?.value == value ? true : false}
                value={value}
                onChange={e => {
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, 'design', item);
                }}
                control={<CustomCheckbox />}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            )
          )}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'design', {  })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
          {/* </RadioGroup> */}
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
            <span>{checkedShopOccasion.length > 0 ? checkedShopOccasion[checkedShopOccasion.length -1].value : 'Select'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {occasionsFilter.map(
            ({ attr_value_id, attribute_id, name, value, id }) => (
              <FormControlLabel
              checked={checkedShopOccasion[checkedShopOccasion.length - 1]?.value == value ? true : false}
                control={<CustomCheckbox />}
                onChange={e => {
                  const item = {
                    attributeValue_id: attr_value_id,
                    attribute_id: attribute_id,
                    value: e.target.value,
                  };
                  handleCheckBoxValues(e, 'occasion', item);
                }}
                value={value}
                label={<p className={styles.radioBtnsLabels}>{value}</p>}
              />
            )
          )}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'occasion', {  })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Fit</span>
            <span>{checkedFit.length > 0 ? checkedFit[checkedFit.length -1].value : 'Select Fit'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {fit.map(({ attr_value_id, attribute_id, name, value, id }) => (
            <FormControlLabel
            checked={checkedFit[checkedFit.length - 1]?.value == value ? true : false}
              control={<CustomCheckbox />}
              onChange={e => {
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, 'fit', item);
              }}
              value={value}
              label={<p className={styles.radioBtnsLabels}>{value}</p>}
            />
          ))}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'fit', {  })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>length</span>
            <span>{selectedFilter.length}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          {length.map(({ attr_value_id, attribute_id, name, value, id }) => (
            <FormControlLabel
              control={<CustomCheckbox />}
              checked={checkedSleeveLength[checkedSleeveLength.length - 1]?.value == value ? true : false}
              onChange={e => {
                const item = {
                  attributeValue_id: attr_value_id,
                  attribute_id: attribute_id,
                  value: e.target.value,
                };
                handleCheckBoxValues(e, 'length', item);
              }}
              value={value}
              label={<p className={styles.radioBtnsLabels}>{value}</p>}
            />
          ))}
           <p onClick={() => handleCheckBoxValues({ target: { checked: true } }, 'length', {  })} style={{ cursor: "pointer", textAlign: 'right' }}>Clear</p>
        </AccordionDetails>
      </Accordion>
      {/* <CheckboxComponents
        styles={styles}
        name={'fit'}
        value={selectedFilter.fit}
        handleCheckBoxValues={handleCheckBoxValues}
        items={fit}
        title={'Fit'}
      /> */}
      {/* <CheckboxComponents
        styles={styles}
        name={'length'}
        value={selectedFilter.length}
        handleCheckBoxValues={handleCheckBoxValues}
        items={length}
        title={'Length'}
      /> */}
    </div>
  );
}
