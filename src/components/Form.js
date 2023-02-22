import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: "",
      todoList: [],
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.inputData],
      inputData: "",
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form onSubmit={this.submitForm}>
                <div class="mb-3">
                  <h1>Todo App</h1>
                  <input
                    type="text"
                    class="form-control"
                    id="todo-email"
                    placeholder="Try typing : Do exercise."
                    value={this.state.inputData}
                    onChange={(e) =>
                      this.setState({
                        inputData: e.target.value,
                      })
                    }
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <ul className="list-group my-3">
                  {this.state.todoList.map((value) => {
                    return <li className="list-group-item">{value}</li>;
                  })}
                </ul>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
