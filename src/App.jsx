import React, { useState } from 'react'
import Form from './components/Form'
import './Ap.css'
import Table from './components/Table'
import Summary from './components/Summary'


function App() {
const [record, setRecord] = useState([]);


  return (
    
    <>
      <h1 className='text-4xl uppercase mt-10 text-teal-600 font-bold text-center'>
        Expense tracker
      </h1>
      <div className='w-full p-10 gap-10 flex h-[50vh] overflow-y-auto mt-10'>
        <Form setRecord={setRecord}  record={record}  />
        <Table data={record} setRecord={setRecord}/>
      </div>
      <div className='flex justify-center w-full items-center'>

      <Summary record={record} />
      
      </div>
    </>
  )
}

export default App