import React from "react";
import { useMediaQuery } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./tabs.module.scss";

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DetailTabs() {
  const tabView = useMediaQuery("(max-width:768px)");
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        variant={tabView && "fullWidth"}
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "#000", height: "3px" } }}
        aria-label='simple tabs example'
      >
        <Tab
          className={styles.tabHeader}
          label='Description'
          {...a11yProps(0)}
        />
        <Tab className={styles.tabHeader} label='Shipping' {...a11yProps(1)} />
        <Tab className={styles.tabHeader} label='Reviews' {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
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
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
