import React from 'react';
// import yerba from '../../../assets/yerba.jpeg';
import {useState} from 'react';
import '../ItemCounts/styles.css'
const ItemCounts = () => {

    const [count, setCount] = useState (1);
    const [stock, setStock] = useState (10);
    const [mensaje, setMensaje] = useState("")



    const countHandler = () =>{
        if (stock<=10 && stock>0 && count <10) {
            setCount(count+1);
            setStock(stock-1)

        if (stock<=4 && stock > 1){
                setMensaje("Ultimas 2 unidades")
            }
        if (stock===3){
                setMensaje("Ultima Unidad")
            }      
        } 

        if (count === 9){
            setMensaje("No queda mas Stock!")
        }
        console.log(count)
    }

    const discountHandler = () =>{
        if (count>1 && stock<=10 ) {
            setCount(count-1);
            setStock(stock+1)
            setMensaje("Se elimino una unidad con exito")        
        }
    }

    return (
        <div className="contenedor">
            <div className="titulo">
                <p className="camisa">Camisa</p>
            </div>

            <div className="area">
                <button className="signo" onClick={discountHandler}>-</button>
                <p className="cuenta">{count}</p>
                <button onClick={countHandler} className="signo">+</button>
            </div>
                <button className="agregarCarro"><p className="fuente">Agregar al Carrito</p></button> 
            <p className="camisa">{mensaje}</p>                    
        </div>
    )
}

export default ItemCounts  