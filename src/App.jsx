import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { ModalDelete } from './components/ModalDelete'
import { ModalModify } from './components/ModalModify'

function App() {

  const [tasks, setTasks]     = useState([])
  
  // delete or modify item
  const [request, setRequest] = useState({}) 

  const [modalDelete, setModalDelete] = useState(false)
  const [modalModify, setModalModify] = useState(false)

  const deleteTask = (idx) => {
	let copy = tasks.slice() ; copy.splice(idx, 1) 
	setTasks([...copy])
  }

  // takes what to delete from request 
  const del = () => {
	deleteTask(request.idx)
	setRequest({}) // clear request 
	setModalDelete(false)
	}

	const quitModal = () => {
		setModalDelete(false)
		setModalModify(false)
  	}

  const modifyTask = (idx, content) => {
	let { name, done } = tasks[idx]
	let copy = tasks.slice() ; copy.splice(idx, 1, {name: content, done: done}) 
	setTasks([...copy])
  }
  const change = (content) => {
	 let idx = request.idx
	 modifyTask(idx, content)
	//   remove request 
	 setRequest({})
	 setModalModify(false )
	 	 
  }

  useEffect(() => {
	if (request.action == 'delete') {
		setModalDelete(true) // clear request 
	}
	if (request.action == 'modify') {
		setModalModify(true)
	}
  }, [request])

  let modalClasses = (modalDelete || modalModify) ?
  					 `modal-bgnd modal-bgnd--visible` : "modal-bgnd"

  return (
	<>  
		{/* background */}
		<div className={modalClasses}></div>
	    <ModalDelete flag={modalDelete} del={del} quit={quitModal}/>
	    <ModalModify flag={modalModify} change={change} quit={quitModal}/>

		<div className="header">
			<img src={reactLogo} className="logo react" alt="React logo" />
			<h2>Task list</h2>
		</div>
		<p>Type in your task and press Enter.</p>
		<TaskInput saveTask={(t) => {
				setTasks([...tasks, t])
		}}/>
		<div className="task-wrapper">
			<h5 className='task-wrapper__header'>Your tasks:</h5>
			<TaskList tlist={ tasks } req={setRequest}/>
		</div>
	</>
  )
}

export default App
