import React from "react";

const ListGroup = () => {
  //for render list we use ARRAY
  const items: string[] = ["Colombo", "Kandy", "Galle", "Hambantota", "Matara"];
  // in type script to define array type we have to use   //string []

  const foods: string[] = [];
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
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}

        {foods.map((food, index) => {
          return (
            <li key={index} className="List-group-item">
              {food}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
