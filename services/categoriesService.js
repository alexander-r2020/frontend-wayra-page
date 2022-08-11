const getCategories = async () => {

    const url = `${process.env.API_URL}/api/category`
    const respuesta = await fetch(url)
    const category = await respuesta.json()
    return category
  
}

export default getCategories