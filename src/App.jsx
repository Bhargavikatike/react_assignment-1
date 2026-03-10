import "./App.css"
import React from 'react'
import TaskManager from './components/TaskManager'

export default function App() {
  return (
    <div className="text-center p-5 bg-gray-300 border-2">
        <h1 className="text-5xl bg-blue-600 text-white p-5 m-3">
            Task Manager
        </h1>
        <TaskManager/>
    </div>
  )
}
