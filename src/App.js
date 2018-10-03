import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: "",
      newTodo: ""
    };
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  addNewTodo = event => {
    event.preventDefault();
    console.log(this.state.todoList);
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ""
    });
    console.log(this.state.todoList);
  };

  render() {
    return (
      <div className="App">
        <TodoList todoList={this.state.todoList} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          newTodo={this.state.newTodo}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
