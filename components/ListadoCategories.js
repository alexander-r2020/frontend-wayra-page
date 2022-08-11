import styles from '../styles/Categories.module.css'
import Link from 'next/link'

const ListadoCategories = ({nombre}) => {
  return (
        <>
        <Link href={'/productos'}>
            <div className={styles.mastercard}>
                {nombre === "electronica" ? 
                    <section className={styles.card}>
                    <h2>{nombre}</h2>
                    <style jsx>{`
                        section{     
                            padding:10rem 0;
                            background-image:linear-gradient(to right, rgb(0 0 0 /.25), rgb( 0 0 0 / .5)),url(/img/more/computacion-category.jpg);
                            background-size:cover;
                            background-position:40%;
                        }

                        `}</style>
                    </section>

                    : 
                    <section className={styles.card}>
                        <h2>{nombre}</h2>
                        <style jsx>{`
                        section{     
                            padding:10rem 0;
                            background-image:linear-gradient(to right, rgb(0 0 0 /.25), rgb( 0 0 0 / .5)),url(/img/more/pesca-category.jpg);
                            background-size:cover;
                            background-position:40%;
                        }

                        `}</style>
                    </section>


                }
                
            </div>
        </Link>      
        </>
  )
}

export default ListadoCategories