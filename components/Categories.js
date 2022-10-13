import styles from '../styles/Categories.module.css'
import ListadoCategories from './ListadoCategories';


const Categories = ({categories}) => {
  return (
    <section>
        <h2  className={styles.titulo}>Categorias</h2>
        <section className={styles.container}>
            {categories.map(category=>(
                <ListadoCategories 
                    key={category._id}
                    nombre={category.nombre}
                    img={category.img}
                />
            ))}
        </section>
    </section>
  )
}

export default Categories