import Image from "next/image";
import styles from "../styles/Contacto.module.css";
import Layout from "../components/Layout"
import Banner from '../components/Banner'

const Contacto = () => {
    return (

        <Layout pagina="Contacto">
            <main>
              <section>
                <Banner name="contacto-banner"/>
              </section>
              <section className='contenedor'>
              <h2 className='heading'>Contacto</h2>
                <section className={styles.seccion}>
                  <article>
                    <h4>Visitanos en nuestras agencias o contactanos hoy</h4>
                    <div className={styles.iconos}>
                      <div>
                        <Image width={40} height={40} src="/img/icon/map-location-dot-solid.svg" alt="mapa" />
                        <p>Av. Avellaneda 3202</p>
                      </div>
                      <div>
                        <Image width={40} height={40} src="/img/icon/phone-solid.svg" alt="phone" />
                        <p>4611-9927</p>
                      </div>
                      <div>
                        <Image width={40} height={40} src="/img/icon/whatsapp-square-brands.svg" alt="whatsapp" />
                        <p>+54 154611-9927</p>
                      </div>
                      <div>
                        <Image width={40} height={40} src="/img/icon/clock-solid.svg" alt="clock" />
                        <p>Lunes a viernes de 9 a 17hs</p>
                      </div>
                      
                      
                    </div>
                  </article>
                  <article>
                    <Image layout="responsive" width={320} height={250} src="/img/more/mapa-google.jpg" alt="google map wayra"/>
                  </article>  

                </section>
              </section>
            </main>
        </Layout>
    )
  }
  
  export default Contacto
