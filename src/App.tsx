//import Card from "./components/Card";
import ListGroup from "./components/ListGroup";

function App() {
  const items: string[] = ["Colombo", "Kandy", "Galle", "Hambantota", "Matara"];
  const foods: string[] = ["Chicekn", "Pork", "Fish", "Mutton"];

  return (
    //React fragments
    <>
      <ListGroup items={items} foods={foods} />
      {/* <Card /> */}
    </>
  );
}
export default App;
