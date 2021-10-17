import React from "react";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal";
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData";

export default function CustomStepper({ activeStep, customType }) {
  console.log(customType);
  return (
    <Stepper
      completeColor="#6A5B40"
      activeColor="#6A5B40"
      defaultTitleColor="#000"
      titleFontSize={14}
      circleFontColor="#fff"
      lineMarginOffset={0}
      activeBorderColor="green"
      completeBarColor="#6A5B40"
      size={30}
      steps={
        customType
          ? [
              { title: "Order Summary" },
              { title: "Payment" },
              { title: "Measurement" },
            ]
          : [{ title: "Order Summary" }, { title: "Payment" }]
      }
      activeStep={activeStep}
    />
  );
}
