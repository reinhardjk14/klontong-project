import {FETCH_ITEMS, FETCH_ITEM_BY_ID, ADD_NEW_ITEM} from './actionType';
import axios from 'axios';
const basetUrl =
  'https://crudcrud.com/api/0a6871cdb24d4398b73d59f95ee18a61/klontong';

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

export const addItemSuccess = payload => {
  return {
    type: ADD_NEW_ITEM,
    payload,
  };
};

export const fetchItems = url => {
  return (dispatch, getState) => {
    return axios.get(url);
  };
};

export const fetchItemById = url => {
  return async (dispatch, getState) => {
    try {
      let {data} = await axios.get(url);
      dispatch(fetchItemByIdSuccess(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addNewItem = (payload, url) => {
  return async (dispatch, getState) => {
    try {
      let {data} = await axios.post(url, {
        categoryName: payload.categoryName,
        name: payload.name,
        description: payload.description,
        weight: payload.weight,
        image: payload.image,
        price: payload.price,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
