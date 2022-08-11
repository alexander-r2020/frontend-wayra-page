import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
                <div>
                    <Link href={'/'}>
                            <Image width={80} height={80} src='/img/logo/logo.jpeg' alt='logo de la compania'/>        
                    </Link>
                </div>
                <nav className={styles.menuLink}>
                    <Link href={'/'}>HOME</Link>
                    <Link href={'/productos'}>PRODUCTOS</Link>
                    <Link href={'/acerca'}>ACERCA DE</Link>
                    <Link href={'/contacto'}>CONTACTO</Link>
                </nav>
                <nav className={styles.menuBars}>
                    <Image width={45} height={45} src='/img/icon/bars-solid.svg' alt='menu'/>
                </nav>
            </div>    
        </div>
    </header>
  )
}

export default Header