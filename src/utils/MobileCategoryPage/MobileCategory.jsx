import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './MobileCategory.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import { popularCategories } from '../../Redux/actions/designerHomePage';
import { useDispatch } from 'react-redux';
import Category from './Component/Category';
import Container from '../Container/container';
import Mens from './images/men.jpg';
import Women from './images/women.jpg';
import Kids from './images/kids.jpg';
const MobileCategory = () => {
  const category = [
    {
      name: 'Men',
      image: Mens,
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
      image: Women,
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
      name: 'Kids',
      image: Kids,
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

  const [click0, setClick0] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [clickIdx, setClickIdx] = useState();

  const { category_grp } = useSelector(state => state.root.main);

  const handleExpand = i => {
    if (i === 0) {
      setClick0(!click0);

      setClickIdx(i);
    }
    if (i === 1) {
      setClick1(!click1);
      setClickIdx(i);
    }
    if (i === 2) {
      setClick2(!click2);
      setClickIdx(i);
    }
  };

  return (
    <Container footerOnTabMob>
      {category_grp?.men && (
        <Category
          category={category[0]}
          index={0}
          click={click0}
          handleExpand={handleExpand}
          sub_cat={category_grp.men?.categories.slice(0, 8)}
        />
      )}

      {category_grp?.women && (
        <Category
          category={category[1]}
          index={1}
          click={click1}
          handleExpand={handleExpand}
          sub_cat={category_grp.women?.categories.slice(0, 8)}
        />
      )}

      {category_grp?.kids && (
        <Category
          category={category[2]}
          index={2}
          click={click2}
          handleExpand={handleExpand}
          sub_cat={category_grp.kids?.categories.slice(0, 8)}
        />
      )}
    </Container>
  );
};

export default MobileCategory;
