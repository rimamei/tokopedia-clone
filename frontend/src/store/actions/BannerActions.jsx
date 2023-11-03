import {
  BANNER_FAIL,
  BANNER_REQUEST,
  BANNER_SUCCESS,
} from '@/store/constants/bannerConstants';
import axios from 'axios';

export const listBanner = () => async (dispatch) => {
  dispatch({
    type: BANNER_REQUEST,
  });
  try {
    const { data } = await axios.get('/v1/banner');
    const { banner } = data;
    dispatch({ type: BANNER_SUCCESS, payload: banner });
  } catch (error) {
    dispatch({ type: BANNER_FAIL, payload: error.message });
  }
};
