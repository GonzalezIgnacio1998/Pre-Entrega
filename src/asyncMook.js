const products = [
    {
        id: '1',
        name: 'MacPro',
        price: 20000,
        category: 'notebook',
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNXgbVgLs_1fIBEkn1H3maRKwbC6IU9UXR4DAdgKE4rdc1QU8APo9wq9YeZpxVesnTS_saa7xdhpZV-JOjqd02DDmhwfGXfA2Ox7EjW5OAE0QJ3iY5-8PeeYVgaU8I2bjh&usqp=CAc',
        stock: 25,
        description: 'descripcion de MacPro'
    },
    {id:'2', name: 'Placa de video', price: 150000, category: 'Componentes de Pc', img:'https://http2.mlstatic.com/D_NQ_NP_896891-MLA47735191469_102021-O.webp', stock: 5, description: 'Descripcion Placa de video' },
    {id:'3', name: 'Mouse', price: 30000, category: 'Componentes de Pc', img:'https://hardcorecomputacion.com.ar/wp-content/uploads/2022/08/910-005955.jpg', stock: 15, description: 'Descripcion Mouse' }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    
    
    })



}