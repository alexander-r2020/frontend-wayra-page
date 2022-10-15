import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Categorias.module.css'

const Categorias = ({categoria}) => {
    
    const {name,nombre,producto} = categoria
  return (

    <Layout pagina={`categoria - ${name}`}>

        <h2 className='heading'>{nombre}</h2>
        <section className={styles.container}>
            {producto?.map(product=>(
                <div 
                    className={styles.producto}
                    key={product._id}
                    >
                    <Image priority='true' layout="responsive" width={300} height={300} src={product.img} alt={`Imagen producto ${nombre}`}/>
                    <div>
                        <h4>{product.nombre}</h4>
                        <p className={styles.descripcion}>{product.descripcion}</p>
                        <p className={styles.precio}>${product.precio}</p>
                        <Link href={`/productos/${product._id}`}>
                            <a className={styles.enlace}>Leer entrada</a>
                        </Link>
                    </div>
                </div>
            ))}
        </section>

    </Layout>
  )
}

export default Categorias

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/api/category`
    const respuesta = await fetch(url)
    const { category } = await respuesta.json()
    
    
    const paths = category.map(categoria =>({
        params:{name:categoria.name}
    }))
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{name}}){

    const url = `${process.env.API_URL}/api/category?name=${name}`
    const respuesta = await fetch(url)
    const categoria= await respuesta.json()
    
    return {
        props:{
            categoria
        }
    }
}
