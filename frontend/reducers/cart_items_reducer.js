import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../actions/cart_item_actions';

const cartItemsReducer = (state ={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.cartItems)
    case RECEIVE_CART_ITEM:
      nextState[action.cartItem.id] = action.cartItem;
      return nextState;
    case REMOVE_CART_ITEM:
      delete nextState[action.cartItemId];
      return nextState;
    default:
      return state;
  }
}

export default cartItemsReducer;