import {FETCH_ITEMS, FETCH_ITEM_BY_ID} from '../action/actionType';

const initialState = {items: [], itemById: []};

export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {...state, items: action.payload};
    case FETCH_ITEM_BY_ID:
      return {...state, itemById: action.payload};
    default:
      return state;
  }
}
