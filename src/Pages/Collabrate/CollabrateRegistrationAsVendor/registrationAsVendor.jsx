import React, { useEffect, useState } from 'react';
import Container from '../../../utils/Container/container';
import CustomSection from '../../../utils/Custom Section/section';
import styles from './vendorRegistration.module.scss';
import { makeStyles } from '@material-ui/core/styles';

import Loading from 'react-fullscreen-loading';
import {
  useMediaQuery,
  Button,
  Grid,
  InputLabel,
  FormControl,
  NativeSelect,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  ListItemText,
  styled,
  InputBase,
  FormGroup,
  ListItemIcon,
} from '@material-ui/core';
import InputField from '../../Payment/Components/Input-Field/inputField';
import Logo from '../../../Images/logo/u2.svg';
import { Link } from 'react-router-dom';
import useForm from '../../../utils/useForm/useForm';
import common_axios from '../../../utils/axios.config';
import { SuccessPopUp } from '../../../utils/Popups/SuccessPopup';
import Confirm from './confirm.svg';
import { withStyles } from '@material-ui/styles';
export default function VendorRegistration() {
  const tabView = useMediaQuery('(max-width:769px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const [Experience, SetExperience] = useState();
  const [personName, setPersonName] = useState();
  const [showInputField, setShowInputField] = useState({
    website: false,
    instagram: false,
    others: false,
  });

  const { values, updateValues, resetValues } = useForm({
    name: '',
    email: '',
    phone: '',
    designerName: '',
    operationCity: '',
    website: '',
    instagram: '',
    otherPlatform: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    designerName: '',
    operationCity: '',
    website: '',
    instagram: '',
    otherPlatform: '',
    operation: '',
    catalogue: '',
    turnOver: '',
    categories: '',
    catalogueImages: '',
    certificateImages: '',
  });

  const handleChangeForState = event => {
    SetExperience(event.target.value);
  };
  const handleShowState = (e, type) => {
    setShowInputField(showInputField => ({
      ...showInputField,
      [type]: e.target.value === 'yes' ? true : false,
    }));
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const ErrorClearTimeOut = 5000;
  const [popupMessage, setPopupMessage] = useState('');
  const [errorResponse, setErrorResponse] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

  const [formLoading, setFormLoading] = useState(false);
  const handleSubmit = async e => {
    // setDisableBtn(true);
    e.preventDefault();
    let categoriesId = [];

    const platForm = selectedPlatform.some(plat => plat !== 'Platform');

    if (
      categories[0] === `Men's Wear` ||
      categories[1] === `Men's Wear` ||
      categories[2] === `Men's Wear` ||
      categories[3] === `Men's Wear`
    ) {
      categoriesId.push(12);
    }
    if (
      categories[0] === `Women's Wear` ||
      categories[1] === `Women's Wear` ||
      categories[2] === `Women's Wear` ||
      categories[3] === `Women's Wear`
    ) {
      categoriesId.push(13);
    }
    if (
      categories[0] === `Kid's Wear` ||
      categories[1] === `Kid's Wear` ||
      categories[2] === `Kid's Wear` ||
      categories[3] === `Kid's Wear`
    ) {
      categoriesId.push(11);
    }

    if (!values.name) {
      window.scrollTo(0, 0);
      setError({ name: '* Please Enter your Name' });
      setTimeout(() => setError({ name: '' }), ErrorClearTimeOut);
      return;
    }

    if (!values.email) {
      window.scrollTo(0, 0);

      setError({ email: '* Please Enter your Email' });
      setTimeout(() => setError({ email: '' }), ErrorClearTimeOut);
      return;
    }
    if (!validateEmail(values.email)) {
      window.scrollTo(0, 0);

      setError({ email: '* Provide a valid Email' });
      setTimeout(() => setError({ email: '' }), ErrorClearTimeOut);
      return;
    }

    if (!values.phone || values.phone.toString().length < 10) {
      window.scrollTo(0, 0);

      setError({ phone: '* Please Enter your Phone Number / Valid Number' });
      setTimeout(() => setError({ phone: '' }), ErrorClearTimeOut);
      return;
    }
    if (!values.designerName) {
      window.scrollTo(200, 0);

      setError({ designerName: '* Please Enter Designer Name' });
      setTimeout(() => setError({ designerName: '' }), ErrorClearTimeOut);
      return;
    }
    if (!values.operationCity) {
      window.scrollTo(200, 0);

      setError({ operationCity: '* Please Enter Operation City' });
      setTimeout(() => setError({ operationCity: '' }), ErrorClearTimeOut);
      return;
    }
    if (showInputField.website && !values.website) {
      setError({ website: '* Please Enter Website Url' });
      setTimeout(() => setError({ website: '' }), ErrorClearTimeOut);
      return;
    }
    if (showInputField.instagram && !values.instagram) {
      setError({ instagram: '* Please Enter Instagram ID' });
      setTimeout(() => setError({ instagram: '' }), ErrorClearTimeOut);
      return;
    }

    if (showInputField.others && !selectedPlatform.length) {
      setError({ otherPlatform: '* Please Provide the details' });
      setTimeout(() => setError({ otherPlatform: '' }), ErrorClearTimeOut);
      return;
    }

    if (!dropDownOptions.operation) {
      window.scrollTo(200, 0);

      setError({ operation: '* Please Provide the details' });
      setTimeout(() => setError({ operation: '' }), ErrorClearTimeOut);
      return;
    }
    if (!dropDownOptions.catalogue) {
      window.scrollTo(200, 0);

      setError({ catalogue: '* Please Provide the details' });
      setTimeout(() => setError({ catalogue: '' }), ErrorClearTimeOut);
      return;
    }
    if (!dropDownOptions.turnOver) {
      window.scrollTo(800, 0);

      setError({ turnOver: '* Please Provide the details' });
      setTimeout(() => setError({ turnOver: '' }), ErrorClearTimeOut);
      return;
    }
    if (!categoriesId.length) {
      setError({ categories: '* Please Provide the details' });
      setTimeout(() => setError({ categories: '' }), ErrorClearTimeOut);
      return;
    }

    if (!certificateImages) {
      window.scrollTo(200, 0);

      setError({ certificateImages: '* Please Provide the details' });
      setTimeout(() => setError({ certificateImages: '' }), ErrorClearTimeOut);
      return;
    }
    if (!catalogueImages.length || catalogueImages.length < 1) {
      window.scrollTo(800, 0);

      setError({
        catalogueImages: `${catalogueImages.length < 1
          ? '* Please Provide 2 or more image'
          : '* Please Provide the details'
          }`,
      });
      setTimeout(() => setError({ catalogueImages: '' }), ErrorClearTimeOut);
      return;
    }

    const formData = new FormData();

    const dataInfo = {
      full_name: values.name,
      email: values.email,
      phone: values.phone,
      designer_name: values.designerName,
      certificate: certificateImages,
      year_of_operation: dropDownOptions.operation,
      operation_city: values.operationCity,
      categories: categoriesId,
      cataloguse_size: dropDownOptions.catalogue,
      turn_over: dropDownOptions.turnOver,
      catalogues_image_count: catalogueImages.length,
      website: showInputField.website,
      website_url: values.website,

      instagram: showInputField.instagram,
      instagram_url: values.instagram,
      other_platform_url: platForm,
      other_platform: showInputField.others,
    };

    catalogueImages.map((img, i) => {
      formData.append(`catalogues_image${i}`, img);
    });

    Object.entries(dataInfo).map(([k, v]) => {
      formData.append(k, v);
    });
    setFormLoading(true);

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const { data } = await common_axios.post(
        `/merchant_register`,
        formData,
        config
      );
      if (data.message) {
        setFormLoading(false);
      }

      setPopupMessage(data.message);

      if (data.message) {
        resetValues();
        setDropDownOptions({
          operation: '',
          catalogue: '',
          turnOver: '',
          category: '',
          platform: '',
        });
        setShowInputField({
          website: false,
          instagram: false,
          others: false,
        });
        setCatalogueImages([]);

        setCertificateName('');

        setCertificateImages();
        setCatalogName('');
      }
    } catch (error) {
      console.log(error.response.data);
      setFormLoading(false);
      setErrorResponse(error.response.data);
    }
  };
  const categoriesDropDown = [
    {
      id: 13,
      name: "Kid's Wear",
    },
    {
      id: 11,
      name: "Men's Wear",
    },
    {
      id: 12,
      name: "Women's Wear",
    },
  ];

  const platformDrop = [
    {
      id: 13,
      name: 'Amazon',
    },
    {
      id: 11,
      name: 'Flipkart',
    },
    {
      id: 12,
      name: 'Myntra',
    },
    {
      id: 22,
      name: 'Rare Rabit',
    },
  ];
  const CustomCheckbox = withStyles({
    root: {
      color: '#9D9D9D',
      '&$checked': {
        color: '#857250',
      },
    },
    checked: {},
  })(props => <Checkbox color='default' {...props} />);
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      //   marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      height: '28px',
      display: 'flex',
      alignItems: 'center',

      fontSize: '14px',
      //   backgroundColor: theme.palette.background.paper,
      // border: '1px solid #6A5B40',

      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      //   fontFamily: [
      //     '-apple-system',
      //     'BlinkMacSystemFont',
      //     '"Segoe UI"',
      //     'Roboto',
      //     '"Helvetica Neue"',
      //     'Arial',
      //     'sans-serif',
      //     '"Apple Color Emoji"',
      //     '"Segoe UI Emoji"',
      //     '"Segoe UI Symbol"',
      //   ].join(','),
      '&:focus': {
        borderRadius: 4,

        // borderColor: '#6a5b4044',
        // boxShadow: '0 0 0 0.2rem #6a5b402f',
      },
    },
  }));
  // const handlePopup = data => {
  //   <SuccessPopUp children />;
  // };

  const [dropDownOptions, setDropDownOptions] = useState({
    operation: '',
    catalogue: '',
    turnOver: '',
    category: '',
    platform: '',
  });

  const handleDropDown = (e, type) => {
    setDropDownOptions(dropDownOptions => ({
      ...dropDownOptions,
      [type]: e.target.value,
    }));
  };

  const imageUploader = React.useRef(null);
  const certificateUploader = React.useRef(null);
  const [catalogueImages, setCatalogueImages] = useState([]);

  const [certificateImages, setCertificateImages] = useState();

  const toggleModal = () => setPopupMessage('');
  const toggleModalError = () => setErrorResponse('');

  const [catalogueName, setCatalogName] = useState([]);

  const [certificateName, setCertificateName] = useState('');

  const handleImageUpload = (e, name) => {
    const [file] = e.target.files;

    if (file) {
      const reader = new FileReader();

      // const { current } = uploadedImage;
      // current.file = file;
      if (name === 'catalogue') {
        if (e.target.files) {
          const filesArray = Array.from(e.target.files).map(file => file);

          const name = file.name.split('.')[0].slice(0, 8);

          const type = file.type.split('/')[1];

          const fileName = `${name}.${type}`;

          setCatalogueImages(prevImages => prevImages.concat(filesArray));

          Array.from(e.target.files).map(
            file => URL.revokeObjectURL(file) // avoid memory leak
          );
        }

        // setCatalogueImages(catalogueImages => [
        //   ...catalogueImages,
        //   ...e.target.files,
        // ]);
      }
      if (name === 'certificate') {
        setCertificateName(file.name);
        setCertificateImages(...e.target.files);
      }
      // reader.onload = e => {
      //   // current.src = e.target.result;

      // };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setCatalogName(
      catalogueImages.map(
        img =>
          `${img.name.split('.')[0].slice(0, 10)}.${img.name.split('.')[1]}`
      )
    );
  }, [catalogueImages]);

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      width: 300,
    },
    indeterminateColor: {
      color: '#857250',
    },
    selectAllText: {
      fontWeight: 500,
    },
    selectedAll: {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
  }));
  const options = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const [categories, setCategories] = useState([]);

  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = event => {
    const value = event.target.value;

    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
    setCategories(value);
  };
  const [selectedPlatform, setSelectedPlatForm] = useState([]);

  const handleChangePlatForm = event => {
    const value = event.target.value;

    if (value[value.length - 1] === 'all') {
      setSelectedPlatForm(
        selectedPlatform.length === options.length ? [] : options
      );
      return;
    }
    setSelectedPlatForm(value);
  };

  return (
    // <Container bottomDivider footerOnTabMob footerOnAllView>
    <>
      <>
        {popupMessage && (
          <SuccessPopUp toggle={toggleModal} height={'350px'}>
            <img src={Confirm} alt='' />
            <h2 style={{ margin: '1rem 0', fontSize: '16px' }}>
              {popupMessage}
            </h2>
            <a
              target='_blank'
              href='https://www.u2.dhaatri.store/'
              class={styles.removeModelButton}
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={e => {
                toggleModal();
              }}
              rel='noreferrer noopener'
            >
              Learn More
            </a>
          </SuccessPopUp>
        )}
        {errorResponse && (
          <SuccessPopUp
            toggle={toggleModalError}
            width={'500px'}
            height={'150px'}
          >
            {/* <img src={Confirm} alt='' /> */}
            <h2 style={{ margin: '1rem 0', fontSize: '16px' }}>
              {errorResponse.message}
            </h2>
            {errorResponse.errors ? Object.entries(errorResponse.errors).map(([k, v]) => {
              return (
                <p style={{ margin: '1rem 0' }}>
                  {v && v.length != 0 ? v[0] : ''}
                </p>
              )
            }) : " "}
            {/* <p style={{ margin: '1rem 0' }}>
              {errorResponse.errors ? Object.entries(errorResponse.errors).map(([k, v]) => {
                formData.append(k, v);
              }) : " "}
              {errorResponse.errors ? JSON.stringify(errorResponse.errors) : ''}
            </p> */}
            <button
              class={styles.removeModelButton}
              onClick={e => {
                toggleModalError();
              }}
              rel='noreferrer noopener'
            >
              Fix It
            </button>
          </SuccessPopUp>
        )}
        <Loading
          loading={formLoading}
          background='#ffffffa'
          loaderColor='#857250'
        />
      </>
      <CustomSection>
        <div className={styles.mainContainer}>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <h2>Register as a Vendor!</h2>
          <p>Please fill in the form to start your journey with us.</p>
          <h3>Basic Details</h3>
          <span className={styles.subtitle}>
            *These will become the primary source of contact
          </span>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} style={{ marginTop: '11px' }}>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <input
                  className={`${styles.inputField} ${error.name && styles.errorInput
                    }`}
                  type='text'
                  name='name'
                  placeholder='Full name'
                  value={values.name}
                  onChange={updateValues}
                  style={{ borderColor: `${error.name ? 'red' : ''}` }}
                />
                {error.name && (
                  <span className={styles.errorMsg}>{error.name}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <input
                  className={`${styles.inputField} ${error.email && styles.errorInput
                    }`}
                  type='text'
                  name='email'
                  value={values.email}
                  placeholder='Email Id'
                  onChange={updateValues}
                />
                {error.email && (
                  <span className={styles.errorMsg}>{error.email}</span>
                )}
              </Grid>
              {!tabView ? (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                  <input
                    className={`${styles.inputField} ${error.phone && styles.errorInput
                      }`}
                    type='number'
                    placeholder='Phone Number'
                    name='phone'
                    value={values.phone}
                    onChange={updateValues}
                  // onChange={onChange}
                  />
                  {error.phone && (
                    <span className={styles.errorMsg}>{error.phone}</span>
                  )}
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <>
                    <input
                      className={`${styles.inputField} ${error.phone && styles.errorInput
                        }`}
                      type='number'
                      name='phone'
                      placeholder='Phone Number'
                      // onChange={onChange}
                      value={values.phone}
                      onChange={updateValues}
                    />
                    {error.phone && (
                      <span className={styles.errorMsg}>{error.phone}</span>
                    )}
                  </>
                </Grid>
              )}
            </Grid>
            <h3>Professional Details</h3>
            <span className={styles.subtitle}>
              *These details are referred to qualify designers
            </span>
            <Grid container spacing={4} style={{ marginTop: '11px' }}>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <>
                  <input
                    className={`${styles.inputField} ${error.designerName && styles.errorInput
                      }`}
                    type='text'
                    name='designerName'
                    placeholder='Designer name'
                    value={values.designerName}
                    onChange={updateValues}
                  />
                  {error.designerName && (
                    <span className={styles.errorMsg}>
                      {error.designerName}
                    </span>
                  )}
                </>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <FormControl style={{ width: '100%' }}>
                  <div
                    style={{
                      position: 'relative',
                    }}
                  >
                    <div className={styles.inputField}>
                      <input
                        // className={styles.inputField}
                        type='file'
                        placeholder='Professional certificate'
                        accept='image/jpeg,image/gif,image/png,application/pdf'
                        // onChange={onChange}
                        onChange={e => handleImageUpload(e, 'certificate')}
                        ref={certificateUploader}
                        style={{
                          display: 'none',
                        }}
                      />
                      {certificateName && (
                        <span
                          style={{
                            display: 'inline-block',
                            marginTop: '0.3rem',
                          }}
                        >
                          {certificateName}
                        </span>
                      )}
                      {!certificateName && (
                        <p style={{ color: '#757575', fontSize: '14px' }}>
                          Professional certificate
                        </p>
                      )}
                    </div>
                    <Button
                      variant='contained'
                      onClick={() => certificateUploader.current.click()}
                      className={styles.catalogueButton}
                    >
                      Browse
                    </Button>
                    {error.certificateImages && (
                      <span className={styles.errorMsg}>
                        {error.certificateImages}
                      </span>
                    )}
                  </div>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <FormControl style={{ width: '100%' }}>
                  <NativeSelect
                    disableUnderline
                    className={styles.inputFieldDrop}
                    // onChange={handleChangeForState}
                    placeholder='Total years of operations'
                    input={<BootstrapInput />}
                    value={dropDownOptions.operation}
                    onChange={e => handleDropDown(e, 'operation')}
                    style={{
                      color: `${dropDownOptions.operation ? '#000' : '#757575'
                        }`,
                      border: `1px solid ${error.operations ? 'red' : '#6A5B40'
                        }`,
                    }}
                  >
                    <option
                      disabled
                      selected
                      aria-label='None'
                      value=''
                      style={{ color: 'black' }}
                    >
                      Total years of operations
                    </option>
                    <option value={'0-1'}>0-1 years</option>
                    <option value={'2-5'}>1-5 years</option>
                    <option value={'5-10'}>5-10 years</option>
                    <option value={'10-15'}>10-15 years</option>
                    <option value={'more than 20'}>More than 20 years</option>
                  </NativeSelect>
                  {error.operation && (
                    <span className={styles.errorMsg}>{error.operation}</span>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <input
                  className={`${styles.inputField} ${error.operationCity && styles.errorInput
                    }`}
                  type='text'
                  name='operationCity'
                  placeholder='Operation city'
                  value={values.operationCity}
                  onChange={updateValues}
                />
                {error.operationCity && (
                  <span className={styles.errorMsg}>{error.operationCity}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <FormControl style={{ width: '100%' }}>
                  <NativeSelect
                    disableUnderline
                    className={styles.inputFieldDrop}
                    onChange={handleChangeForState}
                    placeholder='Catalogue size'
                    input={<BootstrapInput />}
                    value={dropDownOptions.catalogue}
                    onChange={e => handleDropDown(e, 'catalogue')}
                    style={{
                      color: `${dropDownOptions.catalogue ? '#000' : '#757575'
                        }`,
                      border: `1px solid ${error.catalogue ? 'red' : '#6A5B40'
                        }`,
                    }}
                  >
                    <option disabled selected aria-label='None' value=''>
                      Catalogue size
                    </option>
                    <option value={'Less than 30'}>Less than 30</option>
                    <option value={'30-100'}>30 - 100</option>
                    <option value={'100-200'}>100 - 200</option>
                    <option value={'200 above'}>200 and above</option>
                  </NativeSelect>
                  {error.catalogue && (
                    <span className={styles.errorMsg}>{error.catalogue}</span>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <FormControl style={{ width: '100%' }}>
                  <Select
                    labelId='mutiple-select-label'
                    className={styles.inputFieldDrop}
                    multiple
                    input={<BootstrapInput />}
                    value={selected}
                    onChange={handleChange}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                    style={{
                      border: `1px solid ${error.categories ? 'red' : '#6A5B40'
                        }`,
                      backgroundColor: 'none',
                      marginBottom: '8px',
                    }}
                  >
                    <option
                      disabled
                      selected
                      aria-label='None'
                      value=''
                    // style={{ padding: '1rem' }}
                    >
                      Categories
                    </option>

                    *
                    {categoriesDropDown.map((option, i) => {
                      return (
                        <MenuItem
                          className='register_as__vender--menu-item'
                          key={option.id}
                          value={option.name}
                          style={{ fontSize: '10px' }}
                        >
                          <ListItemIcon>
                            <Checkbox
                              classes={{
                                indeterminate: classes.indeterminateColor,
                              }}
                              style={{ color: '#6A5B40' }}
                              checked={selected.indexOf(option.name) > -1}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={option.name}
                          // primary={`${
                          //   i <= 10 ? 'Kids' : i <= 53 ? 'Mens' : 'Womens'
                          // } - ${option.name}`}
                          />
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <span className={styles.placeHolder}>
                    * You can select multiple
                  </span>
                  {!selected.length && (
                    <p
                      style={{
                        position: 'absolute',
                        left: '10px',
                        color: '#757575',
                        pointerEvents: 'none',
                      }}
                    >
                      {' '}
                      Categories
                    </p>
                  )}
                  {error.categories && (
                    <span className={styles.errorMsg}>{error.categories}</span>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <FormControl style={{ width: '100%' }}>
                  <NativeSelect
                    disableUnderline
                    className={styles.inputFieldDrop}
                    onChange={handleChangeForState}
                    placeholder='Average monthly turn over'
                    input={<BootstrapInput />}
                    value={dropDownOptions.turnOver}
                    style={{
                      color: `${dropDownOptions.turnOver ? '#000' : '#757575'}`,
                      border: `1px solid ${error.turnOver ? 'red' : '#6A5B40'}`,
                    }}
                    onChange={e => handleDropDown(e, 'turnOver')}
                  >
                    <option disabled selected aria-label='None' value={''}>
                      Average monthly turn over
                    </option>
                    <option value={'Below 10 lac'}>Below 10 lac</option>
                    <option value={'1-5 lac'}>1-5 years</option>
                    <option value={'5-10 lac'}>5-10 years</option>
                    <option value={'10-15 lac'}>10-15 years</option>
                    <option value={'More than 20 lac'}>
                      More than 20 years
                    </option>
                  </NativeSelect>
                  {error.turnOver && (
                    <span className={styles.errorMsg}>{error.turnOver}</span>
                  )}
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={8}
                lg={8}
                xl={8}
                style={{ width: '100%' }}
              >
                <FormControl style={{ width: '100%' }}>
                  <div style={{ position: 'relative' }}>
                    <div className={styles.inputFieldButton}>
                      <input
                        type='file'
                        multiple
                        // placeholder='Catalogue sample images'
                        onChange={e => handleImageUpload(e, 'catalogue')}
                        ref={imageUploader}
                        accept='image/png, image/jpeg'
                        style={{
                          display: 'none',
                        }}
                      />
                      <p>
                        {catalogueName.length ? (
                          <span>
                            {catalogueName[0]}{' '}
                            {catalogueName.length > 1 &&
                              `, + ${catalogueName.length - 1}`}
                          </span>
                        ) : (
                          <span style={{ color: '#757575', fontSize: '14px' }}>
                            Catalogue sample images
                          </span>
                        )}
                      </p>
                      <Button
                        variant='contained'
                        className={styles.catalogueButton}
                        onClick={() => imageUploader.current.click()}
                      >
                        Browse
                      </Button>
                    </div>
                    {error.catalogueImages && (
                      <span className={styles.errorMsg}>
                        {error.catalogueImages}
                      </span>
                    )}
                  </div>
                </FormControl>
                <span className={styles.placeHolder}>
                  Up to 10 images
                </span>
              </Grid>
            </Grid>
            <h3>Online presence</h3>
            <h5> Website URL</h5>
            <FormControl>
              <div style={{ display: !mobileView ? 'flex' : 'unset' }}>
                <RadioGroup
                  defaultValue='no'
                  name='radio-buttons-group'
                  onClick={e => handleShowState(e, 'website')}
                >
                  <FormControlLabel
                    value='yes'
                    control={<Radio style={{ color: '#6A5B40' }} />}
                    label='Yes'
                  />
                  <FormControlLabel
                    value='no'
                    control={<Radio style={{ color: '#857250' }} />}
                    label='No'
                  />
                </RadioGroup>
                {showInputField.website && (
                  <>
                    <input
                      className={`${styles.inputFieldRadio} ${error.Website && styles.errorInput
                        }`}
                      type='text'
                      placeholder='Website URL'
                      name='website'
                      onChange={updateValues}
                      style={{ marginLeft: !mobileView && '121px' }}
                    />
                    <div>
                      {error.website && (
                        <span className={styles.errorMsg}>{error.website}</span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </FormControl>
            <h5> Instagram ID</h5>
            <FormControl component='fieldset'>
              <div style={{ display: !mobileView ? 'flex' : 'unset' }}>
                <RadioGroup
                  defaultValue='no'
                  name='radio-buttons-group'
                  onClick={e => handleShowState(e, 'instagram')}
                >
                  <FormControlLabel
                    value='yes'
                    control={<Radio style={{ color: '#857250' }} />}
                    label='Yes'
                  />
                  <FormControlLabel
                    value='no'
                    control={<Radio style={{ color: '#857250' }} />}
                    label='No'
                  />
                </RadioGroup>
                {showInputField.instagram && (
                  <>
                    <input
                      className={`${styles.inputFieldRadio} ${error.Website && styles.errorInput
                        }`}
                      type='text'
                      placeholder='Instagram ID'
                      name='instagram'
                      onChange={updateValues}
                      style={{ marginLeft: !mobileView && '121px' }}
                    />
                    <div>
                      {error.instagram && (
                        <span className={styles.errorMsg}>
                          {error.instagram}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </FormControl>
            <h5> Do you sell on other platforms</h5>
            <FormControl component='fieldset'>
              <div style={{ display: !mobileView ? 'flex' : 'unset' }}>
                <RadioGroup
                  defaultValue='no'
                  name='radio-buttons-group'
                  onChange={e => handleShowState(e, 'others')}
                >
                  <FormControlLabel
                    value='yes'
                    control={<Radio style={{ color: '#857250' }} />}
                    label='Yes'
                  />
                  <FormControlLabel
                    value='no'
                    control={<Radio style={{ color: '#857250' }} />}
                    label='No'
                  />
                </RadioGroup>
                {showInputField.others && (
                  <div>
                    <FormControl
                      style={{

                        width: '100%',
                        marginLeft: !mobileView && '121px',
                        fontSize: '16px',
                        fontFamily: 'DM Sans',
                        lineHeight: '21px',
                        color: '#6A5B40',

                        border: `1px solid ${error.platform ? 'red' : '#6A5B40'
                          }`,
                        marginBottom: '8px',
                        width: '400px',

                      }}
                    >

                      <Select
                        labelId='mutiple-select-label'
                        className={`${styles.inputFieldSelect}`}
                        multiple
                        input={<BootstrapInput />}
                        value={selectedPlatform}
                        onChange={handleChangePlatForm}
                        renderValue={selectedPlatform =>
                          selectedPlatform.join(', ')
                        }
                        MenuProps={MenuProps}
                        style={{
                          border: `1px solid ${error.platform ? 'red' : '#6A5B40'
                            }`,
                        }}
                      >
                        <option
                          disabled
                          selected
                          aria-label='None'
                          value=''
                          style={{ padding: '1rem' }}
                        >
                          Platform
                        </option>

                        {platformDrop.map((option, i) => {
                          return (
                            <MenuItem
                              key={option.id}
                              value={option.name}
                              className='register_as__vender--menu-item'
                            >
                              <ListItemIcon>
                                <Checkbox
                                  classes={{
                                    indeterminate: classes.indeterminateColor,
                                  }}
                                  style={{ color: '#6A5B40' }}
                                  checked={
                                    selectedPlatform.indexOf(option.name) > -1
                                  }
                                />
                              </ListItemIcon>
                              <ListItemText primary={option.name} />
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {!selectedPlatform.length && (
                        <p
                          style={{
                            position: 'absolute',
                            left: '10px',
                            pointerEvents: 'none',
                          }}
                        >
                          Platform
                        </p>
                      )}
                    </FormControl>
                    <Button className={styles.addbtn}>+Add platform</Button>
                  </div>
                )}
              </div>
            </FormControl>


            {error.otherPlatform && (
              <span className={styles.errorMsg}>{error.otherPlatform}</span>
            )}

            <div
              style={{
                textAlign: 'center',
                marginTop: '20px',
                marginBottom: '33px',
              }}
            >
              <Button
                type='submit'
                variant='contained'
                className={styles.nextButton}
                disabled={disableBtn}
              // onClick={handlePopup}
              >
                Submit
              </Button>
            </div>
          </form>

          {!mobileView && (
            <div style={{ textAlign: 'center', marginBottom: '101px' }}>
              <h4>
                <span className={styles.helpText}> For help </span>
                <span className={styles.subtext}>Email:</span>
                <span className={styles.subtext}><Link> help@fashtechhive.com</Link></span>
                <span className={styles.subtext}> / Call: +91 - 7259111787</span>
              </h4>
            </div>
          )}

        </div>
      </CustomSection>
    </>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
