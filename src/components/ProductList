import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", category: "Low Maintenance", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "ZZ Plant", category: "Low Maintenance", price: 22, image: "https://images.unsplash.com/photo-1614594574681-9a5e9e7c1f47?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Pothos", category: "Low Maintenance", price: 15, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Spider Plant", category: "Low Maintenance", price: 16, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Peace Lily", category: "Flowering Plants", price: 24, image: "https://images.unsplash.com/photo-1596724878582-8b8fdb3b62e8?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Anthurium", category: "Flowering Plants", price: 28, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80" },
  { id: 7, name: "African Violet", category: "Flowering Plants", price: 19, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80" },
  { id: 8, name: "Orchid", category: "Flowering Plants", price: 32, image: "https://images.unsplash.com/photo-1498814117408-e396f5507073?auto=format&fit=crop&w=700&q=80" },
  { id: 9, name: "Monstera", category: "Tropical Plants", price: 35, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80" },
  { id: 10, name: "Bird of Paradise", category: "Tropical Plants", price: 42, image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80" },
  { id: 11, name: "Calathea", category: "Tropical Plants", price: 29, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80" },
  { id: 12, name: "Rubber Plant", category: "Tropical Plants", price: 27, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
  { id: 13, name: "Aloe Vera", category: "Succulents", price: 14, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80" },
  { id: 14, name: "Jade Plant", category: "Succulents", price: 17, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80" },
  { id: 15, name: "Echeveria", category: "Succulents", price: 13, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
  { id: 16, name: "Haworthia", category: "Succulents", price: 15, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80" },
  { id: 17, name: "Boston Fern", category: "Air Purifying", price: 21, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80" },
  { id: 18, name: "Areca Palm", category: "Air Purifying", price: 30, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="page">
      <h1 className="page-title">Our Houseplants</h1>
      <p className="page-subtitle">
        Choose from our collection of beautiful plants and add them to your cart.
      </p>

      {categories.map((category) => (
        <section className="category" key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some((item) => item.id === plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p>Healthy and carefully selected houseplant.</p>
                      <p className="price">${plant.price.toFixed(2)}</p>
                      <button
                        className="add-btn"
                        disabled={isAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
