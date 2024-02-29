import React from "react";
import ReactDOM from "react-dom/client";
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
    photoName: "pizzas/MargheritaPizza.jpg",
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
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 15,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 15,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){

  const style = {};

  // const style = { color : "Green", fontSize : " 30px", textTransform: "uppercase"};


  return (
    <header className='header'>
      <h1 style={style} className='header'>
        Fast React Pizza Company.
      </h1>
    </header>
  );
}

function Menu() {

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;


  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className="pizzas">
        { numPizzas > 0 ? (
          pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />
        )): <p>We're working on our menu. Please come back later :)</p>}
      </ul>

      

      {/* <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> 
      <Pizza 
        name= "Focaccia"
        ingredients= "Bread with italian olive oil and rosemary"
        price= {12}
        photoName= "pizzas/focaccia.jpg"
      /> 
      <Pizza /> 
      <Pizza />  */}
    </main>
  );  
}

function Pizza({ pizzaObj}){
  // console.log(props);

  if(pizzaObj.soldOut) return null;

  return (
    <li className='pizza'>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price+3}</span>
      </div>
    </li>

  );
}

function Footer(){

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <=closeHour;
  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
        // <p>Hello World</p>
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )
      }
    </footer>
  );
}

function Order(props){
  return(
    <div className="order">
      <p>
        We're open until until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


