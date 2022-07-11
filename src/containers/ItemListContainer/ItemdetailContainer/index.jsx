import React, { useEffect, useState } from 'react'
import ItemDetail from '../../../components/ItemDetail'

//obtener los datos de un producto especifico
const ItemDetailContainer = () => {

    const [productDetail, setProduct] = useState({})
    const [error,setError] = useState("")

    useEffect(()=>{
        const getProductos = async () => {

        try {
            const response = await fetch('https://fakestoreapi.com/products/5')
            const data = await response.json();
            setProduct(data)
        } catch (error) {
            console.log(error)            
            setError(error.menssage)
        }
    }
    getProductos()

    },[])

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer