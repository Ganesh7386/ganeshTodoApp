import EachTodoPopupDetails from '../EachTodoPopupDetails';
import EachTodoPopupEdit from '../EachTodoPopupEdit';
import { FaTrash , FaCircle } from 'react-icons/fa';
import './index.css'


const EachTodo = (props)=> {
    // Here , Each Todo details are sent through Props
    const {todoDetails , handleDeleteTodo , toggleCompletion , handleEditingTodo}= props;
    const {todo} = todoDetails; 

    // below method is to return color name based on priority
    const returnColor = ()=> {
        switch(todoDetails.priority) {
            case 'low':
                return 'yellow';
            case 'Medium':
                return 'green';
            case 'High':
                return 'red';
            default:
                return;
        }
    }

    return (
        <li className = "eachTodoLiContainer">
        <div>
            <div className = "topContStyling">
            <p><span style = {{marginRight : '10px'}}><EachTodoPopupEdit eachTodoDetails = {todoDetails}  handleEditingTodo = {handleEditingTodo} /></span>{todo.length>25 ? todo.slice(0 , 25)+'...': todo}</p>
            <p><span><FaCircle size = {10} color = {returnColor()} /></span>{todoDetails.priority}</p>
            </div>
            <div className = "optionsContainer">
            <EachTodoPopupDetails eachTodoDetails = {todoDetails}  />
            <button type = "button" className = {`${todoDetails.isCompleted? 'completedStyling' : 'incompleteStyling'}`} onClick = {()=>{toggleCompletion(todoDetails.id)}} >{todoDetails.isCompleted? '✔️completed' : 'complete'}</button>
            <button type = "button" className = "deleteBtnStyling" onClick = {()=>{handleDeleteTodo(todoDetails.id)}} ><FaTrash size = {20}/></button>
            </div>
        </div>
        </li>
    )
}


export default EachTodo;