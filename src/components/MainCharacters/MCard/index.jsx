import styles from './MCard.module.css'

export default function Card({ img, name, description }) {
    return (
        <div className={styles.MCard}>
            <img src={img} alt="Yoda" className={styles.img}/>
            <div className={styles.MCardContent}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}