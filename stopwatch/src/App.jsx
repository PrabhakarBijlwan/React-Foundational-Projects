import { useEffect, useState , useRef } from 'react'
 
function App() {
          const [totalSeconds, setTotalSeconds] = useState(0)  
          const [isRunning , setIsRunning] = useState(false)
          
          const hrs = Math.floor(totalSeconds/3600);
          const mins = Math.floor((totalSeconds % 3600)/60);
          const secs = Math.floor((totalSeconds) % 60);

// here in this project , i understood the importance of useRef because in this , if i make a var as timerId in useEffect function , i was unable to pass it to pauseTimer function and without it pauseTimer would not have been able to work so i found dificulty in passing that parameter so i made a id using useRef in outer section from functions and passing and using it inside the function was easier
           let timerID = useRef(0)

          useEffect(()=>{
            if(!isRunning) return ;
            if(timerID.current === null || timerID.current === 0){
                  timerID.current =   setInterval(()=>{
                      setTotalSeconds(prev => prev + 1)    
                  },1000)           
                return () => {clearInterval(timerID.current) }
            }
          },[isRunning])

         const pauseTimer = () =>{
            clearInterval(timerID.current)
            timerID.current = null;
            setIsRunning(false);
         } 


          const resetTimer = () =>{
              pauseTimer()
                setTotalSeconds(0);
              
          }

  return (
    <>
      <div className='rounded-full flex flex-col justify-center items-center border-black border border-solid  w-96 h-[384px]  relative left-[400px] 
            top-10 gap-y-24'>
         <div className='border border-blue border-solid w-2xs h-12 rounded-lg box-border px-2 py-1
           flex justify-center items-center text-4xl gap-2'>
                   
                    <span> {String(hrs).padStart(2, '0')}</span>
                    <span>:</span>
                    <span> {String(mins).padStart(2, '0')}</span>
                    <span>:</span>
                    <span> {String(secs).padStart(2, '0')}</span>
                             

         </div>
                  
          <div className='flex border border-solid border-black px-3 rounded-lg py-2'>
                  <button
                   className='bg-blue-400 rounded-lg px-6 text-white py-1 mr-1'
                    onClick={()=>{setIsRunning(true)}}
                   >
                   Start</button>

                  <button
                   className='bg-blue-400 rounded-lg px-6 text-white py-1 mr-1'
                   onClick={pauseTimer}>
                    
                     Pause
                  </button>

                  <button
                    className='bg-blue-400 rounded-lg px-6 text-white py-1 mr-1'
                    onClick={ resetTimer}>
                    Reset
                  </button>

          </div>
      </div>
    </>
  )
}

export default App
