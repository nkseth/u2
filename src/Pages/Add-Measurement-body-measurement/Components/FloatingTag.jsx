import { Button } from '@material-ui/core'
import React from 'react'
import styles from "./FloatingTag.module.scss"
import "./FloatingTag.module.scss"
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";


function FloatingTag({ position, FocusIt, IsFilled, NECK,
    CHEST,
    WRIST,
    SHOULDER,
    ARMHOLE,
    SLEEVE,
    WAIST,
    HIPROUND,
    INSEAM,
    FULLLENGTH,
    THIGH,
    CALF,
    ANKLE }) {
    return (
        <div className={styles.container} >
            {
                position === 'upper' ?
                    <>
                        <Button onClick={() => FocusIt('Neck')} className={NECK === '' ? styles.neck : styles.neckG} >
                            Neck <ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                        <Button onClick={() => FocusIt('Shoulder')} className={SHOULDER === '' ? styles.shoulder : styles.shoulderG} >
                            <ChevronLeft style={{ fontSize: 15 }} /> Shoulder
                        </Button>
                        <Button onClick={() => FocusIt('Chest')} className={CHEST === '' ? styles.chest : styles.chestG} >
                            Chest <ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                        <Button onClick={() => FocusIt('Arm Hole')} className={ARMHOLE === '' ? styles.armHole : styles.armHoleG} >
                            <ChevronLeft style={{ fontSize: 15 }} />  Arm Hole
                        </Button>
                        <Button onClick={() => FocusIt('Sleeve length')} className={SLEEVE === '' ? styles.sleeve : styles.sleeveG} >
                            <ChevronLeft style={{ fontSize: 15 }} />  Sleeve
                        </Button>
                        <Button onClick={() => FocusIt('Wrist')} className={WRIST === '' ? styles.wrist : styles.wristG} >
                            Wrist <ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                    </>
                    :
                    <>

                        {/* Bottom Tags here */}

                        <Button onClick={() => FocusIt('Waist')} className={WAIST === '' ? styles.waist : styles.waistG}   >
                            <ChevronLeft style={{ fontSize: 15 }} /> Waist
                        </Button>
                        <Button onClick={() => FocusIt('Hip Round')} className={HIPROUND === '' ? styles.hip : styles.hipG} >
                            Hip Round  <ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                        <Button onClick={() => FocusIt('Full length')} className={FULLLENGTH === '' ? styles.fullLength : styles.fullLengthG} >
                            <ChevronLeft style={{ fontSize: 15 }} /> Full Length
                        </Button>
                        <Button onClick={() => FocusIt('Thigh')} className={THIGH === '' ? styles.thigh : styles.thighG} >
                            <ChevronLeft style={{ fontSize: 15 }} />  Thigh
                        </Button>
                        <Button onClick={() => FocusIt('InSeam')} className={INSEAM === '' ? styles.inseam : styles.inseamG} >
                            Inseam<ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                        <Button onClick={() => FocusIt('Calf')} className={CALF === '' ? styles.calf : styles.calfG} >
                            Calf <ChevronRight style={{ fontSize: 15 }} />
                        </Button>
                        <Button onClick={() => FocusIt('Ankle')} className={ANKLE === '' ? styles.ankle : styles.ankleG} >
                            <ChevronLeft style={{ fontSize: 15 }} /> Ankle
                        </Button>
                    </>

            }
        </div>
    )
}

export default FloatingTag

