import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [active, setActive] = useState(null);

  const onSelectItem = (index) => {
    setActive(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={active === null ? 'active' : ''} onClick={() => setActive(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={active === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
