import React, { useEffect, useState } from 'react';
import styles from './Styles/AddMeasurmentMan.module.scss';

import { Button, IconButton, useMediaQuery } from '@material-ui/core';
import AccordionS from './Components/Accordion';
import FloatingTag from './Components/FloatingTag';

import Image from './Images/men/Man.svg';
import neck_image from './Images/men/upper/neck.svg';
import shoulder_image from './Images/men/upper/shoulder.svg';
import chest_image from './Images/men/upper/chest.svg';
import wrist_image from './Images/men/upper/wrist.svg';
import arm_image from './Images/men/upper/Armhhole.svg';
import sleeve_image from './Images/men/upper/sleveelength.svg';
import waist_image from './Images/men/lower/waist.svg';
import fullLength_image from './Images/men/lower/full length.svg';
import hip_image from './Images/men/lower/hip round.svg';
import inseam_image from './Images/men/lower/inseam.svg';
import calf_image from './Images/men/lower/Calf.svg';
import ankle_image from './Images/men/lower/ankle.svg';
import thigh_image from './Images/men/lower/thigh.svg';
import MeasurementFloating from './Components/MeasurementFloating';
import Container from '../../utils/Container/container';
import { useSelector, useDispatch } from 'react-redux';
import help_img from './Images/help.svg';
import { Link, useHistory } from 'react-router-dom';
import {
  getAllMeasurements,
  saveMeasurement,
  set_lower_body,
  set_upper_body,
} from '../../Redux/actions/measurement';

