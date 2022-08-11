import Layout from "../components/Layout";
import Banner from '../components/Banner'
import styles from "../styles/Acerca.module.css";
import Image from "next/image";

const Acerca = () => {
  return (
    <Layout pagina="Acerca de">
      <main>
        <section>
          <Banner name="nosotros-banner"/>
        </section>
        <section className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <section className={styles.contenido}>
            <Image
              priority="true"
              layout="responsive"
              width={500}
              height={300}
              src="/img/more/tienda-about.jpg"
              alt="menu"
            />
            <article>
              <p>
                Wayra ha fragmentado la Compañía en distintas Unidades de
                Negocio, cada una gestionada por los mejores especialistas y
                profesionales de cada sector.
              </p>
              <p>
                La pasión por la pesca deportiva y el tiempo libre hicieron del
                emprendimiento lo que es una empresa reconocida en toda Latino
                américa. Innovación, vocación de servicio, inquietudes constantes
                y clientes satisfechos.
                Somos una empresa 100% nacional, con una gran trayectoria en la
                comercializacion de articulos de pesca y camping
              </p>
              
            </article>
          </section>
          </section>
      </main>
    </Layout>
  );
};

export default Acerca;
