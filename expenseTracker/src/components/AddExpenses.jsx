import React, { useState } from 'react'

function AddExpenses({onAdd}) {
     const [ input , setInput] = useState("")
     const [amount , setAmount] = useState()
     const[error, setError] = useState('')
 
     const addFunction = (e) =>{
               e.preventDefault();
               if(input && amount){
                onAdd({input, amount:Number(amount), id:Date.now()})
               setInput("")
               setAmount("")
               setError("")
               }
              else{
                // if you want to display an messages when failing to input , make a state var error and set it and do functions like this 
                setError("first fill all the requirements ")
              }
        }


   // IMPORTANT THING REGARDING THE RETURN IN ADDFUNCTION 
//    So the returned object will look like:
//     {
    //     input: "some value",
    //     amount: 100
//      }
  return (
           <div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          <form  onSubmit={addFunction} className='flex  w-[700px] justify-between  relative left-3.5 gap-x-1.5'>
                <input type="text" 
                    placeholder='Description'
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                    className='mr-3 outline-none '
                 />

                 <div className="flex gap-y-0.5  ">
                    <span className='text-2xl relative top-1.5'>₹</span>
                    <input type="number"
                     value={amount} 
                     onChange={(e)=>{setAmount(e.target.value)}} 
                     className=" outline-none ml-1 mr-10 rounded-lg" 
                     />

                </div>

                <button type='submit' className=' border border-solid border-black px-6 py-2 
                 rounded-lg hover:bg-blue-500 hover:text-white hover:outline-1'>Add</button>
                 
          </form>
          </div>
  )
}

export default AddExpenses
