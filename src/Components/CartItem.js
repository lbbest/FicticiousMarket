import React from "react";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
} from "../Actions/cartActions";
import { connect } from "react-redux";

const CartItem = (props) => {
  // handler function to call removeFromCart redux action
  const handleRemove = (id) => {
    props.removeFromCart(id);
  };

  // handler function to call addQuantity redux action
  const handleAddQuantity = (id) => {
    props.addQuantity(id);
  };

  // handler function to call subtractQuantity redux action
  const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id);
  };

  return (
    // component container div
    <div className="cartitem-container">
      {/*cartitem details container*/}
      <div>
        {/*cart item image*/}
        <img
          className="cartitem-img"
          src={props.cartItem.image}
          alt="Cart Item"
        />
        {/*cart item details container*/}
        <div className="cartitem-details">
          {/*individual cart item quantity and name*/}
          <p>
            {props.cartItem.quantity} x <strong>{props.cartItem.name}</strong>
          </p>
          {/*cart item price (to 2 decimal places)*/}
          <p>€{props.cartItem.price.toFixed(2)}</p>
        </div>
      </div>
      <div>
        {/*quantity buttons container div*/}
        <div className="cartitem-quantity-btn-container">
          {/*add quantity button*/}
          <button
            className="cartitem-quantity-btn"
            // call addQuantity handler function onclick
            onClick={() => {
              handleAddQuantity(props.cartItem.id);
            }}
          >
            +
          </button>
          {/*subtract quantity button*/}
          <button
            className="cartitem-quantity-btn"
            // call subtractQuantity handler function onclick
            onClick={() => {
              handleSubtractQuantity(props.cartItem.id);
            }}
          >
            -
          </button>
        </div>
        {/*remove cart item button*/}
        <button
          className="cartitem-remove-btn"
          // call removeItem handler function onclick
          onClick={() => {
            handleRemove(props.cartItem.id);
          }}
        >
          <strong>x</strong>
        </button>
      </div>
    </div>
  );
};

// map redux state to props
const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

// map redux actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

// subscribe component to redux
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
