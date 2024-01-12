import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: " red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentin Italian cuisine , 6 creative dishes to choose formm. All
            from our stone oven , all organic, all delicious .
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We'restill working on our menu. Please come back leater</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="tomanto , mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject);

  //if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const opneHour = 9;
  const closeHour = 21;
  const isOpen = hour >= opneHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= opneHour && hour <= closeHour) alert("we're currently open!");
  //else alert("Sorry we're closed");
  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you bteween {opneHour}:00 and {closeHour}:00
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} opneHour={opneHour} />
      ) : (
        <p>
          We're happy to welcome you bteween {opneHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "we're currently open");
}

function Order({ closeHour, opneHour }) {
  return (
    <div className="order">
      <p>
        We're open form {opneHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
