import logo from './logo.svg';
import './App.css';
// import Discovery from './container/Discovery';
// import Holidays from './container/Holidays';


// import ReactRouter from './container/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
import InventoryList from './component/InventoryList';
import Count from './component/Count.js';
import Constant from './component/constant';
import Function from './component/function';


function App() {
  return (
    <BrowserRouter>
      {/* <ReactRouter /> */}
      {/* <InventoryList /> */}
      {/* <Count /> */}
      <Constant />
      <Function />
    </BrowserRouter> 
  );
}  

export default App;