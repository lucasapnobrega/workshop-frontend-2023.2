import styles from './Footer.module.css'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container className={styles.container}>
                <h1><a href="#inicio">Star Wars</a></h1>

                <span className={styles.copy}>Lucas Alcântara &copy; Todos os direitos reservados</span>

                <ul className={styles.socialMedia}>
                    <li><a href="https://github.com/lucasapnobrega" target='_blank'> <i className="fa-brands fa-github"></i> GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/lucas-alc%C3%A2ntara-b46245278/" target='_blank'><i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
                </ul>
            </Container>
        </div>
    )
}