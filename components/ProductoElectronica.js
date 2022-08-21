import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ProductoElectronica.module.css'

const ProductoElectronica = ({electronica}) => {
  const {nombre,productos} = electronica
  return (
    <section>
        <div  className={styles.contenido}>
          <h2 className={styles.titulo}>Nuevo de {nombre.toUpperCase()}</h2>
          <Link href={'/productos'}>Ver todos</Link>
        </div>
        <div className={styles.listadoProducto}>
          {productos.map(producto=>(
            <div key={producto._id} className={styles.producto}>
              <div>  
                <Image layout="responsive" width={300} height={300} src={producto.img} alt="imagen"/>
                </div>
              <div>
                <h4>{producto.nombre}</h4>
                <p className={styles.precio}>${producto.precio}</p>
              </div>
            </div>
          ))}
          
          
          
          
        </div>
          
    </section>
  )
}

export default ProductoElectronica