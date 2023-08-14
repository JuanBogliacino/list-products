import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar"

const productsList = [
  {
    id: 1,
    name: "Camiseta de algodón",
    description: "Camiseta cómoda y casual hecha de algodón suave.",
    price: 19.99,
    image: 'https://blogs.elpais.com/.a/6a00d8341bfb1653ef01538e953f26970b-pi'
  },
  {
    id: 2,
    name: "Zapatos deportivos",
    description: "Zapatos deportivos ideales para correr y hacer ejercicio.",
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjFEHFjLmezC4VvkzpRZ_WFETrLyFoMSiEA&usqp=CAU'
  },
  {
    id: 3,
    name: "Bolso de cuero",
    description: "Bolso de cuero elegante con múltiples compartimentos.",
    price: 79.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYVwt28EpsZ4H7-YtXHONGD5BuJ340mEnhQ&usqp=CAU'
  },
  {
    id: 4,
    name: "Pantalones vaqueros",
    description: "Pantalones vaqueros clásicos y duraderos para uso diario.",
    price: 39.99,
    image: 'https://previews.123rf.com/images/surasaki/surasaki1407/surasaki140700047/30176532-pila-de-pantalones-vaqueros-aislados-en-blanco.jpg'
  },
  {
    id: 5,
    name: "Reloj analógico",
    description: "Reloj analógico con correa de acero inoxidable.",
    price: 129.99,
    image: 'https://d28hi93gr697ol.cloudfront.net/566e1a7e-5e2b-1791/img/Producto/7313/03-1607983425-629ffba8e536b.jpeg'
  },
];


function App() {
  const [products, setProducts] = useState(productsList)
  const [ascendente, setAscendente] = useState(true)
  const [nameProduct, setNameProduct] = useState('')

  useEffect(() => {
    if (ascendente) {
      const sortedAsc = products.slice().sort((a, b) => a.price - b.price);
      return setProducts(sortedAsc)
    }

    const sortedDesc = products.slice().sort((a, b) => b.price - a.price);
    return setProducts(sortedDesc)

  }, [ascendente])

  useEffect(() => {
    const productsFiltered = productsList.filter(product => product.name.toUpperCase().startsWith(nameProduct.toUpperCase()))
    setProducts(productsFiltered)
  }, [nameProduct])

  const changeNameProduct = (value) => {
    setNameProduct(value)
  }

  const changeOrder = () => {
    setAscendente(!ascendente)
  }

  return (
    <>
    <h1>ListProducts</h1>
    <SearchBar changeOrder={changeOrder} changeNameProduct={changeNameProduct} ascendente={ascendente} />
    <div className="container">
      {
        products.length > 0
        ? 
        <>
        {
          products.map(product => (
            <div key={product.id} className="product">
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.description}</p>
              <div className="img-container">
              <img src={product.image} alt={product.name} />
              </div>
            </div>
          ))
        }
        </>
        : <p>No se encontraron productos que coincidan con tu búsqueda</p>
      }
    </div>
    </>
  )
}

export default App