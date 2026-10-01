import { useState } from 'react'
// REMEMBER THESE MISTAKES I AM DOING IN PROJECTS

function App() {
          const[isOpen , setIsOpen]  = useState(null)
        //    const[btn1clicked ,setBtn1Clicked] = useState(false)
        //    const[btn2clicked ,setBtn2Clicked] = useState(false)
        //    const[btn3clicked ,setBtn3Clicked] = useState(false)
        //    const[btn4clicked ,setBtn4Clicked] = useState(false)

        //  const clickbtn = (btn)=>{
        //        setIsOpen(btn);
        //        if(btn === 1) setBtn1Clicked(true)
        //   }

        //   const handleBtn1click = () => {
        //              setIsOpen(null)
        //              setBtn1Clicked(false)
        //   }

        // THIS WAS THE REDUNDANT LOGIC I WAS DOING , SO NEXT TIME --> TRY TO REDUCE REDUNDANCY

  return (
    <>
       <div className='flex flex-col gap-x-2.5 justify-center items-center gap-4 pt-10'>
          <div className= {`flex   border-solid border-2 border-red-800 w-3xl py-3 justify-center items-center ${ (isOpen === 1) ? "flex flex-col " : null}`}>
              <div className='flex justify-between items-center  w-3xl   px-4 mb-2'>
                  <span className=' font-semibold  text-2xl'><h1> What is React ?</h1> </span>
                  <button
                    onClick={ () =>{ 
                       isOpen === 1 ? setIsOpen(null) : setIsOpen(1)                        
                       }}
                   >
                      {(isOpen === 1)?(<svg
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
                            <path d="m18 15-6-6-6 6" />
                          </svg>) 
                          :
                           (
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                          )}
                  </button>
              </div>
              {(isOpen === 1) && (

              <div className='flex justify-start  w-3xl   px-4 text-base  '>
                    React is a JavaScript library for building user interfaces, especially for web applications.


              </div>
              )}
              {/* here extended div will get covered  */}
            </div>

            {/* second question div  */}

         <div className= {`flex   border-solid border-2 border-red-800 w-3xl py-3 justify-center items-center ${ (isOpen === 2) ? "flex flex-col " : null}`}>
              <div className='flex justify-between items-center w-3xl   px-4 mb-2'>
                  <span className=' font-semibold  text-2xl'><h1> How do Hooks work ?</h1> </span>
                  <button
                    onClick={ 
                       ()=>{  isOpen === 2 ? setIsOpen(null) : setIsOpen(2)  }
                    }
                   >
                      {(isOpen === 2)?(<svg
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
                            <path d="m18 15-6-6-6 6" />
                          </svg>) 
                          :
                           (
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                          )}
                  </button>
              </div>

                {(isOpen ===2) && (

                <div className='flex justify-start w-3xl   px-4 text-base  '>
                     Hooks let functional components use React features such as state and lifecycle behavior.
                     They provide special functions like useState and useEffect to manage state and perform side effects.

                </div>
                )}
              {/* here extended div will get covered  */}
            </div>

            {/* third question div */}
          <div className= {`flex   border-solid border-2 border-red-800 w-3xl py-3 justify-center items-center ${ (isOpen === 3) ? "flex flex-col " : null}`}>
              <div className='flex justify-between items-center w-3xl   px-4 mb-2'>
                  <span className=' font-semibold  text-2xl'><h1> What is Virtual DOM ?</h1> </span>
                 <button
                    onClick={ () =>{ 
                        isOpen ===  3 ? setIsOpen(null) : setIsOpen(3)
                    }}
                   >
                      {(isOpen === 3)?(<svg
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
                            <path d="m18 15-6-6-6 6" />
                          </svg>) 
                          :
                           (
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                          )}
                  </button>
              </div>
                    {(isOpen ===3) && (

                <div className='flex justify-start  w-3xl   px-4 text-base  '>
                      The Virtual DOM is a lightweight JavaScript representation of the actual DOM maintained by React.
                      React compares changes in the Virtual DOM and efficiently updates only the necessary parts of the actual DOM.
                </div>
                )}
              {/* here extended div will get covered  */}
            </div>

          {/* fourth question div */}
          <div className= {`flex   border-solid border-2 border-red-800 w-3xl py-3 justify-center items-center ${ (isOpen === 4) ? "flex flex-col " : null}`}>
              <div className='flex justify-between items-center w-3xl   px-4 mb-2'>
                  <span className=' font-semibold  text-2xl'><h1> Why use Redux Toolkit ?</h1> </span>
                  <button
                    onClick={ () =>{ isOpen === 4 ? setIsOpen(null) : setIsOpen(4)}}
                   >
                      {(isOpen === 4)?(<svg
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
                            <path d="m18 15-6-6-6 6" />
                          </svg>) 
                          :
                           (
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                          )}
                  </button>
              </div>
              {(isOpen ===4) && (

                <div className='flex justify-start w-3xl   px-4 text-base '>
                      Redux Toolkit is used to manage and share application state in a predictable way.
                      It simplifies Redux by providing tools for creating slices, updating state, and reducing boilerplate code.
                </div>
                )}
              {/* here extended div will get covered  */}
            </div>
          


       </div>
    </>
  )
}

export default App
