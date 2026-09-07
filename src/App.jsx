import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero-content">
          <p className="eyebrow">Bring nature home</p>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful houseplants that add freshness, colour and calm
            to every room.
          </p>
          <Link className="get-started-btn" to="/plants">
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
