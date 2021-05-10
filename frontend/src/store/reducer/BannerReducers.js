import {
    BANNER_REQUEST,
    BANNER_SUCCESS,
    BANNER_FAIL,
  } from "store/constants/bannerConstants";
  
  export const bannerReducer = (state = { loading: true, banner: [] }, action) => {
    switch (action.type) {
      case BANNER_REQUEST:
        return { loading: true };
      case BANNER_SUCCESS:
        return { loading: false, banner: action.payload };
      case BANNER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  