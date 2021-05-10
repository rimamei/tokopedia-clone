import {
  BANNER_FAIL,
  BANNER_REQUEST,
  BANNER_SUCCESS,
} from "store/constants/bannerConstants";
import axios from "axios";

export const listBanner = () => async (dispatch) => {
  dispatch({
    type: BANNER_REQUEST,
  });
  try {
    const data = await axios.get("/api/banner");
    dispatch({ type: BANNER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BANNER_FAIL, payload: error.message });
  }
};
