import React from 'react'
import styles from "./DetailTab.module.scss"
import { Button } from '@material-ui/core'
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

function DetailTab({ Open, Fun }) {
    return (
        <>
            {
                Open === 'Neck' ?
                    <Button onClick={() => Fun('upper')} className={styles.Neck} >
                        <ChevronLeft /> Neck
                    </Button>
                    :
                    Open === 'Shoulder' ?
                        <Button onClick={() => Fun('upper')} className={styles.Shoulder} >
                            <ChevronLeft /> Shoulder
                        </Button>
                        :
                        Open === 'Chest' ?
                            <Button onClick={() => Fun('upper')} className={styles.Chest} >
                                <ChevronLeft />Chest
                            </Button>
                            :
                            Open === 'Arm Hole' ?
                                <Button onClick={() => Fun('upper')} className={styles.Arm} >
                                    Arm Hole<ChevronRight />
                                </Button>
                                :
                                Open === 'Sleeve length' ?
                                    <Button onClick={() => Fun('upper')} className={styles.Sleeve} >
                                        <ChevronLeft />  Sleeve length
                                    </Button>
                                    :
                                    Open === 'Wrist' ?
                                        <Button onClick={() => Fun('upper')} className={styles.Wrist} >
                                            <ChevronLeft />  Wrist
                                        </Button>
                                        :
                                        Open === 'Waist' ?
                                            <Button onClick={() => Fun('lower')} className={styles.Waist} >
                                                <ChevronLeft />  Waist
                                            </Button>
                                            :
                                            Open === 'Full length' ?
                                                <Button onClick={() => Fun('lower')} className={styles.Full} >
                                                    Full Length<ChevronRight />
                                                </Button>
                                                :
                                                Open === 'Hip Round' ?
                                                    <Button onClick={() => Fun('lower')} className={styles.Hip} >
                                                        Hip Round<ChevronRight />
                                                    </Button>
                                                    :
                                                    Open === 'InSeam' ?
                                                        <Button onClick={() => Fun('lower')} className={styles.InSeam} >
                                                            InSeam<ChevronRight />
                                                        </Button>
                                                        :
                                                        Open === 'Thigh' ?
                                                            <Button onClick={() => Fun('lower')} className={styles.Thigh} >
                                                                Thigh<ChevronRight />
                                                            </Button>
                                                            :
                                                            Open === 'Calf' ?
                                                                <Button onClick={() => Fun('lower')} className={styles.Calf} >
                                                                    Calf<ChevronRight />
                                                                </Button>
                                                                :
                                                                Open === 'Ankle' ?
                                                                    <Button onClick={() => Fun('lower')} className={styles.Ankle} >
                                                                        Ankle<ChevronRight />
                                                                    </Button>
                                                                    :
                                                                    <></>
            }
        </>
    )
}

export default DetailTab
