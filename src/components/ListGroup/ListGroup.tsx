import React, { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  foods: string[];
  //passing functions through props
  // onSelectedItem: (item: string) => void;
  // onSelectedFood: (food: string) => void;
}

const ListGroup = ({ items, foods }: Props) => {
  //for render list we use ARRAY

  // in type script to define array type we have to use   //string []

  //   const handleClick = (event: React.MouseEvent) => {
  //     console.log(event);
  //   };

  //let selectedIndex = 0;

  //Hooks
  //useState hooks

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [foodIndex, setFood] = useState(0); ///when setFood(index)   function called indexx value is assigned to foodIndex via useStatevalue

  return (
    //instead of  div tag react fragament is good    //1 milsecond for this component
    //if there were 1000 components there will be 1 sec lag

    <div>
      <ul className="list-group">
        {/* conditional rendering type1 */}
        {/* for check euality ===    for true ?   otherwise : */}

        {items.length === 0 ? <p>Items not found</p> : <p>Items are found</p>}

        {/* conditional rendering method 2 */}
        {/* for check euality ===  &&    and    then "True" */}
        {/* for this particular foods example nothing will print for array containing elemenets if empty below will print */}
        {foods.length === 0 && <p>Items are not found</p>}

        {/* map is function isisde map fuction we use arrow function */}

        {/* correct way to map function */}
        {/* onclick event handler */}
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-group-item active "
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                // onSelectedItem(item);
              }}
              //   event is default for eevent

              //instead of implementing arrow function hwere we did in outside of return

              //why??
              //   onClick={(event) => {
              //     console.log(event);
              //   }}
            >
              {item}
            </li>
          );
        })}

        {foods.map((food, index) => {
          return (
            <li
              key={index}
              className={
                foodIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setFood(index);
                // onSelectedFood(food);
              }}
            >
              {food}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
