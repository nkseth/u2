import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomSection from "../../utils/Custom Section/section";
import Container from "../../utils/Container/container";
import Image from "../../Images/image/Designer.png";
import Nav from "./Components/nav";
import Card from "./Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDesignerProfile } from "../../Redux/actions/designer";
import Loader from "../../utils/Loader/Loader";
function Designer({
  match: {
    params: { designerId },
  },
}) {
  const dispatch = useDispatch();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const img1 =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/7a7d5a32e573cc2df649246fe05faa140574b308?fuid=763802552325253092";
  const { designer, loading, error } = useSelector(
    (state) => state.root.designerProfile
  );
  useEffect(() => {
    dispatch(getDesignerProfile(designerId));
  }, [designerId, dispatch]);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Container bottomDivider footerOnAllView>
        <CustomSection>
          <Breadcrumb path="Home /" activePath="Designer's Profile" />
        </CustomSection>
        {loading ? (
          <Loader />
        ) : designer ? (
          <>
            <Card
              backgroundImg={designer.cover_image}
              header={"Designer Name"}
              designer={designer}
            />

            <div style={{ marginTop: "40px" }}>
              <Nav />
            </div>
          </>
        ) : (
          <p>No Data Available</p>
        )}
      </Container>
    </div>
  );
}

export default Designer;
