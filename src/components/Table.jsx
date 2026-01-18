import React from "react";

function Table({ data , setRecord }) {

let deleteRow = (idx)=>{
let newArr  = data.filter((item,index)=> index!==idx  )
setRecord(newArr)
}




   return (
      <table className="w-[50vw] overflow-y-auto  ring-2 ring-teal-600 rounded-lg px-4 py-10">
         <thead>
            <tr>
               <th className="bordrer">income</th>
               <th>expense</th>
               <th>category</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody >
            {
                  data.map((item,idx)=>{
                     return(
                           <tr className="hover:bg-gray-100">
               <td className="border border-teal-600 px-4 py-2 align-top">{item.income}</td>
               <td className="border align-top border-teal-600 px-4 py-2">{item.expense}</td>
               <td className="border align-top border-teal-600 px-4 py-2">{item.category}</td>
               <td className="border align-top border-teal-600 px-4 py-2">
                  <button onClick={()=>deleteRow(idx)} className="px-4 py-2 bg-red-600 rounded-lg ml-5 text-white capitalize">delete</button>
                  <button className="px-4 py-2 bg-green-600 rounded-lg ml-5 text-white capitalize">update</button>
               </td>
            </tr>
                     )
                  })
            }
        
         </tbody>
      </table>
   );
}

export default Table;
