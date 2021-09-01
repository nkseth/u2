import React from 'react'
import CustomTextField from './CustomTextField'
import styles from "./MeasurementFloating.module.scss"


function MeasurementFloating({ name, value, Form }) {
    return (
        <div className={styles.container} >
            {name === 'upper' || name === 'lower' ?
                <p>Select a Label and enter your size</p>

                :
                <CustomTextField label={name} size={'small'} Form={Form} name={name} values={value} focus={true} />

            }
        </div>
    )
}

export default MeasurementFloating
