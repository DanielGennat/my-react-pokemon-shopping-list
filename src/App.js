import { useState } from 'react';
import './App.css';
import DefaultList from './components/DefaultList';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';


function App() {

  const [shoppingList, setShoppingList] = useState(DefaultList);

  function AddItem(newItem) {
    setShoppingList([newItem, ...shoppingList]);
  }

  return (
    <div className="App">
      <Header />
      <Form AddItem={AddItem}/>
      <ListItem list={shoppingList}/>
    </div>
  );
}

export default App;
