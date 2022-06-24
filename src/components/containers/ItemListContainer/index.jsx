import React from 'react';
import yerba from '../../../assets/yerba.jpeg'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
            <img src={yerba} alt="yerba" height='500' width='500' />
        </div>
    )
}

export default ItemListContainer 