import EachTodoPopupDetails from '../EachTodoPopupDetails';
import EachTodoPopupEdit from '../EachTodoPopupEdit';
import './index.css'


const EachTodo = (props)=> {
    const {todoDetails , handleDeleteTodo , toggleCompletion , handleEditingTodo}= props;
    const {todo} = todoDetails;

    return (
        <li className = "eachTodoLiContainer">
        <div>
            <div className = "topContStyling">
            <p><span style = {{marginRight : '10px'}}><EachTodoPopupEdit eachTodoDetails = {todoDetails}  handleEditingTodo = {handleEditingTodo} /></span>{todo.length>25 ? todo.slice(0 , 25)+'...': todo}</p>
            <p>{todoDetails.priority}</p>
            </div>
            <div className = "optionsContainer">
            <EachTodoPopupDetails eachTodoDetails = {todoDetails}  />
            <button type = "button" onClick = {()=>{toggleCompletion(todoDetails.id)}} >{todoDetails.isCompleted? 'completed' : 'complete'}</button>
            <button type = "button" onClick = {()=>{handleDeleteTodo(todoDetails.id)}} >Delete</button>
            </div>
        </div>
        </li>
    )
}


export default EachTodo;