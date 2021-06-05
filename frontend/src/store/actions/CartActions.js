import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "store/constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      city: data.city,
      name: data.name,
      image: data.image[0].imageUrl,
      isOfficialStore: data.isOfficialStore,
      price: data.price,
      stock: data.stock,
      product: data.product,
      seller: data.seller,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// export const adjustCart = (productId, qty) => async (dispatch, getState) => {
//   console.log("action qty: ", qty)
//   const { data } = await axios.get(`/api/products/${productId}`);
//   dispatch({
//     type: ADJUST_CART,
//     payload: {
//       id: data._id,
//       city: data.city,
//       name: data.name,
//       image: data.image[0].imageUrl,
//       isOfficialStore: data.isOfficialStore,
//       price: data.price,
//       stock: data.stock,
//       product: data.product,
//       seller: data.seller,
//       qty,
//     },
//   });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const increase = (item) => async (dispatch) => {
//   console.log(item)
//   dispatch({
//     type: INCREASE,
//     payload: item,
//   });
// };

// export const decrease = (payload) => async (dispatch) => {
//   dispatch({
//     type: DECREASE,
//     payload,
//   });
// };

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
