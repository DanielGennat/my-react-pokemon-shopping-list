import { nanoid } from "nanoid";

export default function Form({addItem}) {

function buttonClick(event) {
    event.preventDefault();
    const form = event.target;
    const textInput = form.input.value;
    const newItem = {name: textInput, id: nanoid(), isChecked: false};
    addItem(newItem);
    form.reset();
    form.input.focus();
}



    return (
        <form onSubmit={buttonClick}>
          <label>
            <input id="input" type="text"/>
            <button type="submit">Add Item</button>
          </label>
        </form>
        )
    }