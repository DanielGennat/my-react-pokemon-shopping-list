import { useState } from "react";
import styled from "styled-components";



  export default function RenderList({list, remove, toggleItem}) {

    console.log(list);

    //const [isDone, setIsDone] = useState(false);

    function handleClick(event) {
      const deletedItem = event.target.id;
      remove(deletedItem);
    }

    function handleChange(event) {
      const changedItem = event.target.id;
      toggleItem(changedItem);
    }

    return (
        <ul>
            {list.map((item) => {
                return (
                    <Li key={item.id}>
                        <Label htmlFor={item.id} isDone={item.isDone}>
                          <input type="checkbox" id={item.id} onChange={handleChange}></input>
                          {item.name}
                        </Label>
                        <Button type="button" onClick={handleClick} id={item.id}>X</Button>
                    </Li>
                )
                })}
        </ul>
  )}


  const Li = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: 120px 140px;
    justify-content: center;
    justify-items: start;
    `;
    
    const Label = styled.label`
    text-decoration: ${prop => prop.isDone ? "line-through" : "none"};              
  `;

  const Button = styled.button`
    border: none;
    background-color: white;
    color: red;
    font-weight: bold;
  `;