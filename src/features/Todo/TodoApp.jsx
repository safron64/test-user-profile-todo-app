import React, { useState } from 'react'
import './TodoApp.css'
import TodoList from './TodoList'

const TodoApp = () => {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState('')

	const addTodo = () => {
		if (newTodo.trim()) {
			setTodos([...todos, { text: newTodo, completed: false }])
			setNewTodo('')
		}
	}

	const deleteTodo = index => {
		setTodos(todos.filter((_, i) => i !== index))
	}

	const toggleTodo = index => {
		const newTodos = todos.slice()
		newTodos[index].completed = !newTodos[index].completed
		setTodos(newTodos)
	}

	return (
		<div className="todo-container">
			<h1>To-Do List</h1>
			<div className="todo-input">
				<input
					type="text"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					placeholder="Add a new task"
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
				toggleTodo={toggleTodo}
			/>
		</div>
	)
}

export default TodoApp
