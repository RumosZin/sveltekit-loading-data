
export const load = async ({fetch}) => {

    const productRes = await fetch('https://dummyjson.com/products?limit=10')
    const productData = await productRes.json()
    const products = productData.products

    const usersRes = await fetch('https://dummyjson.com/users?limit=10')
    const usersData = await usersRes.json()
    const users = usersData.products
    return {
        products : products,
        users: users
    }
}