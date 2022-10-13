import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Categories from '../components/Categories'
import ProductoPesca from '../components/ProductoPesca'
import ProductoElectronica  from '../components/ProductoElectronica'
import getCategories from "../services/categoriesService";


export default function Home({category,pesca,electronica}) {
  
  return (
    <Layout 
    pagina='inicio'
    >
    <main>
      <section>
        <Banner name="home-banner"/>
      </section>
      <section className='contenedor'>
        <Categories categories={category}/>
        <ProductoPesca pesca={pesca}/>
        <ProductoElectronica electronica={electronica}/>
      </section>
    </main>
      
  </Layout>
  )
}

export async function getStaticProps(){

  const {category} = await getCategories()
  const urlProductoPesca= `${process.env.API_URL}/api/product?name=Pesca`
  const urlProductoelectronica= `${process.env.API_URL}/api/product?name=Electrodomésticos`
  const [resPesca,resElectronica] = await Promise.all([
    fetch(urlProductoPesca),
    fetch(urlProductoelectronica)
  ])
  const [pesca,electronica] = await Promise.all([
    resPesca.json(),
    resElectronica.json()
  ])
  return{
    props:{
      category,
      pesca,
      electronica
    }
  }
  
}