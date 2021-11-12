import { Button, useMediaQuery } from '@material-ui/core';
import React from 'react';
import sort from '../../Images/image/sort.png'
import filter from '../../Images/image/filtering.png'
import styles from './sortFilter.module.scss'

export default function SortFilter() {
    const mobileView = useMediaQuery("(max-width:550px)");

    return (
        <div className={styles.container}>
            {mobileView && (
                <div style={{ display: "flex" }}>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <Button className={styles.filter}> <img src={sort} style={{marginRight:'12px'}} alt="" />Sort</Button>
                    </div>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <Button className={styles.filter}
                        // onClick={() => setFilterOpen(true)}
                        >
                            <img src={filter} style={{marginRight:'12px'}} alt="" />
                            Filter
                        </Button>
                    </div>

                </div>
            )}
        </div>
    );
}
