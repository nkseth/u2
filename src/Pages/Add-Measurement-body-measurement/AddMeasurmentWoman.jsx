import React, { useState } from 'react';
import styles from './Styles/AddMeasurmentMan.module.scss';

import { Button, useMediaQuery } from '@material-ui/core';
import AccordionS from './Components/Accordion';
import FloatingTag from './Components/FloatingTag';

import Image from './Images/women/Woman.svg';
import neck_image from './Images/women/upper/neck.svg';
import shoulder_image from './Images/women/upper/shoulder.svg';
import chest_image from './Images/women/upper/chest.svg';
import wrist_image from './Images/women/upper/wrist.svg';
import arm_image from './Images/women/upper/Armhhole.svg';
import sleeve_image from './Images/women/upper/sleveelength.svg';
import waist_image from './Images/women/lower/waist.svg';
import fullLength_image from './Images/women/lower/full length.svg';
import hip_image from './Images/women/lower/hip round.svg';
import inseam_image from './Images/women/lower/inseam.svg';
import calf_image from './Images/women/lower/Calf.svg';
import ankle_image from './Images/women/lower/ankle.svg';
import thigh_image from './Images/women/lower/thigh.svg';
import MeasurementFloating from './Components/MeasurementFloating';
import Container from '../../utils/Container/container';
import { useSelector, useDispatch } from 'react-redux';
import {
  set_lower_body,
  set_upper_body,
} from '../../Redux/actions/measurement';

import { Link } from 'react-router-dom';

import {
  // Measurement Functions
  NeckVALUE,
  ShoulderVALUE,
  ChestVALUE,
  ArmHoleVALUE,
  SleeveLengthVALUE,
  WristVALUE,
  WaistVALUE,
  FullLengthVALUE,
  HipRoundVALUE,
  InSeamVALUE,
  ThighVALUE,
  CalfVALUE,
  AnkleVALUE,
} from '../../Redux/MeasuremantData';

