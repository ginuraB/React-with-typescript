import React from "react";
import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button";

function App() {
  // const [items, setItems] = useState([
  //   "Ambalangoda",
  //   "Colombo",
  //   "Kandy",
  //   "Matara",
  // ]);
  // const [foods, setFoods] = useState(["Pizza", "Burger", "Fries", "Icecream"]);

  const [isLoading, setLoading] = useState(false);

  const [person, setPerson] = useState({
    name: {
      firstName: "Ginura",
      lastName: "Binath",
    },
    address: {
      city: "Ambalangoda",
      country: "Sri Lanka",
      postalCode: "80300",
      street: {
        name: "Kularathne Cross Road",
        location: "Halwathura North", //nested object
      },
    },
  });

  const handleClickMe = () => {
    setPerson({ ...person, name: { ...person.name, firstName: "Pasanjith" } });
  };

  const handleChangeCity = () => {
    setPerson({ ...person, address: { ...person.address, city: "Colombo" } });
  };
  return (
    <>
      <h1>{person.name.firstName}</h1>
      <h2>{person.address.city}</h2>
      <button onClick={handleClickMe}>Click me </button>
      <button onClick={handleChangeCity}>ChnageCitry</button>
    </>
  );
}

export default App;
