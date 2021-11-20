import React from 'react'
import groupimg4 from "../../../../Images/collabrate/groupimg4.png";
import styles from "./whyU2.module.scss"



export default function WhyU2() {
    
    
    return (
        <div className={styles.section}>
            <div className={styles.group}>
                <div>
                    <img src={groupimg4} alt='groupimg' />
                </div>
                <div>
                    <p>Why U2?</p>
                    <p>People have always come to U2 to shop and discover new Branded and Designer products.</p>
                    <div className={styles.percentgroup}>
                        <div>
                            <p>90%</p>
                            <p>of shopping enthusiasts turn to U2 for products discovery</p>
                        </div>
                        <div>
                            <p>87%</p>
                            <p>of people say that influencers have inspired them to make a purchase. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}