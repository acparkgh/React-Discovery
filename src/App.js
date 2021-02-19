import logo from './logo.svg';
import './App.css';
// import Discovery from './container/Discovery';
// import Holidays from './container/Holidays';


import ReactRouter from './container/ReactRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter> 
  );
}

export default App;