import React, { useEffect, useState } from 'react'

function Summary({ record }) {
const [totalIncome, setTotalIncome] = useState(0)
const [totalExpense, setTotalExpense] = useState(0)
const [totalAmount, setTotalAmount] = useState(0)

useEffect(() => {
  let tIncome = 0
  let tExpense = 0
   for(let i = 0 ; i<record.length; i++){
      tIncome += Number(record[i].income) 
      tExpense += Number(record[i].expense)
   }
   setTotalIncome(tIncome)
   setTotalExpense(tExpense)
   setTotalAmount(tIncome - tExpense)

}, [record])


   return (
      <div className='w-[60vh] px-5 rounded-lg py-10 border-lg text-white bg-teal-600'>
         <h1 className='text-2xl border-b flex items-center justify-between font-semibold capitalize'>Total income: <p>{totalIncome}</p></h1>
         <h1 className='text-2xl border-b flex items-center justify-between font-semibold capitalize'>Total expense: <p>{totalExpense}</p></h1>
         <h1 className='text-2xl border-b flex items-center justify-between font-semibold capitalize'>remaining balance: <p>{totalAmount}</p></h1>

      </div>
   )
}

export default Summary