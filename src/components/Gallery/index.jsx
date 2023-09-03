import styles from './Gallery.module.css'

export default function Gallery({ name, mass, hair_color,skin_color, eye_color, birth_year, gender }) {
    return (
        <div className={styles.galleryCard} key={name}>
            <h3>{name}</h3>
            <div className={styles.galleryCardInfo}>
                <p><span className={styles.bold}>Massa:</span> {mass}</p>
                <p><span className={styles.bold}>Cor do cabelo</span>: {hair_color}</p>
                <p><span className={styles.bold}>Cor da pele:</span> {skin_color}</p>
                <p><span className={styles.bold}>Cor dos olhos:</span> {eye_color}</p>
                <p><span className={styles.bold}>Nascimento:</span> {birth_year}</p>
                <p><span className={styles.bold}>Gênero:</span> {gender}</p>
            </div>
        </div>
    )
}