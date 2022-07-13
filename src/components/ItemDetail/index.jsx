import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCounts from '../ItemCounts';
import '../ItemDetail/style.scss'

const ItemDetail = ({product}) => {
    console.log(product);
    const stock = 11
    const init = 1 
    const [qtyAdded, setQtyAdded] = useState(0);

    const handleConfirm = (qty) => {
      setQtyAdded(qty)
    }

    const navigate = useNavigate();

    const handleTerminate = () =>{
      navigate('/cart')
    }
    
    return (
        // <div>
        //     <h1>{product.title}</h1>
        //     <img src={product.image}/>
        //     <p>{product.description}</p>
            
        // </div>
        <body>
  <main>
    <div class="card">
      <div class="card__title">
        <div class="icon">
          <a href="#"><i class="fa fa-arrow-left"></i></a>
        </div>
        <h3>Nuevo Producto</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>{product.title}</h1>
            <p class="sub">{product.category}</p>
            <p class="price">$ {product.price}</p>
          </div>
          <div class="image">
            <img src={product.image} alt=""></img>
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>{product.description}</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <div class="reviews">
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">

      {!qtyAdded ?
      <ItemCounts onAdd={handleConfirm} product={product} stock={stock} initial={init}/>
        :
      <button onClick ={handleTerminate} className="agregarCarro">Terminar Compra</button>
      
      }

{/*         
        <div class="action">
          <button type="button">Agregar Al Carrito</button>
        </div> */}
      </div>
    </div>
  </main>
</body>
    )
}

export default ItemDetail