import { CART_ADD_ITEM, ADJUST_CART, GET_QTY } from "store/constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? { ...x, qty: x.qty + item.qty } : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case ADJUST_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.id === item.id ? { ...x, qty: +item.qty } : x
        ),
      };
    case GET_QTY:
      return {
        ...state.cartItems
      }
    default:
      return state;
  }
};
