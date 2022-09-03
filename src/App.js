import { useState } from 'react';
import './App.css';
import DefaultList from './components/DefaultList';
import Form from './components/Form';
import Header from './components/Header';
import RenderList from './components/RenderList';


function App() {

  const [shoppingList, setShoppingList] = useState(DefaultList);

  function AddItem(newItem) {
    setShoppingList([newItem, ...shoppingList]);
  }

  return (
    <div className="App">
      <Header />
      <Form AddItem={AddItem}/>
      <RenderList list={shoppingList}/>
    </div>
  );
}

export default App;
