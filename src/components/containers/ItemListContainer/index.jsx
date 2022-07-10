import React, {useEffect, useState}  from 'react';
import ItemList from '../../itemList';
// import yerba from '../../../assets/yerba.jpeg'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState(null);

    useEffect(()=>{
        const getProductos = async() => {
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                console.log(data);
                setProductos(data);
            } catch (error) {
                console.log("Hubo un error: ");
                console.log(error);
            }
        }

        getProductos()
    },[])

    console.log(productos);



// const [color, setColor] = useState("blue");


// const cambiarColor = () => {
//     if (color === "blue") setColor ("red")
//     else setColor("blue");
// }
// useEffect(()=>{
//     console.log("Se monto el componente")
    
// },[])
// useEffect(()=>{
//     console.log("Se monto/actualizo el componente")
    
// },[color])

//     const onAdd = (count) =>{
//         console.log (`Se agrego al carrito ${count} productos.`)
//     }


   return (
        <div>
            <p>{greeting}</p>
            {productos ?
            <ItemList products ={productos}/>
            :
            null
            }
            {/* <p>{color}</p> */}
            {/* <button onClick={cambiarColor}> Cambiar el color a red</button> */}
            {/* <img src={yerba} alt="yerba" height='500' width='500' /> */}
            {/* <ItemCounts initial={1} stock = {10} onAdd ={onAdd}/> */}
        </div>
        
    )
}

export default ItemListContainer 