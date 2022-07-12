import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'

//obtener los datos de un producto especifico
const ItemDetailContainer = () => {

    const [productDetail, setProduct] = useState({})
    const [error,setError] = useState("")

    const params = useParams();




    useEffect(()=>{
        const getProductos = async () => {

        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            const data = await response.json();
            setProduct(data)
        } catch (error) {
            console.log(error)            
            setError(error.menssage)
        }
    }
    getProductos()

    },[params])

    return (
        <ItemDetail product={productDetail}/>
        // <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer