import {useSelector, useDispatch} from 'react-redux';
import {
  deleteProduct,
  toggleAvailability,
  //   editProduct,
} from '../store/productSlice';
import {useState} from 'react';

export const ProductList = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const products = useSelector(state => state.products.products);
  //   let editMode = useSelector(state => state.editMode);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleEditBtnClick() {
    setEditMode(true);
  }

  function handleSaveEditedClick() {
    // setEditMode(false);
    // dispatch(editProduct(product));
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {editMode ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '150px',
                    margin: '0 auto',
                  }}
                >
                  <input
                    onChange={e => setName(e.target.value)}
                    placeholder="Product Name"
                    autoFocus
                    value={name}
                  />
                  <input
                    placeholder="Product Description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                  />
                  <input
                    placeholder="Product Price"
                    onChange={e => setPrice(e.target.price)}
                    value={price}
                  />
                </div>
              ) : (
                <>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </>
              )}
              <p>Available: {product.available ? 'Var' : 'Yok'}</p>
              <button
                type="button"
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                Delete product
              </button>
              <button
                type="button"
                onClick={() => dispatch(toggleAvailability(product.id))}
              >
                Toggle availability
              </button>
              {editMode ? (
                <button type="button" onClick={handleSaveEditedClick(product)}>
                  Save
                </button>
              ) : (
                <button type="button" onClick={handleEditBtnClick}>
                  Edit product
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
