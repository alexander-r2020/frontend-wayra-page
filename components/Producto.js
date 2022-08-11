import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Producto.module.css'

const Producto = ({ producto }) => {

    const {descripcion,img,nombre,precio,_id:id} = producto

  return (
    <div className={styles.producto}>
        <Image priority='true' layout="responsive" width={300} height={300} src={img} alt={`Imagen producto ${nombre}`}/>
        <div>
            <h4>{nombre}</h4>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/productos/${id}`}>
                <a className={styles.enlace}>Leer entrada</a>
            </Link>
        </div>
    </div>
  )
}

export default Producto