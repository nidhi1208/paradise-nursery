import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="./App.jsx">Home</a>
          <a href="./ProductList.jsx">Plants</a>
          <a href="./CartItem.jsx">🛒 Cart</a>
        </div>
      </nav>

      {/* Shopping Cart */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <a href="./ProductList.jsx">
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* Plant Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                {/* Plant Details */}
                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Delete */}
                  <button
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <h2>
                Total Amount: ${totalAmount.toFixed(2)}
              </h2>

              <button onClick={handleCheckout}>
                Checkout
              </button>

              <a href="./ProductList.jsx">
                <button>Continue Shopping</button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
