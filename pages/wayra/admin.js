import Image from 'next/image'
import styles from '../../styles/Admin.module.css'
const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.logo}>
        <Image width={80} height={80} src='/img/logo/logo.jpeg' alt='logo de la compania'/>
        </div>
        <h2>Login</h2>
        <form>
          <div className={styles.texto}>
            <input type="email" name="email" id="email" autoComplete="off"/>
            <label htmlFor="email">Su Email</label>
            <span></span>
          </div>
          <div className={styles.texto}>
            <input type="password" name="password" id="password" autoComplete="off"/>
            <label htmlFor="password">Su Contraseña</label>
            <span></span>
          </div>
          <div className={styles.logear}>
            <input type="submit" name="sign" id="sign" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin