import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from './components/table/table-content'

const getAllStudents = 'http://localhost:3000/api/studentAll';

function App() {
  return (
    <Table getAllStudents={getAllStudents}/>
  )
}

export default App
