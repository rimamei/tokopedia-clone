import {
  CART_ADD_ITEM,
  ADJUST_CART,
  INCREASE,
  DECREASE,
} from "store/constants/cartConstants";

export const sumTotal = () => {};

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find((x) => x.id === action.payload.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id
              ? { ...x, qty: x.qty + action.payload.qty }
              : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case ADJUST_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.id === action.payload.id ? { ...x, qty: +action.payload.qty } : x
        ),
      };
    case INCREASE:
      return {};
    case DECREASE:
      return {};
    default:
      return state;
  }
};
