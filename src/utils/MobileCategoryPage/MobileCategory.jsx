import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import React, { useState } from 'react';
import './MobileCategory.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MobileCategory = () => {
  const category = [
    {
      name: 'Men',
      image:
        'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMHdlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      sub_cat: [
        {
          name: 'Suit Wear',
          id: 1,
        },
        {
          name: 'Ethnic & Fusion Wear',
          id: 2,
        },
        {
          name: 'Western Wear',
          id: 3,
        },
        {
          name: 'Bottom Wear',
          id: 4,
        },
        {
          name: 'Casual Wear',
          id: 5,
        },
      ],
    },
    {
      name: 'Women',
      image:
        'https://images.unsplash.com/photo-1549037173-e3b717902c57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMHdlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      sub_cat: [
        {
          name: 'Suit Wear',
          id: 1,
        },
        {
          name: 'Ethnic & Fusion Wear',
          id: 2,
        },
        {
          name: 'Western Wear',
          id: 3,
        },
        {
          name: 'Bottom Wear',
          id: 4,
        },
        {
          name: 'Casual Wear',
          id: 5,
        },
      ],
    },
  ];

  const [click, setClick] = useState();
  const [clickIdx, setClickIdx] = useState();
  return (
    <>
      {category.map((cat, i) => {
        return (
          <div
            style={{
              backgroundImage: `url(${cat.image})`,
              position: 'relative',
              height: `${click && clickIdx === i ? '330px' : '144px'}`,
            }}
            className={`main main-${i}`}
          >
            <Accordion className='cat_accordion'>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    onClick={() => {
                      setClick(!click);
                      setClickIdx(i);
                    }}
                  />
                }
                IconButtonProps={{ size: 'small' }}
                aria-controls='panel1a-content'
                id='panel1a-header'
                className='accordionSummary'
                onClick={() => {
                  setClick(!click);
                  setClickIdx(i);
                }}
              >
                <span className='accordionHeader'>{cat.name}</span>
              </AccordionSummary>
              <AccordionDetails>
                <div className='accordion_details'>
                  {cat.sub_cat.map(sub => {
                    return <p>{sub.name}</p>;
                  })}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};

export default MobileCategory;
