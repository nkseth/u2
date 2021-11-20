import React from 'react';
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './tabs.module.scss';
import Terms from './Terms';
import parse from 'html-react-parser';
import download from './download.jpeg'
import ReactStars from "react-rating-stars-component";
import rated from './rated.png';
import un_rated from './un_rated.png'
import arrow_right from './arrow_right.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #E5E5E5',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  indicator: {
    backgroundColor: '#857250',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(12),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#857250',
      opacity: 1,
    },
    '&$selected': {
      color: '#857250',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#857250',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#857250',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: '#857250',
  },
  demo2: {
    backgroundColor: '#857250',
  },
}));

export default function DetailTabs({ type, product, reviews }) {
  const tabView = useMediaQuery('(max-width:768px)');
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root} style={{ marginTop: '-2em' }}>
      <AntTabs
        variant={tabView && 'scrollable'}
        value={value}
        onChange={handleChange}
        classes={styles.tabHeaderContainer}
        TabIndicatorProps={{ style: { background: '#857250', height: '3px' } }}
        aria-label='simple tabs example'
      >
        <AntTab
          className={styles.tabHeader}
          label='Things to know'
          {...a11yProps(1)}
        />

        <AntTab
          className={styles.tabHeader}
          label='Description'
          {...a11yProps(0)}
        />
        {/* <AntTab
          className={styles.tabHeader}
          label='Shipping'
          {...a11yProps(1)}
        /> */}
        <AntTab
          className={styles.tabHeader}
          label='Reviews'
          {...a11yProps(2)}
        />
      </AntTabs>

      <TabPanel value={value} index={0}>
        <Terms type={type} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        {parse(product.description ? product.description : '')}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {reviews.length > 0 ? <div className={styles.review_container}>
          <Grid id="top-row" alignItems='center' container justifyContent='space-between'>
            <Grid item>
              <Grid id="top-row" alignItems='center' container >
                <Grid item >
                  <img src={reviews[0].image} style={{ height: '2rem', width: '2rem', borderRadius: '1rem', marginTop:5 }} alt='reviewer_image' />
                </Grid>
                <Grid item style={{ marginLeft: 10 }}>
                  <p style={{ fontFamily: "DM Sans" }}>{reviews[0].customers_name}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <p style={{ fontFamily: "DM Sans", color:'#6C6C6C' }}>{reviews[0].created_at}</p>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, }}>
            {reviews[0]?.images.map((val) => {
              return (
                <img className={styles.review_images} src={val.path || download} alt='review_image' />
              )
            })}
          </div>
          <div style={{ marginTop: 25 }}>
            <Grid id="row" alignItems='center' container>
              <Grid item>
                <ReactStars
                  count={5}
                  size={24}
                  value={reviews[0].point}
                  edit={false}
                  filledIcon={<img src={rated} style={{ height: 24, width: 24 }} alt='rating' />}
                  emptyIcon={<img src={un_rated} style={{ height: 24, width: 24 }} alt='rating' />}
                  activeColor="#ffd700"
                />
              </Grid>
              <Grid item>
                <p style={{ fontFamily: 'DM Sans', color: "#857250", marginBottom: 8, marginLeft: 10 }}>Rated for {reviews[0].point}/5 Stars</p>
              </Grid>
            </Grid>
          </div>
          <div>
            <p style={{ fontFamily: 'DM Sans' }}>{reviews[0].description}</p>
          </div>
          <Grid id='row' container style={{ marginTop: 10 }}>
            <Grid item>
              <p style={{ fontFamily: 'DM Sans', color: "#857250", fontSize: 16, fontWeight: 'bold' }}>see more</p>
            </Grid>
            <Grid item>
              <img src={arrow_right} style={{ height: 24, width: 24 }} alt='arrow' />
            </Grid>
          </Grid>
        </div> : null}
      </TabPanel>
    </div>
  );
}
