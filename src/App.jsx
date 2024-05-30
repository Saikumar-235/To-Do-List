import { useState } from "react";
import Form from "./components/Form"
import "./global.css";
import { v4 as uuidv4 } from "uuid";
import Todolist from "./components/Todolist"
const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "",
    trainer: "",
    id:uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: state.id,
      course: state.course,
      trainer: state.trainer,
    };

    let finalItems = [...state.items, newItem];

    setState({
      items: finalItems,
      id: uuidv4(),
      course: "",
      trainer: "",
    });
  };

  console.log(state);
  let handleDelete = (x) => {
    let filteredItems = state.items.filter((items) => items.id!=x)
    console.log(filteredItems);
    setState({...state,items: filteredItems});
  }
  let handleUpdate = (x) => {
    let restItem=state.items.filter((items) => items.id!=x)
    let selectedItem=state.items.find((items) => items.id==x);
    setState({
      ...state,
      items:restItem,
      course:selectedItem.course,
      trainer: selectedItem.trainer
    })
  }

  return (
    <>
      <article>
        <h1>ToDo List</h1>
        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Todolist items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </main>
      </article>
    </>
  );
};

export default App;
