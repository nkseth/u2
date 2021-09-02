import React, { useState } from 'react'
import styles from "./Styles/AddMeasurmentMan.module.scss"

import { Button } from '@material-ui/core'
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



function AddManMeasurement() {


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
            console.log(name, value)
        }
        else if (name === 'Shoulder') {
            SETSHOULDER(value);
            console.log(name, value)
        }
        else if (name === 'Chest') {
            SETCHEST(value);
            console.log(name, value)
        }
        else if (name === 'Arm Hole') {
            SETARMHOLE(value);
            console.log(name, value)
        }
        else if (name === 'Sleeve length') {
            SETSLEEVE(value);
            console.log(name, value)
        }
        else if (name === 'Wrist') {
            SETWRIST(value);
            console.log(name, value)
        }

        else if (name === 'Waist') {
            SETWAIST(value);
            console.log(name, value)
        }
        else if (name === 'Full length') {
            SETFULLLENGTH(value);
            console.log(name, value)
        }
        else if (name === 'Hip Round') {
            SETHIPROUND(value);
            console.log(name, value)
        }
        else if (name === 'InSeam') {
            SETINSEAM(value);
            console.log(name, value)
        }
        else if (name === 'Thigh') {
            SETTHIGH(value);
            console.log(name, value)
        }
        else if (name === 'Calf') {
            SETCALF(value);
            console.log(name, value)
        }
        else if (name === 'Ankle') {
            SETANKLE(value);
            console.log(name, value)
        }
        console.log(name, value)
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
            setAllDone(false)
        }
        else if (NECKFilled === false) {
            SetOpen('Neck')
        }
        else if (SHOULDERFilled === false) {
            SetOpen('Shoulder')
        }
        else if (CHESTFilled === false) {
            SetOpen('Chest')
        }
        else if (ARMHOLEFilled === false) {
            SetOpen('Arm Hole')
        }
        else if (SLEEVEFilled === false) {
            SetOpen('Sleeve length')
        }
        else if (WRISTFilled === false) {
            SetOpen('Wrist')
        }



        else if (WAISTFilled === false) {
            SetOpen('Waist')
        }
        else if (FULLLENGTHFilled === false) {
            SetOpen('Full length')
        }
        else if (HIPROUNDFilled === false) {
            SetOpen('Hip Round')
        }
        // lower
        else if (INSEAMFilled === false) {
            SetOpen('InSeam')
        }

        else if (THIGHFilled === false) {
            SetOpen('Thigh')
        }
        else if (CALFFilled === false) {
            SetOpen('Calf')
        }
        else if (ANKLEFilled === false) {
            SetOpen('Ankle')
        }

        else if (WRISTFilled === true && NECKFilled === true
            && CHESTFilled === true && SHOULDERFilled === true
            && ARMHOLEFilled === true && SLEEVEFilled === true
            && WAISTFilled === true && HIPROUNDFilled === true
            && INSEAMFilled === true && FULLLENGTHFilled === true
            && THIGHFilled === true && CALFFilled === true
            && ANKLEFilled === true) {
            setAllDone(true);
            SetOpen('upper');
            alert('This will Submit all Measurements and redirect to another page')
        }
    }
    return (
        <Container >

            <div className={styles.container} style={{ marginTop: "1em" }} >
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
                            <DetailTab Open={Open} Fun={SetOpen}
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
                                ANKLE={ANKLE} />


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
                <Button className={styles.submitBtn} >{AllDone === 'Start' ? 'Start' : AllDone === false ? 'Next' : "Submit"}</Button>

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
                    />

                </div>
            </div>
        </Container>
    )
}

export default AddManMeasurement

