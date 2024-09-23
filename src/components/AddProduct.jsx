import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../store/productSlice';

export const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addProduct({name, description, price: parseFloat(price), available}),
    );
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />

      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          value={name}
          onChange={e => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">Add product</button>
    </form>
  );
};
