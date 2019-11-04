import React from "react"

function ToDoItem(props){
  return(
    <div className="listItem">
    <input type="checkbox" className="checkbox lg-checkbox" checked={props.item.completed} onChange={function(){console.log("changed")}}/>
    <p className="todo">{props.item.text}</p> <br/>
    </div>
  )
}

export default ToDoItem
