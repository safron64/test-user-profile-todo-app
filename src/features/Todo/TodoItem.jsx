import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
	return (
		<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
			<span onClick={() => toggleTodo(index)}>{todo.text}</span>
			<button onClick={() => deleteTodo(index)}>Delete</button>
		</li>
	)
}

export default TodoItem
