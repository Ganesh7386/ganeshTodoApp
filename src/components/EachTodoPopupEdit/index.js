import {useState} from 'react';
import './index.css';

const EachTodoPopupEdit = (props)=> {
    const {eachTodoDetails , handleEditingTodo} = props;

    const [todo , setTodo] = useState(eachTodoDetails.todo);
    const [priority , setPriority] = useState(eachTodoDetails.priority);
    const [toDisplay , setToDisplay] = useState(false);

    const handleChangingTodo = (event)=> {
        setTodo(event.target.value);
    }

    const handleModifyingTodos = ()=> {
        handleEditingTodo(eachTodoDetails.id , todo , priority);
        setToDisplay(false);
    }
    
    return (
        <>
        <button type = "button" onClick = {()=>{setToDisplay(true)}}>edit</button>
        <div className = {`editingPopupContainer ${toDisplay? 'toDisplayStyling' : 'toHideStyling'}  `}>
        <p>Edit your todo</p>
        <div>
        <input value = {todo} onChange = {handleChangingTodo}  />
        </div>
        <div>
        <select className = "prioritySelectElementStyling" value = {priority} onChange = {(e)=>{setPriority(e.target.value)}}>
            <option value = "low">Low</option>
            <option value = "Medium">Medium</option>
            <option value = "High">High</option>
        </select>
        </div>
        <p>Todo is : {todo}</p>
        <p>Priority is : {priority}</p>
        <button type = "button" onClick = {()=>{setToDisplay(false)}}>Cancel</button>
        <button type = "button" onClick = {handleModifyingTodos} >Ok</button>
        </div>
        </>
    )
}


export default EachTodoPopupEdit;