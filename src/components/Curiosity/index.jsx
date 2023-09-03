import { Container } from 'react-bootstrap'
import styles from './Curiosity.module.css'
import img2 from '../../assets/img2-sw.png'

export default function Curiosity() {
    return (
        <div className={styles.curiosity}>
            <Container className={styles.container}>
                <h2 className={`${styles.curiosityTitle} title`}>Curiosidades</h2>

                <ul className={styles.curiosityList}>
                    <li>Criação de Darth Vader</li>
                    <p>Darth Vader foi o primeiro personagem do universo Star Wars criado por George Lucas.</p>

                    <li>Acidente nas gravações</li>
                    <p>Durante as gravações de “O Despertar da Força”, episódio 7 da franquia, Harrison Ford quebrou a perna. Uma porta da Millenium Falcon caiu em seu pé e, com isso, as gravações precisaram ser paralisadas até que ele se recuperasse.</p>

                    <li>Yoda foi baseado em Albert Einstein</li>
                    <p>Criado pelo maquiador de efeitos especiais Stuart Freeborn, o visual do Mestre Yoda foi inspirado no grande cientista Albert Einstein. A proposta era deixar o personagem com aquele ar de sabedoria. O maquiador contou que, em “O Império Contra-Ataca”, ele usou o próprio rosto misturado com o rosto do cientista.</p>

                    <li>Como surgiu o Chewbacca</li>
                    <p>George Lucas se inspirou em seu cachorro para criar o Chewbacca. Seu pet pesava 58 kg e era muito peludo.</p>
                </ul>

                <img src={img2} alt="Yoda" className={styles.img}/>
            </Container>
        </div>
    )
}