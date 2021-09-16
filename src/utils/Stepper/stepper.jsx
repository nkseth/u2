import React from "react";
import Stepper from "react-stepper-horizontal";
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData"

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
      steps={Product_Type === 'Customised' ? [
        { title: "Order Summary" },
        { title: "Payment" },
        { title: "Measurement" },
      ]
        :
        [
          { title: "Order Summary" },
          { title: "Payment" },
        ]
      }
      activeStep={activeStep}
    />
  );
}
