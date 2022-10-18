import { ProductDAO } from "../DAO/productDAO.js"

const productDAO = ProductDAO.getInstance()

const getProduct = async ({ id }) => {
    try {
        const product = await productDAO.getById(id)
        
        return product
    } catch (error) {
        console.log(error)
    }
}


export { getProduct }