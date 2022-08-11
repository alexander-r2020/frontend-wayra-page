import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Producto.module.css'

const EntradaProductos = ({ producto }) => {
    const {descripcion,img,nombre,precio} = producto

    return (
       <Layout pagina={`producto - ${nombre}`}>
        <div className="contenedor">
            <div className={styles.page}> 
                <div>
                    <Image width={700} height={700} src={img} alt={`Imagen producto ${nombre}`}/>
                
                </div>
                <div className={styles.contenido}>
                    <h4>{nombre}</h4>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    
                </div>
            </div>    
        </div>
      </Layout>
    )
}
export async function getStaticPaths(){
    const url = `${process.env.API_URL}/api/product`
    const respuesta = await fetch(url)
    const { producto } = await respuesta.json()
    const paths = producto.map(product =>({
        params:{id:product._id}
    }))
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{id}}){

    const url = `${process.env.API_URL}/api/product/${id}`
    const respuesta = await fetch(url)
    const {producto} = await respuesta.json()

    return {
        props:{
            producto
        }
    }
}

export default EntradaProductos