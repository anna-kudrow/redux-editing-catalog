import {useSelector, useDispatch} from 'react-redux';
import {
  deleteProduct,
  toggleAvailability,
  // editProduct,
  updateProduct,
} from '../store/productSlice';
import {useState} from 'react';

export const ProductList = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const products = useSelector(state => state.products.products);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function saveEdited(product) {
    dispatch(
      updateProduct({
        ...product,
        name: name,
        description: description,
        price: price,
      }),
    );
    console.log(product);
    setEditMode(false);
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
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
              ) : (
                <>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Available: {product.available ? 'Yes' : 'No'}</p>
                </>
              )}
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
                <button type="button" onClick={() => saveEdited(product)}>
                  Save
                </button>
              ) : (
                <button type="button" onClick={() => setEditMode(true)}>
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
