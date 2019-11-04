import React from "react"
import ReactDOM from "react-dom"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"


class App extends React.Component{
   constructor(){
     super()
     this.state={
       todos: todosData

     }
   }
  render(){
    const toDoItems = this.state.todos.map(function(item){
        return(
       <ToDoItem key={item.id} item={item}/>)}
    )
    return(
        <div >

        <h1>TODO-LIST</h1>

        <div className="frame">
        {toDoItems}
        </div>

        </div>
    )
  }
}


export default App;
