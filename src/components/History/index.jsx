import { Container } from 'react-bootstrap'
import styles from './History.module.css'
import img1 from '../../assets/img1-sw.png'

export default function History() {
    return (
        <div className={styles.history}>
            <Container className={styles.container}>
                <div className={styles.historyContent}>
                    <h1 className={`${styles.historyTitle} title`}>História do Star Wars</h1>
                    <p className={styles.historyParagraph}>É uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs. O primeiro filme foi lançado apenas com o título Star Wars,em 25 de maio de 1977, e tornou-se um fenômeno mundial inesperado de cultura popular, sendo responsável pelo início da "era dos blockbusters", que são superproduções cinematográficas que fazem sucesso nas bilheterias e viram franquias com brinquedos, jogos, livros, etc.</p>

                    <p className={styles.historyParagraph}>Foi seguido por duas sequências, The Empire Strikes Back e Return of the Jedi, lançadas com intervalos de três anos, formando a trilogia original, que segue o trio icônico formado por Luke Skywalker, Han Solo e Princesa Leia, que luta pela Aliança Rebelde para derrubar o tirano Império Galáctico.</p>

                    <p className={styles.historyParagraph}>Na época da sua estreia se tornou a maior bilheteria de todos os tempos, arrecadando US$ 775 398 007 milhões de dólares e ganhando sete prêmios no Óscar.</p>
                </div>

                <img src={img1} alt="Star Wars Planeta" className={styles.img}/>
            </Container>
        </div>
    )
}