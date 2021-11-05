import React from 'react';
import { useSelector } from 'react-redux';
import Stepper from 'react-stepper-horizontal';
import { Product_Type, Product_Type_Change } from '../../Redux/MeasuremantData';

// import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { Box } from '@material-ui/core';

export default function CustomStepper({ activeStep, customType }) {
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
  console.log(customType);
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
      steps={
        customType
          ? [
              { title: 'Order Summary' },
              { title: 'Payment' },
              { title: 'Measurement' },
            ]
          : [{ title: 'Order Summary' }, { title: 'Payment' }]
      }
      activeStep={activeStep}
    />

    // <Stepper activeStep={activeStep} orientation='vertical'>
    //   {steps.map((label, index) => (
    //     <Step key={label}>
    //       <StepLabel>{label}</StepLabel>
    //       <StepContent>
    //         {/* <Typography>{getStepContent(index)}</Typography> */}
    //         <div>
    //           <div>
    //             {/* <Button
    //               disabled={activeStep === 0}
    //               onClick={handleBack}
    //               className={classes.button}
    //             >
    //               Back
    //             </Button> */}
    //             {/* <Button
    //               variant='contained'
    //               color='primary'
    //               onClick={handleNext}
    //               className={classes.button}
    //             >
    //               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    //             </Button> */}
    //           </div>
    //         </div>
    //       </StepContent>
    //     </Step>
    //   ))}
    // </Stepper>

    // <Multistep showNavigation={true} steps={steps} />
  );
}
