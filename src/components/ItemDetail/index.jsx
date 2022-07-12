import React from 'react'
import '../ItemDetail/style.scss'

const ItemDetail = ({product}) => {
    console.log(product);
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
        
        <div class="action">
          <button type="button">Agregar Al Carrito</button>
        </div>
      </div>
    </div>
  </main>
</body>
    )
}

export default ItemDetail