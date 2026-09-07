import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../features/CartSlice";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Add some beautiful plants to get started.</p>
        <Link className="get-started-btn" to="/plants">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="cart-layout">
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <article className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>Unit price: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

            <div className="quantity-controls">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1
                    })
                  )
                }
              >
                −
              </button>
              <strong>{item.quantity}</strong>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1
                    })
                  )
                }
              >
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        </article>
      ))}

      <section className="cart-summary">
        <div className="summary-row">
          <span>Total number of plants</span>
          <strong>{totalItems}</strong>
        </div>
        <div className="summary-row">
          <span>Total cost</span>
          <strong>${totalCost.toFixed(2)}</strong>
        </div>

        <div className="cart-actions">
          <button
            className="checkout-btn"
            onClick={() => alert("Coming Soon!")}
          >
            Checkout
          </button>
          <Link className="continue-btn" to="/plants">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CartItem;
