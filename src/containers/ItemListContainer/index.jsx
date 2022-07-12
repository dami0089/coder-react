import React, {useEffect, useState}  from 'react';
import ItemList from '../../components/itemList';
import { useParams } from 'react-router-dom';
import '../ItemListContainer/style.css'
// import yerba from '../../../assets/yerba.jpeg'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])
  
    const params = useParams()
    
    useEffect(() => {
  
      const getProductos = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json()
          setProductos(data);
          setProductosFiltrados(data);
        } catch (error) {
          console.log("Hubo un error:");
          console.log(error);
        }
      }
      getProductos()
    }, [])
  
    useEffect(() => {
      if (params?.categoryId) {
        const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
        setProductosFiltrados(productosFiltrados)
      } else {
        setProductosFiltrados(productos)
      }
    }, [params, productos])
  
    console.log(productos);
  
    return (
      <div>
        {productos.length !== 0 ?
          <ItemList products={productosFiltrados} />
          :
          <p>Loading...</p>
        }
      </div>
    )
  }
  
  export default ItemListContainer