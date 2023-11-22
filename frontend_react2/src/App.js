import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProducts from './components/ShowProducts';
import EditProducts from './components/EditProducts';
import CreateProduct from './components/CreateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/> } />
          <Route path='/create' element={ <CreateProduct/> } />
          <Route path='/edit/:id' element={ <EditProducts/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;