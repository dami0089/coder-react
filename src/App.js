import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer';
import NotFound from './components/NotFound/indes';
import ItemDetailContainer from './containers/ItemdetailContainer';



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
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer/>}></Route>
        <Route path= '/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path= '/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path= '*' element={<NotFound/>}></Route>


      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
