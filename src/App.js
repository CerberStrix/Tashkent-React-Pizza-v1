import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizzas';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, filter }) => {
    return {
      items: pizzas.items,
      sortBy: filter.sortBy,
    };
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, [dispatch]);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
