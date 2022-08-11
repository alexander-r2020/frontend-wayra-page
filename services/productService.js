const getProducts = async () => {

    const url = `${process.env.API_URL}/api/product`
    const respuesta = await fetch(url)
    const {producto} = await respuesta.json()

    return producto
  
}

export default getProducts