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
                        <ChevronLeft style={{ fontSize: 15 }} /> Neck
                    </Button>
                    :
                    Open === 'Shoulder' ?
                        <Button onClick={() => Fun('upper')} className={styles.Shoulder} >
                            <ChevronLeft style={{ fontSize: 15 }} /> Shoulder
                        </Button>
                        :
                        Open === 'Chest' ?
                            <Button onClick={() => Fun('upper')} className={styles.Chest} >
                                <ChevronLeft style={{ fontSize: 15 }} />Chest
                            </Button>
                            :
                            Open === 'Arm Hole' ?
                                <Button onClick={() => Fun('upper')} className={styles.Arm} >
                                    Arm Hole<ChevronRight style={{ fontSize: 15 }} />
                                </Button>
                                :
                                Open === 'Sleeve length' ?
                                    <Button onClick={() => Fun('upper')} className={styles.Sleeve} >
                                        <ChevronLeft style={{ fontSize: 15 }} />  Sleeve length
                                    </Button>
                                    :
                                    Open === 'Wrist' ?
                                        <Button onClick={() => Fun('upper')} className={styles.Wrist} >
                                            <ChevronLeft style={{ fontSize: 15 }} />  Wrist
                                        </Button>
                                        :
                                        Open === 'Waist' ?
                                            <Button onClick={() => Fun('lower')} className={styles.Waist} >
                                                <ChevronLeft style={{ fontSize: 15 }} />  Waist
                                            </Button>
                                            :
                                            Open === 'Full length' ?
                                                <Button onClick={() => Fun('lower')} className={styles.Full} >
                                                    Full Length<ChevronRight style={{ fontSize: 15 }} />
                                                </Button>
                                                :
                                                Open === 'Hip Round' ?
                                                    <Button onClick={() => Fun('lower')} className={styles.Hip} >
                                                        Hip Round<ChevronRight style={{ fontSize: 15 }} />
                                                    </Button>
                                                    :
                                                    Open === 'InSeam' ?
                                                        <Button onClick={() => Fun('lower')} className={styles.InSeam} >
                                                            InSeam<ChevronRight style={{ fontSize: 15 }} />
                                                        </Button>
                                                        :
                                                        Open === 'Thigh' ?
                                                            <Button onClick={() => Fun('lower')} className={styles.Thigh} >
                                                                Thigh<ChevronRight style={{ fontSize: 15 }} />
                                                            </Button>
                                                            :
                                                            Open === 'Calf' ?
                                                                <Button onClick={() => Fun('lower')} className={styles.Calf} >
                                                                    Calf<ChevronRight style={{ fontSize: 15 }} />
                                                                </Button>
                                                                :
                                                                Open === 'Ankle' ?
                                                                    <Button onClick={() => Fun('lower')} className={styles.Ankle} >
                                                                        Ankle<ChevronRight style={{ fontSize: 15 }} />
                                                                    </Button>
                                                                    :
                                                                    <></>
            }
        </>
    )
}

export default DetailTab
