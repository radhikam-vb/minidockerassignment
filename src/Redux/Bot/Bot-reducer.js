import * as actionTypes from "./Bot-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Hot Bot",
      description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics ",
      cagr:22.63,
      index:2383.36,
     },
    {
      id: 2,
      title: "Cool Bot",
      description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      cagr: 36.02,
      index:1104.76,
      },
    {
      id: 3,
      title: "Options Bot",
      description:"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      cagr: 28.54,
      index:968.47,
    
    },
  ],
  cart: [],
  currentItem: null,
};

const BotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (botsdetails) => botsdetails.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default BotReducer;