import {
  // Measuremant Parameters
  NeckData,
  ShoulderData,
  ChestData,
  ArmHoleData,
  SleeveLengthData,
  WristData,
  WaistData,
  FullLengthData,
  HipRoundData,
  InSeamData,
  ThighData,
  CalfData,
  AnkleData,

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

function AddManMeasurement({
  match: {
    params: { basic_id },
  },
}) {
  const history = useHistory();
  const mobileView = useMediaQuery('(max-width:550px)');
  const tabView = useMediaQuery('(max-width:769px)');
  const dispatch = useDispatch();

  const { upper_body, lower_body } = useSelector(
    state => state.root.measurement
  );
  console.log(basic_id);

  const { measurements } = useSelector(state => state.root.allMeasurements);
  // console.log(measurements[measurements.length - 1]);
  const { user } = useSelector(state => state.root.auth);
  console.log('body');
  const { neck, chest, wrist, shoulder, arm_hole, sleeve } = upper_body;
  const { waist, hip_round, full_length, inseam, thigh, calf, ankle } =
    lower_body;

  useEffect(() => {
    if (measurements && measurements.length > 0) return;
    // if (basic_id === "Order Id" || !basic_id) return;
    dispatch(getAllMeasurements(user.api_token));
  }, [user, dispatch, measurements, basic_id]);

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

  const UpperValues =
    NECKFilled &&
    CHESTFilled &&
    WRISTFilled &&
    SHOULDERFilled &&
    ARMHOLEFilled &&
    SLEEVEFilled;
  console.log(
    '???? ~ file: AddMeasurmentMan.jsx ~ line 96 ~ UpperValue',
    UpperValues
  );

  const LowerValues =
    WAISTFilled &&
    HIPROUNDFilled &&
    INSEAMFilled &&
    FULLLENGTHFilled &&
    THIGHFilled &&
    CALFFilled &&
    ANKLEFilled;
  console.log(
    '???? ~ file: AddMeasurmentMan.jsx ~ line 123 ~ LowerValues',
    LowerValues
  );
  const Form = (values, name) => {
    const value = +Math.max(0, parseFloat(values)).toString().slice(0, 8);

    if (name === 'Neck') {
      dispatch(set_upper_body({ ...upper_body, neck: value }));
      NeckVALUE(value);
    } else if (name === 'Shoulder') {
      dispatch(set_upper_body({ ...upper_body, shoulder: value }));

      ShoulderVALUE(value);
    } else if (name === 'Chest') {
      dispatch(set_upper_body({ ...upper_body, chest: value }));

      ChestVALUE(value);
    } else if (name === 'Arm Hole') {
      dispatch(set_upper_body({ ...upper_body, arm_hole: value }));

      ArmHoleVALUE(value);
    } else if (name === 'Sleeve length') {
      dispatch(set_upper_body({ ...upper_body, sleeve: value }));

      SleeveLengthVALUE(value);
    } else if (name === 'Wrist') {
      dispatch(set_upper_body({ ...upper_body, wrist: value }));

      WristVALUE(value);
    } else if (name === 'Waist') {
      dispatch(set_lower_body({ ...lower_body, waist: value }));

      WaistVALUE(value);
    } else if (name === 'Full length') {
      dispatch(set_lower_body({ ...lower_body, full_length: value }));

      FullLengthVALUE(value);
    } else if (name === 'Hip Round') {
      dispatch(set_lower_body({ ...lower_body, hip_round: value }));

      HipRoundVALUE(value);
    } else if (name === 'InSeam') {
      dispatch(set_lower_body({ ...lower_body, inseam: value }));

      InSeamVALUE(value);
    } else if (name === 'Thigh') {
      dispatch(set_lower_body({ ...lower_body, thigh: value }));

      ThighVALUE(value);
    } else if (name === 'Calf') {
      dispatch(set_lower_body({ ...lower_body, calf: value }));

      CalfVALUE(value);
    } else if (name === 'Ankle') {
      dispatch(set_lower_body({ ...lower_body, ankle: value }));

      AnkleVALUE(value);
    }
    if (UpperValues) {
      setAllDone('Done');
    }
  };

  const [AllValues, SetAllValues] = useState(LowerValues && UpperValues);
  console.log(
    '???? ~ file: AddMeasurmentMan.jsx ~ line 182 ~ AllValues',
    AllValues
  );

  useEffect(() => {
    SetAllValues(LowerValues && UpperValues);
  }, [LowerValues, UpperValues]);

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
    if (AllDone === 'Done') {
      setButton('lower');
      SetOpen('lower');
    }

    if (AllDone === 'Start') {
      SetOpen('Neck');
      setButton('upper');
    } else {
      if (AllValues) {
        setAllDone(true);
        SetOpen('upper');
      } else {
        setAllDone('Please fill all Fields');
      }
    }
  };
  const UploadMeasurement = () => {
    setAllDone('Done');
    const upperBodyData = {
      type: 'upper',
      measurements_basic_id: basic_id,
      neck: parseFloat(NeckData),
      shoulder: parseFloat(ShoulderData),
      chest: parseFloat(ChestData),
      arm_hole: parseFloat(ArmHoleData),
      wrist: parseFloat(WristData),
      sleeve: parseFloat(SleeveLengthData),
    };

    const lowerBodyData = {
      type: 'Lower',
      measurements_basic_id: basic_id,
      full_length: parseFloat(FullLengthData),
      hip_round: parseFloat(HipRoundData),
      inseam: parseFloat(InSeamData),
      thigh: parseFloat(ThighData),
      waist: parseFloat(WaistData),
      calf: parseFloat(CalfData),
      ankle: parseFloat(AnkleData),
    };

    console.log(
      'UpperData',
      NeckData,
      ChestData,
      WristData,
      ShoulderData,
      ArmHoleData,
      SleeveLengthData
    );
    console.log(
      'LowerData',
      WaistData,
      HipRoundData,
      FullLengthData,
      InSeamData,
      ThighData,
      CalfData,
      AnkleData
    );
  };

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
                ? styles.upperImage
                : Open === 'lower'
                ? styles.lowerImage
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
                : styles.upperImage
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
            to={`/add-measurement-image/${basic_id}`}
            //  to={`/viewmeasurement/${basic_id}`}
            style={{ color: '#fff' }}
          >
            <Button
              className={styles.submitBtn}
              onClick={
                AllDone === true && AllValues ? UploadMeasurement : SetIt
              }
            >
              {AllDone === true && AllValues
                ? 'Submit'
                : 'Please Fill all the fields'}
              {/* Submit */}
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
          <div className={styles.help}>
            <h1>Help</h1>
            <IconButton className={styles.help_btn}>
              <img src={help_img} alt='' />
            </IconButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AddManMeasurement;
