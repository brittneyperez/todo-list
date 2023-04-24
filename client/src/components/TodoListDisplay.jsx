import React from 'react'

const TodoListDisplay = ({ todoList, setTodoList }) => {
    
    // Show completion of task with checkbox functionality
    const handleToggleCompletion = (todoItem) => {
        todoItem.completed = !todoItem.completed; // change boolean: set false to true
        let updatedTodoList = [...todoList];
        setTodoList(updatedTodoList);
    }
    // Simple marked complete (no ninja) functionality
    const styled = (completed) => {
        if (completed === true) {
            return "mx-4 fw-medium text-decoration-line-through text-secondary text-opacity-75"
        } else {
            return "mx-4 fw-medium"
        }
    }
    
    // Delete Functionality
    const handleTaskDeletion = (taskId) => {
        const filteredTasks = todoList.filter((todoItem, _i) => {
            return todoItem.id !== taskId;
        });
        setTodoList(filteredTasks);
    }
    
    return (
        <div>
            <h2>Todo List</h2>
            {todoList.map((todoItem, idx) => (
                <div key={todoItem.id} className='mb-2 d-flex align-items-center offset-5'>
                    <input onChange={()=>handleToggleCompletion(todoItem)} type="checkbox" className='form-check-input' />
                    <span className={styled(todoItem.completed)}>{todoItem.content}</span>
                    <button onClick={()=>handleTaskDeletion(todoItem.id)} className='btn btn-danger'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoListDisplay