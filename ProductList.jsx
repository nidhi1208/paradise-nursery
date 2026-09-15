import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b35?w=400",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400",
  },
  {
    id: 3,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594576370-6c9f1f6f1f1d?w=400",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 32,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 11,
    name: "Burro's Tail",
    price: 26,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400",
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    price: 21,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    price: 30,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
  },
  {
    id: 14,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566920397343-4a2b2b7f4d8f?w=400",
  },
  {
    id: 15,
    name: "African Violet",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400",
  },
  {
    id: 16,
    name: "Anthurium",
    price: 38,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400",
  },
  {
    id: 17,
    name: "Begonia",
    price: 29,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-a8e0b5348f5b?w=400",
  },
  {
    id: 18,
    name: "Jasmine",
    price: 25,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="./App.jsx">Home</a>
          <a href="./ProductList.jsx">Plants</a>
          <a href="./CartItem.jsx">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      {/* Page Heading */}
      <header className="products-header">
        <h1>Our Plants</h1>
        <p>
          Discover beautiful plants for your home and create your own
          green paradise.
        </p>
      </header>

      {/* Product Categories */}
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ${plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
