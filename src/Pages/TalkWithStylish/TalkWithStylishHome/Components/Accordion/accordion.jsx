import React from 'react';
import {Accordion,  AccordionSummary, AccordionDetails,useMediaQuery } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styles from "./accordion.module.scss"



export default function Accordions() {
  const mobileView = useMediaQuery("(max-width:550px)");

  return (
    <div >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <p className={styles.question}>Lorem Ipsum is simply dummy text of the?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <p className={styles.question}>Lorem Ipsum is simply dummy text of the dummy text?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <p className={styles.question}>Lorem Ipsum is simply dummy text of the dummy text?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p  className={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <p className={styles.question}>Lorem Ipsum is simply dummy text of the dummy text Lorem </p>
        </AccordionSummary>
        <AccordionDetails>
          <p  className={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}