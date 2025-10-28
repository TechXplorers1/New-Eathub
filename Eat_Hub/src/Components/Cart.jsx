import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CartIcon from "../assets/Cart.png";
import "./Cart.css";

const Cart = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // In a real app, this would come from a state management solution (e.g., Redux, Context)
  const cartItemCount = 0; // Set to 0 to show the empty cart state

  return (
    <>
      <Button 
        className="eh-cart-btn" 
        onClick={() => setShowSidebar(true)}
      >
        <img src={CartIcon} alt="cart" width="20" />
        {/* Optional: Add a badge for cart item count if > 0 */}
        {/* {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>} */}
      </Button>

      <div className={`cart-sidebar ${showSidebar ? "show" : ""}`}>
        <div className="cart-header">
          <h5>Your Cart ({cartItemCount})</h5>
          <button
            className="cart-close-btn"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
        </div>

        <div className="cart-body">
          {cartItemCount === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-cart-icon">
                {/* Shopping cart SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#ced4da" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </div>
              <p className="cart-empty-title">Your cart is empty</p>
              <p className="cart-empty-message">Add items from a restaurant to get started.</p>
              <Button 
                variant="warning" 
                className="start-shopping-btn"
                onClick={() => setShowSidebar(false)} // Simply closes the sidebar for now
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            // Cart contents display logic goes here (e.g., list of items, subtotal, checkout button)
            <div className="full-cart-content">
              {/* List of items */}
            </div>
          )}
        </div>
      </div>

      {showSidebar && (
        <div className="cart-overlay" onClick={() => setShowSidebar(false)} />
      )}
    </>
  );
};

export default Cart;