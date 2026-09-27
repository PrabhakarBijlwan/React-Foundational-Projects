import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const[size,setSize] = useState(1)

  const onIncrement =()=>{
            setCount(prev => prev + size) 
     }

  // const onDecrement = () =>{

  //           if(count -Number(size) < 0){
  //             setCount(0)
  //           }
  //           else
  //           setCount(prev => prev - size)
  //       }

  // the above function can be simplified to

  const onDecrement = () =>{
    setCount(prev => Math.max(0, prev - size));
  }

       

   const onReset = () =>{
           setCount(0)
   }

   const resetSize = () =>{
           setSize(1)
   }

    
  return (
    <>
      <div className='p-4  border-solid border-2 border-b-amber-200 rrounded-sm outline-blue-500
       outline-solid   oultine-offset-4 w-xl h-80 relative left-80 top-20 flex flex-col items-center 
       gap-y-4'>
            
            <span className='border-2 border-solid border-yellow-500 rounded w-[300px] text-center 
            bg-blue-400  text-white h-12 text-2xl flex items-center justify-center'>
              Counter : {count}</span>

              <button
              className='border-2 border-solid border-yellow-500 rounded-xs w-[150px] text-center'
              onClick={onIncrement}>
             Increment</button>
              
              <button
              className='border-2 border-solid border-yellow-500 rounded-xs w-[150px] text-center'
              onClick={onDecrement}>
                Decrement</button>
              
            
              <button className='border-2 border-solid border-yellow-500 rounded-xs w-[150px] text-center
              '
              onClick={onReset}
              >Reset</button>

              <div className='border-2 border-solid border-yellow-500 rounded-xs w-[300px] h-10  
                 flex gap-y-2 items-center justify-center'
               >
                 <label htmlFor="enterSize">Step Size : </label>
                  <input 
                  type="number"
                  min= "1" 
                  id = "enterSize"
                  value = {size}
                  placeholder='step size'
                  className='w-[40px] ml-1 outline-none'
                  onChange={(e) => {
                        const val = Number(e.target.value);
                        setSize(val > 0 ? val : 1);
                      }}                 
                  />

                  <button className='ml-2 relative left-1.5 bg-blue-800 rounded-lg p-1 px-2
                     text-white'
                     onClick={resetSize}>
                    Reset stepSize</button>
               </div>
             

      </div>
    </>
  )
}

export default App


// e.target.value always return a string 

// IMP NOTES : - 
// Rule of thumb
// No arguments needed → onClick={onIncrement}
// Need to pass arguments, or run extra logic inline → onClick={() => onIncrement(args)}
// Never → onClick={onIncrement()}
