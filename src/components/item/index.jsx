import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../item/style.css'

const Item = ({product}) => {
const navigate = useNavigate();

const handleDetail = ()=> {
    
    navigate(`/detail/${product.id}`)
    } 
    
    
    return(


<div className='container'>
        <div className='card'>
        <div className='imgBx'>
            <img src={product.image}/>

        </div>


        <div className='contentBx'>
            <h2>
            {product.title}
            </h2>
            <div class="size">
            <h3>Price: </h3>
            <span>{product.price}</span>
            <div>
            
            <a onClick={handleDetail}>Buy Now</a></div>
            
            </div>
            </div>
            
        </div>
            
        </div>



        

        
       
        
    )

}

export default Item