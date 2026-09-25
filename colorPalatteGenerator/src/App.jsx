

import { useEffect, useState } from 'react';
import './App.css'

function App() {
          // you could also store these 5 colors in an array in state variables and then .map() them
          // when required 
     // const [colors, setColors] = useState(["#FF0000", "#008000", "#FFFF00", "#FFA500", "#EE82EE"])
               const [bg1,setBg1] = useState("#FF0000") // red color 
               const [bg2,setBg2] = useState("#008000")   // green color
               const [bg3,setBg3] = useState("#FFFF00")  // yellow color
               const [bg4,setBg4] = useState("#FFA500")  // orange color 
               const [bg5,setBg5] = useState("#EE82EE")  // violet color 
               const[copiedColor , setCopiedColor]  = useState(null)

            const generatingNewColors = () =>{
                  const color1 = "#" + Math.floor(Math.random() * 16777216).toString(16); 
                   setBg1(color1)
                  const color2 = "#" + Math.floor(Math.random() * 16777216).toString(16); 
                   setBg2(color2)
                  const color3 = "#" + Math.floor(Math.random() * 16777216).toString(16); 
                   setBg3(color3)
                  const color4 = "#" + Math.floor(Math.random() * 16777216).toString(16); 
                   setBg4(color4)
                  const color5 = "#" + Math.floor(Math.random() * 16777216).toString(16); 
                   setBg5(color5)

            }

            const clickbtn = (color) =>{    
              setCopiedColor(color)                      
                    window.navigator.clipboard.writeText(color); 

            }

            useEffect(()=>{
                  const timer =  setTimeout(()=>{
                      setCopiedColor(null)
                   },1000)


              return () => clearTimeout(timer)
            },[copiedColor])

  return (
    <>
       <div className='flex  flex-col gap-y-2 relative top-32 justify-center'>
        {/* if array have been used , we would have to loop these divs though a looping function like.map()
        ; think about this and in near future try this  */}
            <div className='flex gap-x-4 justify-center '>
                       <div className='border border-solid border-black w-52 h-60 relative rounded-lg
                        ' style = {{backgroundColor: bg1}}>
                   <button className="border-purple-200 text-white hover:border-transparent          hover:bg-blue-600 hover:rounded-lg hover:px-2 hover:text-white active:bg-purple-700 ...  absolute bottom-0.5 left-18"
                   onClick= {() => {
                    clickbtn(bg1)
                     }}>
                         {copiedColor == bg1 ? "Copied !" : bg1}
                    </button>
          </div>

          <div className='border border-solid border-black w-52 h-60 relative rounded-lg'
                style = {{backgroundColor: bg2}}>
                   <button className="border-purple-200 text-white hover:border-transparent          hover:bg-blue-600 hover:rounded-lg hover:px-2 hover:text-white active:bg-purple-700 ...  absolute bottom-0.5 left-18 "
                    onClick= {() => {
                      clickbtn(bg2)
                     }}>
                   
                          {copiedColor == bg2 ? "Copied !" : bg2}
               </button>
          </div>

          <div className='border border-solid border-black w-52 h-60 relative rounded-lg'
                                  style = {{backgroundColor: bg3}}>
                   <button className="border-purple-200 text-white hover:border-transparent          hover:bg-blue-600 hover:rounded-lg hover:px-2 hover:text-white active:bg-purple-700 ...  absolute bottom-0.5 left-18 "
                    onClick= {() => {clickbtn(bg3)
                    
                    }}   >
                          {copiedColor == bg3 ? "Copied !" : bg3}
               </button>
          </div>

          <div className='border border-solid border-black w-52 h-60 relative rounded-lg' 
                        style = {{backgroundColor: bg4}}>
                   <button className="border-purple-200 text-white hover:border-transparent          hover:bg-blue-600 hover:rounded-lg hover:px-2 hover:text-white active:bg-purple-700 ...  absolute bottom-0.5 left-18 "
                   onClick= {() => {
                    clickbtn(bg4)
                    
                   }}>
                          {copiedColor == bg4 ? "Copied !" : bg4}
               </button>
          </div>

          <div className='border border-solid border-black w-52 h-60 relative rounded-lg'
                            style = {{backgroundColor: bg5}}>
                   <button className="border-purple-200 text-white hover:border-transparent          hover:bg-blue-600 hover:rounded-lg hover:px-2 hover:text-white active:bg-purple-700 ...  absolute bottom-0.5 left-18 "
                   onClick= {() => {
                    clickbtn(bg5)
                     }}>
                          {copiedColor == bg5 ? "Copied !" : bg5}
               </button>
          </div>

            </div>
              
           <div className=' flex justify-center items-center mt-4 mb-2'>
            <button
            className='bg-sky-500 hover:bg-yellow-600  rounded-lg p-2 text-white font-bold' 
            onClick={generatingNewColors}
            > Generate new Palatte</button>
           </div>
       </div>

    </>
  )
}

export default App
