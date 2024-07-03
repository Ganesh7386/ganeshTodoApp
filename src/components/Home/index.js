import {useState , useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import './index.css';

import EachTodo from '../EachTodo';


const Home = ()=>{
    const [todoList , setTodoList] = useState([]);
    const [todoValue , setTodoValue] = useState("");
    const [priority , setPriority] = useState('low');
    const [errorMsg , setErrorMsg] = useState("");
    // below method is used , when application is launched.It retrieves data stored in Local Storage and set as value in todoList state .
    const getStoredTodos = ()=> {
        const storedList = localStorage.getItem('mytodo');
        // console.log(JSON.parse(storedList));
        if(storedList === null) {
            console.log("no stored todo list");
        }
        else {
            setTodoList(JSON.parse(storedList));
        }
    }
    const handleChangeInput = (event)=> {
        setTodoValue(event.target.value);
    }

    
    // below method is for adding a Todo item document in a list
    const handleAddingTodo = ()=> {
        if(todoValue === "") {
            setErrorMsg("Please enter a todo");
        }
        else {
        const newTodo = {
            id : uuidv4(),
            todo : todoValue,
            priority,
            isCompleted : false
        }
        setTodoList([...todoList , newTodo]);
        setTodoValue("");
        const newList = [...todoList , newTodo];
        localStorage.setItem('mytodo' , JSON.stringify(newList));
        // a new List with added Todo is added to mytodo in local storage
        setErrorMsg("");
        }
    }

    // below function is defined to delete a todo based on given id.Filtered using filter method of array
    const handleDeleteTodo = (id)=> {
        const newTodoList = todoList.filter((eachTodo)=>(eachTodo.id !== id));
        setTodoList(newTodoList);
        localStorage.setItem('mytodo' , JSON.stringify(newTodoList));
    }
    // below function is used to toggle completion status based on given id.
    const toggleCompletion = (id)=> {
        const newList = todoList.map((eachTodo)=>{
            if(eachTodo.id === id) {
                return {...eachTodo , isCompleted : !eachTodo.isCompleted}
            }
            return eachTodo;
        })
        setTodoList(newList);
        localStorage.setItem('mytodo' , JSON.stringify(newList));
    }
    // below method is used for editing a todo when its id is given . Searched based on it's id , then key values are changed.
    const handleEditingTodo = (id , todoValue , priority)=> {
        const modifiedList = todoList.map((eachTodo)=> {
            if(eachTodo.id === id) {
                return {...eachTodo , todo : todoValue , priority};
            }
            return eachTodo;
        })
        // console.log(modifiedList);
        setTodoList(modifiedList);
        localStorage.setItem('mytodo' , JSON.stringify(modifiedList));
    }
    // below method is for handling change in priority
    const handlePriority = (event)=> {
        setPriority(event.target.value);
    }
    // called when component Did Mount phase occurs , when app is launched
    useEffect(()=> {
        getStoredTodos();
    },[])

    return (
        <div className = {`overAllAppContainer`}>
        {/* <h1>Manage Your Tasks here</h1> */}
        <div className = "todoTakingContainer">
        <input className = "takingTodoInputStyling" type = "text" onChange = {handleChangeInput} value = {todoValue} placeholder='Add your task' />
        <select className = "prioritySelectElementStyling" value = {priority} onChange = {handlePriority}>
            <option value = "low">Low</option>
            <option value = "Medium">Medium</option>
            <option value = "High">High</option>
        </select>
        <p>{errorMsg}</p>
        <button type = "button" className = "addBtnStyling" onClick = {handleAddingTodo} >Add</button>
        </div>
        <div className  = "tasksDisplayingContainer">
        {
            todoList.length === 0? (<h1>No todo's , Have a Nice day</h1>):(<ul>
            {
                todoList.map((eachTodo)=>(<EachTodo key = {eachTodo.id} todoDetails = {eachTodo} handleDeleteTodo = {handleDeleteTodo} toggleCompletion = {toggleCompletion} handleEditingTodo = {handleEditingTodo}  />))
            }
        </ul>)
        }
        </div>
        </div>
)}


export default Home;