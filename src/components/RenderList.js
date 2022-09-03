import { useState } from "react";
import styled from "styled-components";



  export default function RenderList({list, remove}) {

    console.log(list);

    function handleClick(event) {
      const deletedItem = event.target.id;
      remove(deletedItem);
    }

    return (
        <ul>
            {list.map((item) => {
                return (
                    <Li key={item.id}>
                        <label htmlFor={item.id}>
                          <input type="checkbox" id={item.id}></input>
                          {item.name}
                        </label>
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

  const Button = styled.button`
    border: none;
    background-color: white;
    color: red;
    font-weight: bold;
  `;