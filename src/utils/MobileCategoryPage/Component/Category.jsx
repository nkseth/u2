import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const Category = ({ category, index, click, handleExpand, sub_cat }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${category.image})`,
        position: 'relative',
        height: `${click ? '326px' : '144px'}`,
      }}
      className={`main-mobile_category main-0  ${click ? 'active' : ''} `}
    >
      <Accordion className='cat_accordion'>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              className='category-mobile_button'
              onClick={() => {
                handleExpand(index);
              }}
            />
          }
          IconButtonProps={{ size: 'small' }}
          aria-controls='panel1a-content'
          id='panel1a-header'
          className='accordionSummary'
          onClick={() => {
            handleExpand(index);
          }}
        >
          <span className='accordionHeader'>{category.name}</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className='accordion_details'>
            {sub_cat.map(sub => {
              return (
                <div className='accordion-detail'>
                  <div>
                    {' '}
                    <Link to=''>{sub.name}</Link>
                  </div>
                  <div>
                    <ArrowForwardIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Category;
