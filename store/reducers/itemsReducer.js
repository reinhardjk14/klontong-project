import {
  FETCH_ITEMS,
  FETCH_ITEM_BY_ID,
  ADD_NEW_ITEM,
} from '../action/actionType';

const initialState = {items: [], itemById: []};

export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {...state, items: action.payload};
    case FETCH_ITEM_BY_ID:
      return {...state, itemById: action.payload};
    case ADD_NEW_ITEM:
      return {...state};
    default:
      return state;
  }
}
