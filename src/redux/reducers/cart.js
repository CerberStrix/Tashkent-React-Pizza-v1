const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'CLEAR_CART':
      return {
        totalCount: 0,
        totalPrice: 0,
        items: {},
      };
    case 'REMOVE_CART_ITEM':
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    case 'PLUS_CART_ITEM': {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

      const allItems = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      const totalCount = Object.keys(allItems).reduce(
        (sum, key) => allItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(allItems).reduce(
        (sum, key) => allItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: allItems,
        totalPrice: totalPrice,
        totalCount: totalCount,
      };
    }

    case 'MINUS_CART_ITEM': {
      const allItems = {
        ...state.items,
      };

      const currentItems = state.items[action.payload].items;
      const newItems =
        currentItems.length > 1 ? state.items[action.payload].items.slice(1) : currentItems;

      const totalCount = Object.keys(allItems).reduce(
        (sum, key) => allItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(allItems).reduce(
        (sum, key) => allItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
