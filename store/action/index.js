import {FETCH_ITEMS, FETCH_ITEM_BY_ID} from './actionType';
import axios from 'axios';

export const fetchItemsSuccess = payload => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};

export const fetchItemByIdSuccess = payload => {
  return {
    type: FETCH_ITEM_BY_ID,
    payload,
  };
};

export const fetchItems = url => {
  return (dispatch, getState) => {
    return axios
      .get(url)
      .then(response => {
        dispatch(fetchItemsSuccess(response.data));
      })
      .catch(err => {
        console.error(err);
      });
  };
};
