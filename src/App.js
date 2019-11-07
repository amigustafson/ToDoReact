

import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"


class App extends React.Component{
   constructor(){
     super()
     this.state={
       todos: todosData
     }
     this.handleChange = this.handleChange.bind(this)
   }

   handleChange(id){
     this.setState(function(prevState){
       //Create new array based on the old array as soon as event happens
       //Map function flips checkbox true/false
       const updatedToDos = prevState.todos.map(function(todo){
         if(todo.id === id){
           todo.completed = !todo.completed
         }
         return todo
       })
       return{
         todo: updatedToDos
       }
     })
   }

  render(){
    //Create new array of the todoData and push through ToDoItem-component
    const toDoItems = this.state.todos.map(item => {
          return(<ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)})
    return(
        <div>
          <h1>TODO-LIST</h1>
            <div className="frame">
              {toDoItems}
            </div>
        </div>
    )
  }
}


export default App;
