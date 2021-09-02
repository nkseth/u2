import React from "react";
import { useMediaQuery } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./tabs.module.scss";
import Terms from "./Terms";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
// }));






const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #857250',
  },
  indicator: {
    backgroundColor: '#857250',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
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
}))((props) => <Tab disableRipple {...props} />);

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
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
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
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
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












export default function DetailTabs({ type }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };







  return (
    <div className={classes.root}>
      <AntTabs
        variant={tabView && "scrollable"}
        value={value}
        onChange={handleChange}
        classes={styles.tabHeaderContainer}
        TabIndicatorProps={{ style: { background: "#857250", height: "3px", } }}
        aria-label='simple tabs example'
      >
        <AntTab
          className={styles.tabHeader}
          label='Things to know'
          {...a11yProps(1)}
        />
        <AntTab
          className={styles.tabHeader}
          label='Things to know'
          {...a11yProps(1)}
        />
        <Tab
          className={styles.tabHeader}
          label='Description'
          {...a11yProps(0)}
        />
        <AntTab className={styles.tabHeader} label='Shipping' {...a11yProps(1)} />
        <AntTab className={styles.tabHeader} label='Reviews' {...a11yProps(2)} />
      </AntTabs>
      <TabPanel value={value} index={1}>
        <div className={styles.tabPanelOne}>
          <div className={styles.firstDiv}>
            <div>
              <label>Fabric:</label>
              <span>Mid Brown Strip Wool Silk</span>
            </div>
            <div>
              <label>Buton:</label>
              <span>Black Code</span>
            </div>
            <div>
              <label>Lapel:</label>
              <span>Notch</span>
            </div>
            <div>
              <label>Vent:</label>
              <span>Single vent</span>
            </div>
            <div>
              <label>Pockets:</label>
              <span>Jetted</span>
            </div>
            <div>
              <label>Sleeves:</label>
              <span>3 Kissing buttons</span>
            </div>
          </div>
          <div className={styles.secondDiv}>
            <p>Care: Dry Clean Only</p>
            <p>Washes Guarantee</p>
            <p>Aliqua id fugiat nostrud irure ex duis ea quis id </p>
            <p>T&amp;C Apply</p>
          </div>
          <div className={styles.lastDiv}>
            <span>Description</span>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irurei...
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Terms type={type} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
