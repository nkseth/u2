import React from 'react'
import MegaMenuCard from './card'
import styles from "./MegaMenu.module.scss"
import Img1 from "../Images/1.png"
import Img2 from "../Images/2.png"
import Img3 from "../Images/3.png"
import Img4 from "../Images/4.png"
import Img5 from "../Images/5.png"
import Img6 from "../Images/6.png"


function MegaMenu({ Close, visible }) {
    return (
        <div className={visible ? styles.container : styles.hiddenContainer}
            onMouseLeave={() => Close(false)}>
            <MegaMenuCard background={Img1} title={'Indian & Fusion Wear'} />
            <MegaMenuCard background={Img2} title={'Bottom Wear'} />
            <MegaMenuCard background={Img3} title={'Western wear '} />
            <MegaMenuCard background={Img4} title={'Innerwear and Sleepwear'} />
            <MegaMenuCard background={Img5} title={'Fabrics'} />
            <MegaMenuCard background={Img6} title={'Designers'} />

        </div>
    )
}

export default MegaMenu
