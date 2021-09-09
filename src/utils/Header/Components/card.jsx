import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./card.module.scss"



function MegaMenuCard({ background, title }) {
    return (
        <div className={styles.card} style={{ backgroundImage: "url(" + background + ")" }} >
            <CardOverlay title={title} />
        </div>
    )
}

export default MegaMenuCard




function CardOverlay({ title }) {
    return (
        <div className={styles.CardOverlay} >
            <p className={styles.title} >{title}</p>
            <p className={styles.p}>
                <Link> Kurta Sets</Link>
                <br />
                <Link>Kurtas</Link>
                <br />
                <Link>Sherwanis</Link>
                <br />
                <Link>Nehru Jackets</Link>
                <br />
                <Link>Bandhgalas</Link>
                <br />
                <Link>Shirts</Link>
                <br />
                <Link>Dhotis</Link>
                <br />
                <Link>Suits & Tuxedos</Link>
                <br />
                <Link>Blazers</Link>
                <br />
                <Link>Suits</Link>
            </p>
        </div>
    )
}

