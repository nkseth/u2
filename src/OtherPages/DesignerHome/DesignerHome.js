import DesignerWear from './Components/DesignerWear';
import TopCategory from './Components/TopCategory';
import Trending from './Components/Trending';
import PopularCategory from './Components/PopularCategory';
import SuitWear from './Components/SuitWear';
import Top_Designer from './Components/Top_Designer';
import Collabrate_With_US from './Components/Collabrate_With_US';
import Season_Offers from './Components/Season_Offers';
import Talk_With_Stylish from './Components/Talk_With_Stylish';
import HandMade_Clothes from './Components/HandMade_Clothes';
import Measurement_Simulation from './Components/Measurement_Simulation';
import Customer_Review from './Components/Customer_Review';
import Container from '../../utils/Container/container';
import { useMediaQuery } from '@material-ui/core';
import TopCategoryMobile from './Components/TopCategoryMobile';

// I use Apple Pie Order To Readable Code -neerajcodes
const DesignerHome = () => {
  const mobile = useMediaQuery('(max-width:420px)');

  return (
    <>
      <Container footerOnAllView>
        {mobile && <TopCategoryMobile />}
        <DesignerWear />
        <TopCategory />
        <Trending />
        <PopularCategory />
        <SuitWear />
        <Top_Designer />
        <Collabrate_With_US />
        <Season_Offers />
        <Talk_With_Stylish />
        <HandMade_Clothes />
        <Measurement_Simulation />
        <Customer_Review />
      </Container>
    </>
  );
};

export default DesignerHome;
