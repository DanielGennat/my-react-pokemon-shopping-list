import { nanoid } from "nanoid";

export default function Form({AddItem}) {

function ButtonClick(event) {
    event.preventDefault();
    const form = event.target;
    const textInput = form.input.value;
    const newItem = {name: textInput, id: nanoid(), isChecked: false};
    AddItem(newItem);
    form.reset();
    form.input.focus();
}



    return (
        <form onSubmit={ButtonClick}>
          <label>
            <input id="input" type="text"/>
            <button type="submit">Add Item</button>
          </label>
        </form>
        )
    }