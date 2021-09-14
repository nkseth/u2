import React from "react";
import Stepper from "react-stepper-horizontal";

export default function CustomStepper({ activeStep }) {
  return (
    <Stepper
      completeColor='#6A5B40'
      activeColor='#6A5B40'
      defaultTitleColor='#000'
      titleFontSize={14}
      circleFontColor='#fff'
      lineMarginOffset={0}
      activeBorderColor='green'
      completeBarColor='#6A5B40'
      size={30}
      steps={[
        { title: "Order Summary" },
        { title: "Payment" },
        { title: "Measurement" },
      ]}
      activeStep={activeStep}
    />
  );
}
