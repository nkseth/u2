import React, { useState } from 'react'
import styles from "./Styles/AddMeasurmentMan.module.scss"

import { Button, useMediaQuery } from '@material-ui/core'
import AccordionS from './Components/Accordion'
import FloatingTag from './Components/FloatingTag'
import DetailTab from './Components/DetailTab'

import Image from "./Images/men/Man.svg"
import neck from "./Images/men/upper/neck.svg"
import shoulder from "./Images/men/upper/shoulder.svg"
import chest from "./Images/men/upper/chest.svg"
import wrist from "./Images/men/upper/wrist.svg"
import arm from "./Images/men/upper/Armhhole.svg"
import sleeve from "./Images/men/upper/sleveelength.svg"
import waist from "./Images/men/lower/waist.svg"
import fullLength from "./Images/men/lower/full length.svg"
import hip from "./Images/men/lower/hip round.svg"
import inseam from "./Images/men/lower/inseam.svg"
import calf from "./Images/men/lower/Calf.svg"
import ankle from "./Images/men/lower/ankle.svg"
import thigh from "./Images/men/lower/thigh.svg"
import MeasurementFloating from './Components/MeasurementFloating'
import Container from '../../utils/Container/container'



import {
    //Upper body Values
    NeckData, ShoulderData, ChestData, ArmHoleData,
    SleeveLengthData, WristData,
    //Lower body values
    WaistData, FullLengthData,
    HipRoundData, InSeamData, ThighData, CalfData, AnkleData,

    //Upper body functions
    NeckVALUE, ShoulderVALUE, ChestVALUE, ArmHoleVALUE,
    SleeveLengthVALUE, WristVALUE,

    //Lower body functions
    WaistVALUE, FullLengthVALUE,
    HipRoundVALUE, InSeamVALUE, ThighVALUE, CalfVALUE, AnkleVALUE,
} from "../../Redux/MeasuremantData"



import { Link } from 'react-router-dom'




