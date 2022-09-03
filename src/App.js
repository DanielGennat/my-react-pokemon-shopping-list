import { useState } from 'react';
import './App.css';
import DefaultList from './components/DefaultList';
import Form from './components/Form';
import Header from './components/Header';
import RenderList from './components/RenderList';

console.clear();

function App() {

  const [shoppingList, setShoppingList] = useState(DefaultList);

  function addItem(newItem) {
    setShoppingList([newItem, ...shoppingList]);
  }

  function removeItem(deletedItem) {
    setShoppingList(shoppingList.filter((item) => item.id !== deletedItem));
    }

   function toggleItem(changedItem) {
      const updatedList = shoppingList.map((item) => {
        if (item.id === changedItem) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      setShoppingList(updatedList);
    }

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem}/>
      <RenderList list={shoppingList} remove={removeItem} toggleItem={toggleItem}/>
    </div>
  );
}

export default App;
