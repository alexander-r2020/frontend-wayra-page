import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children,pagina}) => {
  return (
    <div>
        <Head>
            <title>{`Wayra - ${pagina}`}</title>
            <meta name="description" content="Pagina web de computacion" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
          {children}
       <Footer/> 
    </div>
  )
}

export default Layout