import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Revise JS" },
        { id: 2, task: "Revise DSA Level-1 & Dev" },
      ],
      curTask: "",
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      curTask: e.target.value,
    });
  }

  handleSubmit = () => {
    this.setState({
      tasks: [...this.state.tasks, { task: this.state.curTask, id: this.state.tasks.length + 1 }],
      curTask : "",
    });
  }

  handleDeleteTasks =(id)=>{
    let narr =[];                                         //narr-> new array
    narr = this.state.tasks.filter((taskObj)=>{
      return taskObj.id != id;
    });
    this.setState({
      tasks : [...narr]

    });
  };


  render() {
    return ( // JSX STARTS 
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        { // we have to use the curly braces again inside here, if we wanna write JS 
          this.state.tasks.map((taskObj) => { // MAP acts like a loop, it will loop over all the objects.
            return (
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=> this.handleDeleteTasks(taskObj.id)}>Delete</button>
              </li>
            );
          })
        }
      </div>
    )
  }
}


