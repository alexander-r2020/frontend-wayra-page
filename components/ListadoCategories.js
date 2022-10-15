import styles from '../styles/Categories.module.css'
import Link from 'next/link'

const ListadoCategories = ({nombre,img,name}) => {
  return (
        <>
        
            <div className={styles.mastercard}>
            <Link href={`/categorias/${name}`}>
                    <section className={styles.card}>
                        <h2 className={styles.titulocategoria}>{nombre}</h2>
                        <style jsx>{`
                            section{     
                                padding:10rem 0;
                                background-image:linear-gradient(to right, rgb(0 0 0 /.25), rgb( 0 0 0 / .5)),url(${img});
                                background-size:cover;
                                background-position:40%;
                            }

                            `}</style>
                    </section> 
                    </Link>           
            </div>
             
        </>
  )
}

export default ListadoCategories