import React from 'react'

function ExpensesList({expenses,onDelete}) {
        
    
if(expenses.length === 0) return null
  return (
    <div className='border border-black border-solid rounded-lg w-3xl py-4 flex flex-col justify-between px-5 relative my-2.5 gap-x-2 '>

        
            {
              expenses.map((expense)=>(
                   <div key={expense.id} className='flex justify-between w-[730px]  mb-3 text-base px-3 py-3  border border-solid border-blue-400 rounded-lg'>
                        <div>
                          <span>{expense.input} </span>
                        </div>
                        
                         <div className='flex gap-x-8  text-base'>
                          <span> ₹{expense.amount }</span>
                         <button className='hover:text-red-500'
                             onClick={()=>{onDelete(expense.id)}}
                          >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      >
                                      <path d="M3 6h18" />
                                      <path d="M8 6V4h8v2" />
                                      <path d="M19 6l-1 15H6L5 6" />
                                      <path d="M10 11v6" />
                                      <path d="M14 11v6" />
                                </svg>
                       </button>
                   </div>
                   </div>
              ))
            }
         

        
        </div>
    
  )
}

export default ExpensesList
