import { useEffect } from 'react'
import { useState } from 'react'

function App() {
      
      const [hrs,setHrs] = useState()
      const [mins, setMins] = useState()
      const [secs , setSecs] = useState()
      
      
             
         

      useEffect(()=>{
             const timer =  setInterval(()=>{
              const date = new Date()
                      setHrs(date.getHours())
            setMins( date.getMinutes())    
            setSecs( date.getSeconds())                         
              },1000)     

              
               return () => clearInterval(timer)  
      } , [])      
            
       



  return (
    <>
       <div className='border-2 border-solid border-black w-2xl h-48 relative left-64 top-16 flex 
       justify-center items-center bg-pink-300 rounded-lg'>
             
             <div className='w-96 h-36 border-solid border-2 border-amber-700 rounded-lg
             flex justify-center items-center bg-cyan-100  text-6xl'>
                            
                      {String(hrs).padStart(2, '0')} : {String(mins).padStart(2, '0')} :
                             {String(secs).padStart(2, '0')}
                 
             </div>

       </div>
    </>
  )
}

export default App
