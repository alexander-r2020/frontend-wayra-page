import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className='contenedor'>
          <article className={styles.contenido}>
            <nav className={styles.menuLink}>
              <h4>INFORMACION</h4>
              <Link href={'/'}>INICIO</Link>
              <Link href={'/productos'}>PRODUCTOS</Link>
              <Link href={'/acerca'}>ACERCA DE</Link>
              <Link href={'/contacto'}>CONTACTO</Link>
            </nav>
            <div className={styles.contacto}>
              <h4>CONTACTO</h4>
              <p>Direccion: Av. Avellaneda 3202</p>
              <p>telefono: 4611-9927</p>
              <p>Horario: L a V de 9 a 17hs</p>
            </div>            
            <div>
              <h4>SEGUINOS</h4>
              <Image width={45} height={45} src="/img/icon/facebook-square-brands.svg" alt="icono facebook"/>
              <Image width={45} height={45} src="/img/icon/instagram-square-brands.svg" alt="icono Instagram"/>
              <Image width={45} height={45} src="/img/icon/twitter-square-brands.svg" alt="icono twitter"/>
            </div>
          </article>
          <div className={styles.copyright}>
            <p>Copyright © 2022 - All Right Reserved.</p>
          </div>
        </section>
    </footer>
  )
}

export default Footer