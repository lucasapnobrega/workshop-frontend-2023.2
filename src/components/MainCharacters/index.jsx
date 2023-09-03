import { Container } from 'react-bootstrap'
import styles from './MainCharacters.module.css'
import MCard from './MCard'
import imgYoda from '../../assets/img3-yoda.png'
import imgDV from '../../assets/img4-darthVader.png'
import imgChewie from '../../assets/img5-chewie.png'
import imgR2D2 from '../../assets/img6-R2D2.png'

export default function MainCharacters() {
    return (
        <div className={styles.mainCharacters} id='test'>
            <Container className={styles.container}>
                <h2 className={`${styles.mainCharactersTitle} title`}>Personagens Marcantes</h2>
                <p className={styles.paragraph}>Em Star Wars tem personagens que mesmo se a pessoa nunca assistiu, irá conhecer. Vamos listar alguns personagens que marcam a saga:</p>

                <div className={styles.mainCharactersCards}>
                    <MCard img={imgYoda} name={'Mestre Yoda'} description={'O mestre Yoda é também um grande mentor da ordem Jedi. Seu conhecimento da Força é inigualável, e talvez não haja outro personagem em Star Wars mais querido que ele.'}/>

                    <MCard img={imgDV} name={'Darth Vader'} description={'Darth Vader entra nesta lista como o vilão mais conhecido da saga. Mas ocorre que seu arco narrativo é tão bem construído que acaba nos mostrando como o jovem Anakin acabou migrando para o lado negro da força. Por incrível que pareça, amamos odiar este sujeito.'}/>

                    <MCard img={imgChewie} name={'Chewbacca'} description={'Chewbacca ou Chewie, para os íntimos, é o copiloto da nave Millennium Falcon e o melhor amigo de Han Solo. O grandalhão que mede 2,5 metros, é um alienígena da raça Wookie, e fala por meio de ruídos impossíveis de entender.'}/>

                    <MCard img={imgR2D2} name={'R2-D2'} description={'O pequenino robô R2-D2 é um droide astromecânico, responsável por fazer a manutenção das aeronaves. Ele fala por meio de barulhinhos que viraram uma espécie de marca de Star Wars.'}/>
                </div>
            </Container>
        </div>
    )
}