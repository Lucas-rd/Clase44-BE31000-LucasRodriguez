import { ProductDAO } from "../DAO/productDAO.js"

const productDAO = ProductDAO.getInstance()

const getProduct = async ({id}) => {
    try {
        const product = await productDAO.getById(id)
        
        return product
    } catch (error) {
        console.log(error)
    }
}

const getProducts = async () => {
    try {
        const products = await productDAO.getAll()
        
        return products
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async ({datos}) => {
    try {
        const newProduct = {
            title: datos.title,
            description: datos.description,
            code: datos.code,
            thumbnail: datos.thumbnail,
            price: datos.price,
            stock: datos.stock
        }
        const createNewProduct = await productDAO.createProductGraphql(newProduct)

        return createNewProduct
    } catch (error) {
        console.log(error)
    }
}

//Consultas para hacer en graphiql:
// {
//     getProduct(id: "62dc6faea37be7f856862ba6") {
//       title price stock thumbnail description
//     }
//   }
  
//   {
//     getProducts{
//       title price thumbnail
//     }
//   }
  
//   mutation crearProductoNuevo {
//     createProduct(datos: {title: "producto desde graphql", description: "este es el producto creado desde graphql", code: "codigo graphql", thumbnail: "thumbnail graphql", price: 1, stock: 1}) {
//       id title description code thumbnail price stock
//     }
//   }

export { getProduct, getProducts, createProduct }