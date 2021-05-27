import axios from "axios";
import {
  CART_ADD_ITEM,
  ADJUST_CART,
  GET_QTY,
  DECREASE,
  INCREASE,
} from "store/constants/cartConstants";

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

export const adjustCart = (productId, qty) => async (dispatch) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADJUST_CART,
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
};

export const getQty = (productId) => async (dispatch) => {
  console.log('Id: ', productId)
  dispatch({ type: GET_QTY, payload: productId });
};

export const increase = (payload) => async (dispatch) => {
  dispatch({
    type: INCREASE,
    payload,
  });
};

export const decrease = (count) => async (dispatch) => {
  dispatch({
    type: DECREASE,
    payload: count,
  });
};
