import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzasBlock, PizzaLoadingBlock } from '../components';
import { fetchPizzas } from '../redux/action/pizzas';
import { setCategory, setSortBy } from '../redux/action/filters';

const categoriesNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onClickSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzasBlock key={item.id} isLoaded={true} {...item} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
