import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Listado from "../components/Listado";
import getProducts from "../services/productService";

const Productos = ({ producto }) => {
  return (
    <Layout pagina='Productos'>
        <main >
          <section>
            <Banner name="producto-banner"/>
          </section>
          <section className='contenedor'>
          <h2 className='heading'>Nuestros Productos</h2>
          
          <Listado productos={producto}/>
          </section>
          
          
        </main>
    </Layout>
    
  )
}

export async function getStaticProps(){

  const producto = await getProducts()
  return{
    props:{
      producto
    }
  }
}

export default Productos