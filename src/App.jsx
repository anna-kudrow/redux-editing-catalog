import './App.css';
import {AddProduct} from './components/AddProduct';
import {ProductList} from './components/ProductList';
import {useState} from 'react';

function App() {
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <AddProduct />
      <ProductList editMode={editMode} setEditMode={setEditMode} />
    </div>
  );
}

export default App;
