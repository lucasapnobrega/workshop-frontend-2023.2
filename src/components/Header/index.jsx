import styles from './Header.module.css'
import logo from '../../assets/logo-sw.png'
import iconHamb from '../../assets/icon-hamburger.svg'
import iconClose from '../../assets/icon-close.svg'
import { Container } from 'react-bootstrap'
import { useState } from 'react'


export default function Header() {
    const[active, setActive] = useState(false)
    const[icon, setIcon] = useState(iconHamb)

    function toggleMode() {
        setActive(!active) // se estiver true vai p false e vice-versa
        setIcon(icon === iconHamb ? iconClose : iconHamb)
    }

    return (
        <div className={styles.header} id='inicio'>
            <Container className={styles.container}>
                <div className={styles.teste}>
                    <img src={logo} alt="Star Wars logo" className={styles.logo}/>
                </div>

                <nav className={active ? styles.menuOpen : styles.menuClose}>
                    <ul className={styles.menuList}>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#galeria">Galeria</a></li>
                    </ul>
                </nav>

                <div className={active ? styles.iconOpen : styles.iconClose} onClick={toggleMode}>
                    <img src={icon} alt="Menu" className={styles.iconMenu}/>
                </div>
            </Container>
        </div>
    )
}