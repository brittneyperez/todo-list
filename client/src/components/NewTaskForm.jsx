import React, { useState } from 'react'

const NewTaskForm = ({ todoList, setTodoList }) => { // deconstruct props object
    const [ newTodo, setNewTodo ] = useState(""); // state to track string input
    
    const changeHandler = (e) => {
        setNewTodo(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (newTodo.length === 0) { // ? prevent submitting empty data
            return
        }
        const newTaskData = {
            content: newTodo,
            completed: false,
            id: Math.floor(Math.random() * 100000000).toString() // since there is no back-end, we need to genereate our own id
        };
        setTodoList([...todoList, newTaskData]);
        // localStorage.setItem("tasks", JSON.stringify([...todoList, newTaskData]));
        setNewTodo("");
    };
    
    return (
        <div>
            <div className="container">
                <form onSubmit={ (e)=>submitHandler(e) } className="d-flex col-4 offset-4 my-4">
                    <input onChange={ changeHandler } value={ newTodo } type='text' placeholder='Enter a task' className="mx-auto form-control" style={{width:'250px'}} />
                    <div className='ms-1'>
                        <button className="btn btn-dark">Add</button>
                    </div>
                </form>
            </div>
            <hr className='mx-auto' style={{width:'500px'}} />
        </div>
    )
}

export default NewTaskForm