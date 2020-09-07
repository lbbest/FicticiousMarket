import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { emptyCart } from "../Actions/cartActions";

const CartBox = (props) => {
  // handler function to call redux emptyCart action
  const handleEmpty = (id) => {
    props.emptyCart(id);
  };

  // initialise cart variable
  let cart;
  // if cart is empty
  if (props.cartItems.addedItems.length === 0) {
    // cart = no items
    cart = (
      <div className="cartitem-container">
        <p className="no-cart-items">No items in cart</p>
      </div>
    );
  } else {
    // map through items added to cart and render CartItem component*/
    cart = props.cartItems.addedItems.map((cartItem) => {
      // insert CartItem component
      return <CartItem cartItem={cartItem} key={cartItem.id} />;
    });
  }

  return (
    // component container div
    <div className="cartbox-container">
      {/*cartbox header container*/}
      <div className="cartbox-header">
        <p>Cart</p>
        <p>
          Total Items:{" "}
          <strong>
            {/*add up all added item quantities and return total*/}
            {props.cartItems.addedItems.reduce((tot, cartItem) => {
              return tot + cartItem.quantity;
            }, 0)}
          </strong>
        </p>
      </div>
      {/* insert cart conditional render */}
      {cart}
      {/*cart price container*/}
      <div className="cartbox-price">
        <p>Total Price: </p>
        <p>
          {/*total cart price (set to 2 decimal places)*/}
          <strong>€{props.cartItems.total.toFixed(2)}</strong>
        </p>
      </div>
      {/*cartbox button conatiner div*/}
      <div className="cartbox-btns">
        <button className="checkout-btn">
          <strong>Checkout</strong>
        </button>
        <button
          className="empty-btn"
          // call emptyCart handler function onclick
          onClick={() => {
            handleEmpty();
          }}
        >
          Empty Cart
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

// map redux action to props
const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {
      dispatch(emptyCart());
    },
  };
};

// subscribe component to redux
export default connect(mapStateToProps, mapDispatchToProps)(CartBox);
