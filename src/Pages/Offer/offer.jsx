import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Container from "../../utils/Container/container";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";

// sections
import SectionOne from "./Components/Sections/section-one/section";
import SectionTwo from "./Components/Sections/section-two/section";
import SectionThree from "./Components/Sections/section-three/section";
import SectionFour from "./Components/Sections/section-four/section";
import SectionFive from "./Components/Sections/section-five/section";
import SectionSix from "./Components/Sections/section-six/section";

export default function Offer() {
  return (
    <Container footerOnAllView>
      <SectionOne />
      <CustomSection>
        <Breadcrumb
          style={{ paddingTop: "0" }}
          path="Designer Home /"
          activePath="Offers "
        />
      </CustomSection>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </Container>
  );
}