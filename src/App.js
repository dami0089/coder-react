import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  // let nombre = "Dami";

  // const [containerVisible,setContainerVisible] = useState(true);

  // const onHideContainer = () => {
  //   setContainerVisible(false)
  // }
  // const onShowContainer = () => {
  //   if (containerVisible === false){
  //   setContainerVisible(true)
  //   }
  // }

  return (
    <div className="container">
      <NavBar/>
     
      {/* <ItemListContainer greeting = "Hola Coders!"/> */}

      {/* {
        containerVisible ? */}
        <ItemListContainer greeting = "Hola Coders!"/>
          {/* <h2>Este es el intem list container</h2> */}
       
        {/* : null          */}
      {/* } */}
      
      {/* <button onClick={onHideContainer}> Desmontar ItemListContainer</button>
      <button onClick={onShowContainer}> Mostrarno ItemListContainer</button> */}

      

     


    </div>
  );
}

export default App;
