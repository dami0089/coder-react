import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemCounts from './components/ItemCounts';
import NavBar from './components/NavBar/NavBar';

function App() {
  // let nombre = "Dami";

  return (
    <div className="container">
      <NavBar/>
     
      {/* <ItemListContainer greeting = "Hola Coders!"/> */}

      <ItemListContainer greeting = "Hola Coders!"/>

      <ItemCounts/>
      

     


    </div>
  );
}

export default App;