function AddWomanMeasurement({
  match: {
    params: { basic_id },
  },
}) {
  const mobileView = useMediaQuery('(max-width:550px)');
  const tabView = useMediaQuery('(max-width:769px)');
  const dispatch = useDispatch();

  const { upper_body, lower_body } = useSelector(
    state => state.root.measurement
  );

  const { neck, chest, wrist, shoulder, arm_hole, sleeve } = upper_body;
  const { waist, hip_round, full_length, inseam, thigh, calf, ankle } =
    lower_body;

  const [NECK, SETNECK] = useState('');
  const [CHEST, SETCHEST] = useState('');
  const [WRIST, SETWRIST] = useState('');
  const [SHOULDER, SETSHOULDER] = useState('');
  const [ARMHOLE, SETARMHOLE] = useState('');
  const [SLEEVE, SETSLEEVE] = useState('');

  const [WAIST, SETWAIST] = useState('');
  const [HIPROUND, SETHIPROUND] = useState('');
  const [INSEAM, SETINSEAM] = useState('');
  const [FULLLENGTH, SETFULLLENGTH] = useState('');
  const [THIGH, SETTHIGH] = useState('');
  const [CALF, SETCALF] = useState('');
  const [ANKLE, SETANKLE] = useState('');
  const Form = (value, name) => {
    if (name === 'Neck') {
      dispatch(set_upper_body({ ...upper_body, neck: value }));
      setAllDone('Done');
      NeckVALUE(value);
    } else if (name === 'Shoulder') {
      dispatch(set_upper_body({ ...upper_body, shoulder: value }));
      setAllDone('Done');
      ShoulderVALUE(value);
    } else if (name === 'Chest') {
      dispatch(set_upper_body({ ...upper_body, chest: value }));
      setAllDone('Done');
      ChestVALUE(value);
    } else if (name === 'Arm Hole') {
      dispatch(set_upper_body({ ...upper_body, arm_hole: value }));
      setAllDone('Done');
      ArmHoleVALUE(value);
    } else if (name === 'Sleeve length') {
      dispatch(set_upper_body({ ...upper_body, sleeve: value }));
      setAllDone('Done');
      SleeveLengthVALUE(value);
    } else if (name === 'Wrist') {
      dispatch(set_upper_body({ ...upper_body, wrist: value }));
      setAllDone('Done');
      WristVALUE(value);
    } else if (name === 'Waist') {
      dispatch(set_lower_body({ ...lower_body, waist: value }));
      setAllDone('Done');
      WaistVALUE(value);
    } else if (name === 'Full length') {
      dispatch(set_lower_body({ ...lower_body, full_length: value }));
      setAllDone('Done');
      FullLengthVALUE(value);
    } else if (name === 'Hip Round') {
      dispatch(set_lower_body({ ...lower_body, hip_round: value }));
      setAllDone('Done');
      HipRoundVALUE(value);
    } else if (name === 'InSeam') {
      dispatch(set_lower_body({ ...lower_body, inseam: value }));
      setAllDone('Done');
      InSeamVALUE(value);
    } else if (name === 'Thigh') {
      dispatch(set_lower_body({ ...lower_body, thigh: value }));
      setAllDone('Done');
      ThighVALUE(value);
    } else if (name === 'Calf') {
      dispatch(set_lower_body({ ...lower_body, calf: value }));
      setAllDone('Done');
      CalfVALUE(value);
    } else if (name === 'Ankle') {
      dispatch(set_lower_body({ ...lower_body, ankle: value }));
      setAllDone('Done');
      AnkleVALUE(value);
    }
  };

  var NECKFilled = neck === '' ? false : true;
  var CHESTFilled = chest === '' ? false : true;
  var WRISTFilled = wrist === '' ? false : true;
  var SHOULDERFilled = shoulder === '' ? false : true;
  var ARMHOLEFilled = arm_hole === '' ? false : true;
  var SLEEVEFilled = sleeve === '' ? false : true;

  var WAISTFilled = waist === '' ? false : true;
  var HIPROUNDFilled = hip_round === '' ? false : true;
  var INSEAMFilled = inseam === '' ? false : true;
  var FULLLENGTHFilled = full_length === '' ? false : true;
  var THIGHFilled = thigh === '' ? false : true;
  var CALFFilled = calf === '' ? false : true;
  var ANKLEFilled = ankle === '' ? false : true;

  const [AllValues, SetAllValues] = useState(
    NECKFilled &&
      CHESTFilled &&
      WRISTFilled &&
      SHOULDERFilled &&
      ARMHOLEFilled &&
      SLEEVEFilled &&
      WAISTFilled &&
      HIPROUNDFilled &&
      INSEAMFilled &&
      THIGHFilled &&
      FULLLENGTHFilled &&
      CALFFilled &&
      ANKLEFilled === true
      ? true
      : false
  );
  const [AllDone, setAllDone] = useState('Start');
  const [button, setButton] = useState('upper');
  const [Open, SetOpen] = useState('upper');
  const FocusIt = value => {
    if (Open === value) {
      if (
        value === 'Neck' ||
        value === 'Arm Hole' ||
        value === 'Shoulder' ||
        value === 'Chest' ||
        value === 'Wrist' ||
        value === 'Sleeve length'
      ) {
        SetOpen('upper');
      } else {
        SetOpen('lower');
      }
    } else {
      SetOpen(value);
    }
  };
  const SetIt = () => {
    if (AllDone === 'Start') {
      SetOpen('Neck');
      setButton('upper');
    } else {
      setAllDone(true);
      SetOpen('upper');
    }
  };
  const UploadMeasurement = () => {
    setAllDone(true);
    // if (Open === 'upper' || Open === 'lower') {
    //     NeckVALUE(NECK);
    //     ShoulderVALUE(SHOULDER);
    //     ChestVALUE(CHEST);
    //     ArmHoleVALUE(ARMHOLE);

    //     SleeveLengthVALUE(SLEEVE);
    //     WristVALUE(WRIST);

    //     WaistVALUE(WAIST);
    //     FullLengthVALUE(FULLLENGTH);

    //     HipRoundVALUE(HIPROUND);
    //     InSeamVALUE(INSEAM);
    //     ThighVALUE(THIGH);
    //     CalfVALUE(CALF);
    //     AnkleVALUE(ANKLE);
    // }
    // else {
    //     setAllDone('Done')

    // }
  };
  // const SetIt = () => {
  //     if (AllDone === 'Start') {
  //         setAllDone(false)
  //     }
  //     else if (NECKFilled === false) {
  //         SetOpen('Neck');
  //         setButton('upper')
  //     }
  //     else if (SHOULDERFilled === false) {
  //         SetOpen('Shoulder');
  //         setButton('upper')
  //     }
  //     else if (CHESTFilled === false) {
  //         SetOpen('Chest');
  //         setButton('upper')
  //     }
  //     else if (ARMHOLEFilled === false) {
  //         SetOpen('Arm Hole');
  //         setButton('upper')
  //     }
  //     else if (SLEEVEFilled === false) {
  //         SetOpen('Sleeve length');
  //         setButton('upper')
  //     }
  //     else if (WRISTFilled === false) {
  //         SetOpen('Wrist');
  //         setButton('upper')
  //     }

  //     else if (WAISTFilled === false) {
  //         SetOpen('Waist');
  //         setButton('lower')
  //     }
  //     else if (FULLLENGTHFilled === false) {
  //         SetOpen('Full length');
  //         setButton('lower')
  //     }
  //     else if (HIPROUNDFilled === false) {
  //         SetOpen('Hip Round');
  //         setButton('lower')
  //     }
  //     // lower
  //     else if (INSEAMFilled === false) {
  //         SetOpen('InSeam');
  //         setButton('lower')
  //     }

  //     else if (THIGHFilled === false) {
  //         SetOpen('Thigh');
  //         setButton('lower')
  //     }
  //     else if (CALFFilled === false) {
  //         SetOpen('Calf');
  //         setButton('lower')
  //     }
  //     else if (ANKLEFilled === false) {
  //         SetOpen('Ankle');
  //         setButton('lower')
  //     }

  //     else if (WRISTFilled === true && NECKFilled === true
  //         && CHESTFilled === true && SHOULDERFilled === true
  //         && ARMHOLEFilled === true && SLEEVEFilled === true
  //         && WAISTFilled === true && HIPROUNDFilled === true
  //         && INSEAMFilled === true && FULLLENGTHFilled === true
  //         && THIGHFilled === true && CALFFilled === true
  //         && ANKLEFilled === true) {
  //         setAllDone(true);
  //         SetOpen('upper');
  //         alert('This will Submit all Measurements and redirect to another page')
  //     }
  // }
  return (
    <Container>
      <div
        className={styles.container}
        style={
          tabView && !mobileView ? { marginTop: '1em' } : { marginTop: '0em' }
        }
      >
        <div className={styles.TabsButtonDivTop}>
          <Button
            onClick={() => {
              setButton('upper');
              SetOpen('upper');
            }}
            className={
              button === 'upper' ? styles.TabsButtonActive1 : styles.TabsButton1
            }
          >
            Upper Body
          </Button>
          <Button
            onClick={() => {
              setButton('lower');
              SetOpen('lower');
            }}
            className={
              button === 'lower' ? styles.TabsButtonActive2 : styles.TabsButton2
            }
          >
            Lower Body
          </Button>
        </div>
        <div className={styles.SVGDiv}>
          {/* <img src={Image} className={styles.upperImage} /> */}

          <img
            src={
              Open === 'upper'
                ? Image
                : Open === 'lower'
                ? Image
                : Open === 'Neck'
                ? neck_image
                : Open === 'Shoulder'
                ? shoulder_image
                : Open === 'Chest'
                ? chest_image
                : Open === 'Arm Hole'
                ? arm_image
                : Open === 'Waist'
                ? waist_image
                : Open === 'Wrist'
                ? wrist_image
                : Open === 'Hip Round'
                ? hip_image
                : Open === 'Thigh'
                ? thigh_image
                : Open === 'Ankle'
                ? ankle_image
                : Open === 'Sleeve length'
                ? sleeve_image
                : Open === 'Calf'
                ? calf_image
                : Open === 'InSeam'
                ? inseam_image
                : Open === 'Full length'
                ? fullLength_image
                : Image
            }
            alt='body'
            className={
              Open === 'upper'
                ? styles.upperImage_w
                : Open === 'lower'
                ? styles.lowerImage_w
                : Open === 'Neck'
                ? styles.Neck
                : Open === 'Shoulder'
                ? styles.Shoulder
                : Open === 'Chest'
                ? styles.Chest
                : Open === 'Arm Hole'
                ? styles.Arm
                : Open === 'Waist'
                ? styles.Waist
                : Open === 'Wrist'
                ? styles.Wrist
                : Open === 'Hip Round'
                ? styles.Hip
                : Open === 'Thigh'
                ? styles.Thigh
                : Open === 'Ankle'
                ? styles.Ankle
                : Open === 'Sleeve length'
                ? styles.Sleeve
                : Open === 'Calf'
                ? styles.Calf
                : Open === 'InSeam'
                ? styles.Inseam
                : Open === 'Full length'
                ? styles.FullLength
                : styles.upperImage_w
            }
          />
          {Open === 'upper' || Open === 'lower' ? (
            <FloatingTag
              position={button}
              FocusIt={FocusIt}
              NECK={neck}
              CHEST={chest}
              WRIST={wrist}
              SHOULDER={shoulder}
              ARMHOLE={arm_hole}
              SLEEVE={sleeve}
              WAIST={waist}
              HIPROUND={hip_round}
              INSEAM={inseam}
              FULLLENGTH={full_length}
              THIGH={thigh}
              CALF={calf}
              ANKLE={ankle}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.FloatingMeasure}>
          <MeasurementFloating
            name={Open}
            focused={true}
            Form={Form}
            value={
              Open === 'Neck'
                ? neck
                : Open === 'Shoulder'
                ? shoulder
                : Open === 'Arm Hole'
                ? arm_hole
                : Open === 'Sleeve length'
                ? sleeve
                : Open === 'Waist'
                ? waist
                : Open === 'Full length'
                ? full_length
                : Open === 'Chest'
                ? chest
                : Open === 'Ankle'
                ? ankle
                : Open === 'InSeam'
                ? inseam
                : Open === 'Thigh'
                ? thigh
                : Open === 'Calf'
                ? calf
                : Open === 'Wrist'
                ? wrist
                : Open === 'Hip Round'
                ? hip_round
                : 0
            }
          />
        </div>
        {/* <Button className={styles.submitBtn} >{AllDone === 'Start' ? 'Submit' : AllDone === false ? 'Next' : "Submit"}</Button> */}
        {/* <Button className={styles.submitBtn} onClick={SetIt} >{AllDone}</Button> */}
        {AllDone === true ? (
          <Link
            to={`/viewmeasurement/save/${basic_id}`}
            style={{ color: '#fff' }}
          >
            {' '}
            <Button
              className={styles.submitBtn}
              onClick={AllDone === true ? UploadMeasurement : SetIt}
            >
              Submit
            </Button>
          </Link>
        ) : (
          <Button
            className={styles.submitBtn}
            onClick={AllDone === true ? UploadMeasurement : SetIt}
          >
            {AllDone}
          </Button>
        )}

        <div className={styles.AccordionDiv}>
          <div className={styles.TabsButtonDiv}>
            <Button
              onClick={() => {
                setButton('upper');
                SetOpen('upper');
              }}
              className={
                button === 'upper'
                  ? styles.TabsButtonActive1
                  : styles.TabsButton1
              }
            >
              Upper Body
            </Button>
            <Button
              onClick={() => {
                setButton('lower');
                SetOpen('lower');
              }}
              className={
                button === 'lower'
                  ? styles.TabsButtonActive2
                  : styles.TabsButton2
              }
            >
              Lower Body
            </Button>
          </div>
          <h1 className={styles.AddMeadurementsH1}>Add measurements</h1>
          <AccordionS
            position={button}
            FocusIt={FocusIt}
            Open={Open}
            Form={Form}
            AllDone={AllDone}
            SetIt={SetIt}
            NECK={neck}
            CHEST={chest}
            WRIST={wrist}
            SHOULDER={shoulder}
            ARMHOLE={arm_hole}
            SLEEVE={sleeve}
            WAIST={waist}
            HIPROUND={hip_round}
            INSEAM={inseam}
            FULLLENGTH={full_length}
            THIGH={thigh}
            CALF={calf}
            ANKLE={ankle}
            UploadMeasurement={UploadMeasurement}
            basicId={basic_id}
          />
        </div>
      </div>
    </Container>
  );
}

export default AddWomanMeasurement;
