import { use, useEffect, useState } from 'react'
import ExpensesList from './components/ExpensesList'
import AddExpenses from './components/AddExpenses'

function App() {
   
    const [expenses, setExpenses] = useState([])
   const[totalAmount, setTotalAmount] = useState(0)

   // IN THIS PROJECT , UNDERSTAND AND REMEMBER THE FLOW OF THE FUNCTIONS IN PASSING PROPS

     const addExpense = (newExpense) =>{
               setExpenses((prev) => [newExpense, ...prev])
               
               
     }

     const deleteExpense = (id) =>{
             setExpenses(prev => prev.filter(item => item.id != id))
     }

     useEffect(()=>{
           const total = expenses.reduce((sum, item) => sum + item.amount , 0)
                  setTotalAmount(total)
     },[expenses])


  return (
    <>
        <div className='flex flex-col gap-y-1.5 relative
              mt-2.5 px-3.5 w-fit py-3 left-52 '>
              <div className='w-3xl border border-solid border-black py-2 flex justify-center items-center    rounded-lg'>
                          <div className='px-3 py-2 flex flex-col gap-y-1'>
                                <span className=' text-3xl'>Total </span>
                                <span className='text-3xl '>₹{totalAmount}</span>
                          </div>
              </div>

                      <div className='border border-solid border-black py-3 flex justify-between
                           px-3  my-4  rounded-lg '>
                           <AddExpenses onAdd ={addExpense}/>
                         </div>

                    <div>
                      <ExpensesList expenses={expenses} onDelete={deleteExpense} />
                    </div>
                  
                   
        </div>
      
    </>
  )
}

export default App

// here i am pointing out the thinking flow from claude 
//  Step 2: Identify the actions, not the components

// Before touching components, list out — in plain English — every action that needs to change state:

// "Add a new expense" → changes expenses
// "Delete an expense" → changes expenses

// Both of these change data that lives in App. So both of these functions should be defined in App, right next to the useState, since that's the only place with direct access to setExpenses.Passing things down from App.jsx


// <AddExpenses onAdd={addExpense} />
// <ExpensesList expenses={expenses} onDelete={deleteExpense} />

// Notice ExpensesList gets two things: the actual data (expenses, to display), and a function (onDelete, so each item's delete button can trigger removal back in App).
// Passing things down from App.jsx



// useEffect(() => {
//     const total = expenses.reduce((sum, item) => sum + item.amount, 0)
//     setTotalAmount(total)
// }, [expenses])

