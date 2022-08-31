import styled from "styled-components";

  export default function ListItem() {
      const shoppingList = [
          { name: "Potion", id: "1" },
          { name: "Pokeball", id: "2" },
          { name: "Para Healer", id: "3" },
          { name: "Superball", id: "4" },
          { name: "Masterball", id: "5" },
        ];

    return (
        <ul>
            {shoppingList.map((item) => {
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

