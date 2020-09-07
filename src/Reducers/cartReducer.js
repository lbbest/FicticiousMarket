const {
  ITEMS_RECEIVED,
  EMPTY_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  SORT_ITEMS,
} = require("../Actions/cartActions");

// initialise redux state
const initialState = {
  // items
  items: [],
  // items in cart
  addedItems: [],
  // total price
  total: 0,
};

// cartReducer function with switch statement for incoming redux action
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_RECEIVED:
      // fill items state with API data payload
      return {
        ...state,
        items: action.payload.data,
      };
    case ADD_TO_CART:
      // set variable to hold item with id that matches action id param
      let addedItem = state.items.find((item) => item.id === action.id);
      // check if the action id already exists in addedItems array
      let existing_item = state.addedItems.find(
        (item) => action.id === item.id
      );
      // if item exists
      if (existing_item) {
        // add 1 to quantity
        addedItem.quantity += 1;
        // add price to total and update state
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        // quantity = 1
        addedItem.quantity = 1;
        // add price to total
        let newTotal = state.total + addedItem.price;
        // add item to addedItems array and update state
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case REMOVE_FROM_CART:
      // variable to hold the item to be removed that matches action id param
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      // variable to hold all other items to remain in cart
      let newItems = state.addedItems.filter((item) => action.id !== item.id);
      // variable to hold new price total after removing item
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      // update state
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };
    case ADD_QUANTITY:
      // variable to hold item to add quantity to that matches action id param
      let plusItem = state.items.find((item) => item.id === action.id);
      // add 1 to quantity
      plusItem.quantity += 1;
      // add price to total price
      let newTotalPlus = state.total + plusItem.price;
      // update state
      return {
        ...state,
        total: newTotalPlus,
      };
    case SUB_QUANTITY:
      // variable to hold item to subtract quantity from that matches action id param
      let minusItem = state.items.find((item) => item.id === action.id);
      // if the item's quantity is 1
      if (minusItem.quantity === 1) {
        // variable to hold all other items that don't match action id param
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        // variable to subtract price from total
        let newTotalMinus = state.total - minusItem.price;
        // update state
        return {
          ...state,
          addedItems: new_items,
          total: newTotalMinus,
        };
      } else {
        // else subtract from from quantity
        minusItem.quantity -= 1;
        // variable to subtract price from total
        let newTotalMinus = state.total - minusItem.price;
        // update state
        return {
          ...state,
          total: newTotalMinus,
        };
      }
    case EMPTY_CART:
      // update state with empty addedItems array
      return {
        ...state,
        addedItems: [],
        total: 0,
      };
    case SORT_ITEMS:
      // if action value param is price ascending
      if (action.value === "price-asc") {
        // sort items price low to high
        let priceAsc = state.items.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
        // update state
        return {
          ...state,
          items: priceAsc,
        };
      }
      // if action value param is price descending
      else if (action.value === "price-desc") {
        // sort items price high to low
        let priceDesc = state.items.sort((a, b) => {
          if (b.price < a.price) return -1;
          if (b.price > a.price) return 1;
          return 0;
        });
        // update state
        return {
          ...state,
          items: priceDesc,
        };
      }
      // if action value param is A-Z
      else if (action.value === "az") {
        // sort items alphabetically
        let az = state.items.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        // update state
        return {
          ...state,
          items: az,
        };
      }
      // if action value param is Z-A
      else if (action.value === "za") {
        // sort items in reverse alphabetical order
        let za = state.items.sort((a, b) => {
          if (b.name < a.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
        // update state
        return {
          ...state,
          items: za,
        };
      }
      // if action value param is popularity
      else if (action.value === "popularity") {
        // sort items by original order
        let popular = state.items.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
        // update state
        return {
          ...state,
          items: popular,
        };
      }
      break;
    default:
      return state;
  }
}

export default cartReducer;
