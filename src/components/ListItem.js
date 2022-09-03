import { useState } from "react";
import styled from "styled-components";



  export default function ListItem({list}) {

    console.log(list);

    return (
        <ul>
            {list.map((item) => {
                return (
                    <Li key={item.id}>
                        <input type="checkbox" id={item.id}></input>
                        <label htmlFor={item.id}>{item.name}</label> 
                    </Li>
                )
                })}
        </ul>
  )}


  const Li = styled.li`
    list-style: none;
  `;

