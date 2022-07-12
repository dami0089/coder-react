import React from 'react'
import Item from '../item'
import '../itemList/style.css'

const ItemList = ({products}) =>{

    return(
        <div className='elBicho'>
          {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
        </div>
    )

}

export default ItemList