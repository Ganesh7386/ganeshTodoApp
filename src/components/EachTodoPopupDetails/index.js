import {useState} from 'react';
import './index.css'

const EachTodoPopupDetails = (props)=> {
    const {eachTodoDetails} = props;
    const {todo} = eachTodoDetails;
    const [toDisplay , setToDisplay] = useState(false);

    return (
        <>
            <button type = "button" onClick = {()=>{setToDisplay(true)}} >details</button>
            <div className = {`popupDetailsContainer ${toDisplay? 'toDisplayStyling' : 'toHideStyling'} `}>
                <p className = "taskPara">Todo task is : {todo}</p>
                <p>Priority is : {eachTodoDetails.priority}</p>
                <button type = "button" onClick = {()=>{setToDisplay(false)}} >Close</button>
            </div>
        </>
    )
}


export default EachTodoPopupDetails;