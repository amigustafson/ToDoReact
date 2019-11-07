import React from "react"




function ToDoItem(props){
  return(
    <div className="listItem">
        <input
          type="checkbox"
          className="checkbox lg-checkbox"
          checked={props.item.completed}
          onChange={function(event){props.handleChange(props.item.id)}}//Must be in a function, because what is passer in is the event, not the method
        />
        <p className="todo">{props.item.text} </p> <br/>
    </div>
  )
}

export default ToDoItem
