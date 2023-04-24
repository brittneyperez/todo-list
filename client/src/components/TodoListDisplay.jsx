import React from 'react'

const TodoListDisplay = ({ todoList, setTodoList }) => {
    
    // Show completion of task with checkbox functionality without affecting state of original list
    const handleToggleCompletion = (todoItem) => {
        let updatedTodoList = todoList.map((task) => {
            if (task === todoItem) {
                let updatedItem = { ...task };
                updatedItem.completed = !task.completed; // change boolean: set false to true
                return updatedItem;
            } else {
                return task;
            }
        })
        setTodoList(updatedTodoList);
    }
    // Stylized Completion
    const styled = (completed) => {
        if (completed === true) {
            return "mx-4 fw-medium text-decoration-line-through text-secondary text-opacity-75"
        } else {
            return "mx-4 fw-medium"
        }
    }
    
    // Delete a Task
    const handleTaskDeletion = (taskId) => {
        const filteredTasks = todoList.filter((todoItem, _i) => {
            return todoItem.id !== taskId;
        });
        setTodoList(filteredTasks);
        // localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    }
    
    return (
        <div>
            <h2 className='fw-bold'>Todo List</h2>
            <hr className='mx-auto' style={{width:'200px'}} />
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