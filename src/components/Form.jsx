import React, { useState } from "react";

function Form({ setRecord, record }) {
   const [income, setIncome] = useState("");
   const [expense, setExpense] = useState("");
   const [category, setCategory] = useState("");

   console.log()

   let submitHandler = (e) => {
      e.preventDefault();
      let obj = {
         income,
         expense,
         category,
      };
      setRecord([...record, obj])
      setIncome('')
      setExpense('')
      setCategory('')

   };

   return (
      <form
         onSubmit={submitHandler}
         className="w-1/2 p-5 rounded-xl shadow-md shadow-black items-center gap-10 flex flex-col "
      >
         <input
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 outline-none border rounded-lg text-lg"
            type="number"
            placeholder="enter your income"
         />
         <input
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            className="w-full px-4 py-2 outline-none border rounded-lg text-lg"
            type="number"
            placeholder="enter expense"
         />
         <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full  px-4 py-2 outline-none border rounded-lg"
         >
            <option selected value="category" disabled>
               chose category
            </option>
            <option className="" value="Grocery">
               grocery
            </option>
            <option value="Kitchen items">kitchen itmes</option>
            <option value="others">others</option>
         </select>
         <button className="w-full py-4 rounded-lg text-white text-lg bg-teal-600">
            Add
         </button>
      </form>
   );
}

export default Form;
