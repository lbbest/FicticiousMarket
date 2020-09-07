import axios from "axios";

export const ITEMS_RECEIVED = "ITEMS_RECEIVED";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";
export const SORT_ITEMS = "SORT_ITEMS";

// getItem action to call API
export const getItems = (url) => {
  return function (dispatch) {
    axios.get("https://cors-anywhere.herokuapp.com/" + url).then((data) => {
      // dispatch API data in payload
      dispatch({
        type: ITEMS_RECEIVED,
        payload: data,
      });
    });
  };
};

// addToCart action with param for item id
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

// removeFromCart action with param for item id
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

// subtractQuantity action with param for item id
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

// addQuantity action with param for item id
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

// emptyCart action
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

// sortItem action with param for <select> element value
export const sortItems = (value) => {
  return {
    type: SORT_ITEMS,
    value,
  };
};