function AddManMeasurement() {

    const mobileView = useMediaQuery("(max-width:550px)");
    const tabView = useMediaQuery("(max-width:769px)");


    const [NECK, SETNECK] = useState('')
    const [CHEST, SETCHEST] = useState('')
    const [WRIST, SETWRIST] = useState('')
    const [SHOULDER, SETSHOULDER] = useState('')
    const [ARMHOLE, SETARMHOLE] = useState('')
    const [SLEEVE, SETSLEEVE] = useState('')

    const [WAIST, SETWAIST] = useState('')
    const [HIPROUND, SETHIPROUND] = useState('')
    const [INSEAM, SETINSEAM] = useState('')
    const [FULLLENGTH, SETFULLLENGTH] = useState('')
    const [THIGH, SETTHIGH] = useState('')
    const [CALF, SETCALF] = useState('')
    const [ANKLE, SETANKLE] = useState('')

    const Form = (value, name) => {
        if (name === 'Neck') {
            SETNECK(value);
            setAllDone('Done')

        }
        else if (name === 'Shoulder') {
            SETSHOULDER(value);
            setAllDone('Done')

        }
        else if (name === 'Chest') {
            SETCHEST(value);
            setAllDone('Done')

        }
        else if (name === 'Arm Hole') {
            SETARMHOLE(value);
            setAllDone('Done')

        }
        else if (name === 'Sleeve length') {
            SETSLEEVE(value);
            setAllDone('Done')

        }
        else if (name === 'Wrist') {
            SETWRIST(value);
            setAllDone('Done')

        }

        else if (name === 'Waist') {
            SETWAIST(value);
            setAllDone('Done')

        }
        else if (name === 'Full length') {
            SETFULLLENGTH(value);
            setAllDone('Done')

        }
        else if (name === 'Hip Round') {
            SETHIPROUND(value);
            setAllDone('Done')

        }
        else if (name === 'InSeam') {
            SETINSEAM(value);
            setAllDone('Done')

        }
        else if (name === 'Thigh') {
            SETTHIGH(value);
            setAllDone('Done')

        }
        else if (name === 'Calf') {
            SETCALF(value);
            setAllDone('Done')

        }
        else if (name === 'Ankle') {
            SETANKLE(value);
            setAllDone('Done')

        }

    }


    var NECKFilled = NECK === '' ? false : true
    var CHESTFilled = CHEST === '' ? false : true
    var WRISTFilled = WRIST === '' ? false : true
    var SHOULDERFilled = SHOULDER === '' ? false : true
    var ARMHOLEFilled = ARMHOLE === '' ? false : true
    var SLEEVEFilled = SLEEVE === '' ? false : true

    var WAISTFilled = WAIST === '' ? false : true
    var HIPROUNDFilled = HIPROUND === '' ? false : true
    var INSEAMFilled = INSEAM === '' ? false : true
    var FULLLENGTHFilled = FULLLENGTH === '' ? false : true
    var THIGHFilled = THIGH === '' ? false : true
    var CALFFilled = CALF === '' ? false : true
    var ANKLEFilled = ANKLE === '' ? false : true


    const [AllValues, SetAllValues] = useState(NECKFilled && CHESTFilled && WRISTFilled && SHOULDERFilled && ARMHOLEFilled && SLEEVEFilled && WAISTFilled && HIPROUNDFilled && INSEAMFilled && THIGHFilled && FULLLENGTHFilled && CALFFilled && ANKLEFilled === true ? true : false)
    const [AllDone, setAllDone] = useState('Start')
    const [button, setButton] = useState('upper')
    const [Open, SetOpen] = useState('upper')
    const FocusIt = (value) => {
        if (Open === value) {
            if (value === 'Neck' || value === 'Arm Hole' || value === 'Shoulder' || value === 'Chest' || value === 'Wrist' || value === 'Sleeve length') {
                SetOpen('upper')
            }
            else {
                SetOpen('lower')
            }
        }
        else {
            SetOpen(value);
        }
    };
    const SetIt = () => {
        if (AllDone === 'Start') {
            SetOpen('Neck');
            setButton('upper')

        }
        else {
            setAllDone(true);
            SetOpen('upper');


        }
    }
    const UploadMeasurement = () => {
        if (Open === 'upper' || Open === 'lower') {
            NeckVALUE(NECK);
            ShoulderVALUE(SHOULDER);
            ChestVALUE(CHEST);
            ArmHoleVALUE(ARMHOLE);

            SleeveLengthVALUE(SLEEVE);
            WristVALUE(WRIST);


            WaistVALUE(WAIST);
            FullLengthVALUE(FULLLENGTH);

            HipRoundVALUE(HIPROUND);
            InSeamVALUE(INSEAM);
            ThighVALUE(THIGH);
            CalfVALUE(CALF);
            AnkleVALUE(ANKLE);
        }
        else {
            setAllDone('Done')

        }
    }
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
        <Container >

            <div className={styles.container} style={tabView && !mobileView ? { marginTop: "1em" } : { marginTop: "0em" }} >
                <div className={styles.TabsButtonDivTop}>
                    <Button onClick={() => { setButton('upper'); SetOpen('upper') }} className={button === 'upper' ? styles.TabsButtonActive1 : styles.TabsButton1} >Upper Body</Button>
                    <Button onClick={() => { setButton('lower'); SetOpen('lower') }} className={button === 'lower' ? styles.TabsButtonActive2 : styles.TabsButton2}  >Lower Body</Button>
                </div>
                <div className={styles.SVGDiv}>
                    {/* <img src={Image} className={styles.upperImage} /> */}

                    <img src={
                        Open === 'upper' ? Image :
                            Open === 'lower' ? Image :
                                Open === 'Neck' ? neck :
                                    Open === 'Shoulder' ? shoulder :
                                        Open === 'Chest' ? chest :
                                            Open === 'Arm Hole' ? arm :
                                                Open === 'Waist' ? waist :
                                                    Open === 'Wrist' ? wrist :
                                                        Open === 'Hip Round' ? hip :
                                                            Open === 'Thigh' ? thigh :
                                                                Open === 'Ankle' ? ankle :
                                                                    Open === 'Sleeve length' ? sleeve :
                                                                        Open === 'Calf' ? calf :
                                                                            Open === 'InSeam' ? inseam :
                                                                                Open === 'Full length' ? fullLength :
                                                                                    Image
                    } alt='body' className={
                        Open === 'upper' ? styles.upperImage :
                            Open === 'lower' ? styles.lowerImage :
                                Open === 'Neck' ? styles.Neck :
                                    Open === 'Shoulder' ? styles.Shoulder :
                                        Open === 'Chest' ? styles.Chest :
                                            Open === 'Arm Hole' ? styles.Arm :
                                                Open === 'Waist' ? styles.Waist :
                                                    Open === 'Wrist' ? styles.Wrist :
                                                        Open === 'Hip Round' ? styles.Hip :
                                                            Open === 'Thigh' ? styles.Thigh :
                                                                Open === 'Ankle' ? styles.Ankle :
                                                                    Open === 'Sleeve length' ? styles.Sleeve :
                                                                        Open === 'Calf' ? styles.Calf :
                                                                            Open === 'InSeam' ? styles.Inseam :
                                                                                Open === 'Full length' ? styles.FullLength :
                                                                                    styles.upperImage
                    }
                    />
                    {
                        Open === 'upper' || Open === 'lower' ?
                            <FloatingTag position={button} FocusIt={FocusIt}
                                NECK={NECK}
                                CHEST={CHEST}
                                WRIST={WRIST}
                                SHOULDER={SHOULDER}
                                ARMHOLE={ARMHOLE}
                                SLEEVE={SLEEVE}
                                WAIST={WAIST}
                                HIPROUND={HIPROUND}
                                INSEAM={INSEAM}
                                FULLLENGTH={FULLLENGTH}
                                THIGH={THIGH}
                                CALF={CALF}
                                ANKLE={ANKLE}
                            />
                            :
                            <></>
                    }

                </div>
                <div className={styles.FloatingMeasure}>

                    <MeasurementFloating name={Open} focused={true} Form={Form} value={
                        Open === 'Neck' ?
                            NECK
                            :
                            Open === 'Shoulder' ?
                                SHOULDER
                                :
                                Open === 'Arm Hole' ?
                                    ARMHOLE
                                    :
                                    Open === 'Sleeve length' ?
                                        SLEEVE
                                        :
                                        Open === 'Waist' ?
                                            WAIST
                                            :
                                            Open === 'Full length' ?
                                                FULLLENGTH
                                                :
                                                Open === 'Chest' ?
                                                    CHEST
                                                    :
                                                    Open === 'Ankle' ?
                                                        ANKLE
                                                        :
                                                        Open === 'InSeam' ?
                                                            INSEAM
                                                            :
                                                            Open === 'Thigh' ?
                                                                THIGH
                                                                :
                                                                Open === 'Calf' ?
                                                                    CALF
                                                                    :
                                                                    Open === 'Wrist' ?
                                                                        WRIST
                                                                        :
                                                                        Open === 'Hip Round' ?
                                                                            HIPROUND
                                                                            :
                                                                            0

                    } />


                </div>
                {/* <Button className={styles.submitBtn} >{AllDone === 'Start' ? 'Submit' : AllDone === false ? 'Next' : "Submit"}</Button> */}
                {/* <Button className={styles.submitBtn} onClick={SetIt} >{AllDone}</Button> */}
                {
                    AllDone === true ?

                        <Link to="/viewmeasurement" style={{ color: "#fff" }} > <Button className={styles.submitBtn} onClick={AllDone === true ? UploadMeasurement : SetIt} >Submit</Button></Link>
                        :

                        <Button className={styles.submitBtn} onClick={AllDone === true ? UploadMeasurement : SetIt} >{AllDone}</Button>


                }

                <div className={styles.AccordionDiv}>
                    <div className={styles.TabsButtonDiv}>
                        <Button onClick={() => { setButton('upper'); SetOpen('upper') }} className={button === 'upper' ? styles.TabsButtonActive1 : styles.TabsButton1} >Upper Body</Button>
                        <Button onClick={() => { setButton('lower'); SetOpen('lower') }} className={button === 'lower' ? styles.TabsButtonActive2 : styles.TabsButton2}  >Lower Body</Button>
                    </div>
                    <h1 className={styles.AddMeadurementsH1} >Add measurements</h1>
                    <AccordionS
                        position={button}
                        FocusIt={FocusIt}
                        Open={Open}
                        Form={Form}
                        AllDone={AllDone}
                        SetIt={SetIt}
                        NECK={NECK}
                        CHEST={CHEST}
                        WRIST={WRIST}
                        SHOULDER={SHOULDER}
                        ARMHOLE={ARMHOLE}
                        SLEEVE={SLEEVE}
                        WAIST={WAIST}
                        HIPROUND={HIPROUND}
                        INSEAM={INSEAM}
                        FULLLENGTH={FULLLENGTH}
                        THIGH={THIGH}
                        CALF={CALF}
                        ANKLE={ANKLE}
                        UploadMeasurement={UploadMeasurement}
                    />

                </div>
            </div>
        </Container>
    )
}

export default AddManMeasurement

