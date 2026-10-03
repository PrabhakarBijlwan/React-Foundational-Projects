import { useState } from 'react'
import Eye from './components/Eye';
import EyeOff from './components/EyeOff';


function App() {
  const[showPassword, setShowPassword] = useState(false)
  const[showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [input, setInput] = useState({
                            username: "",
                            email: "",
                            password: "",
                            confirmPassword: ""
                        })


  const handleSubmit = (e) =>{
     e.preventDefault();
      if(input.password !== input.confirmPassword){
        setError("password do not match");
        return;
      }   
     console.log("form submitted : " , input);
     setInput({
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
      })
      setShowConfirmPassword(false)
      setShowPassword(false)
     
  }
     const handleChange = (e) => {
      console.log(e.target + "entered");
    
            const { name, value } = e.target
               e.target.setCustomValidity("")  
            setInput(prev => ({
                ...prev,
                [name]: value
            }))
        }

       const isformvalid = () =>{
           return(
            ! input.username ||
            ! input.email ||
            ! input.password ||
            ! input.confirmPassword
           
           )
        }
  return (
    <>
        <div className='border border-white border-solid rounded-lg py-5 px-6 text-white
                     h-[540px]  w-96 relative left-[420px]  mt-2'>
                
                 <div className='flex justify-center items-center mb-6'>
                  <span className='text-2xl  '>Registration form </span>
                  </div>
                <form  className=' flex flex-col gap-y-6 '
                   onSubmit={handleSubmit}
                  >
                     
                     
                   <div className='border border-white border-solid flex flex-col rounded-lg px-3 py-1.5 gap-y-1.5'>
                    <label htmlFor="user-name">Name</label>
                    <input 
                      type="text"
                       id='user-name'
                       name='username' 
                       placeholder='enter your name'
                       className='text-white outline-none'
                       required
                       onInvalid={(e) => {
                            e.target.setCustomValidity("Please enter your name");
                            }}

                        value={input.username}    
                        onChange={handleChange}
                       />
                   </div>


                   <div className='border border-white border-solid flex flex-col rounded-lg py-1.5 px-3 gap-y-1.5' >
                    <label htmlFor="user-email">Email</label>
                    <input 
                      type="email"
                      
                       id='user-email'
                       name='email'
                       placeholder='enter your email'
                       required
                        onInvalid={(e) => {
                            e.target.setCustomValidity("Please enter your email correctly");
                            }}
                       className='text-base outline-none'
                       value={input.email}
                       onChange={handleChange}

                       />
                   </div>


                   <div className='border border-white border-solid flex  rounded-lg py-1.5 px-3 gap-y-1.5'>

                    <div className='w-3/4 '>
                          <label htmlFor="user-password">Password</label>
                          <input 
                            type= {showPassword ? "text" : "password"}
                            id='user-password'
                            name='password'
                            required
                            onInvalid={(e) => {
                                  e.target.setCustomValidity("Please enter your password");
                                  }}
                            minLength={8}
                            placeholder='enter your password'
                            className='outline-none'
                            value={input.password}
                            onChange={handleChange}
                            
                            />
                    </div>
                      
                       <div className=' w-1/4 flex justify-center items-center'>
                                    <button 
                                    type='button'
                                    
                                    onClick={()=>{setShowPassword(prev => !prev)}}
                                    >
                                       {showPassword ? <EyeOff/> :  <Eye/>}
                                    </button>
                       </div>
                   </div>

    
     <div className='border border-white border-solid flex rounded-lg py-1.5 px-3 gap-y-1.5'>

                    <div className='w-3/4 '>
                          <label htmlFor="user-confirmPassword"> Confirm Password</label>
                          <input 
                            type= {showConfirmPassword ? "text" : "password"}
                            id='user-confirmPassword'
                            name='confirmPassword'
                            required
                            onInvalid={(e) => {
                                  e.target.setCustomValidity("Please confirm your password");
                                  }}
                            
                            placeholder='confirm your password'
                            className='outline-none'
                            value={input.confirmPassword}
                            onChange={handleChange}
                            
                            />
                    </div>
                      
                       <div className=' w-1/4 flex justify-center items-center'>
                                    <button 
                                    type='button'
                                    
                                    onClick={()=>{setShowConfirmPassword(prev => !prev)}}
                                    >
                                       {showConfirmPassword ? <EyeOff/> :  <Eye/>}
                                    </button>
                       </div>
                   </div>


                    {error && <p className="text-red-500 text-sm">{"! " + error}</p>}

                      <button type='submit'
                        disabled ={isformvalid()}
                        className='bg-blue-600 py-2 text-xl disabled:opacity-40 disabled:cursor-not-allowed'
                     >sign up </button>
                </form>



        </div>
      
    </>
  )
}

export default App

// this is about button other than submit button
// One thing to catch before you write this yourself: the button needs type="button", not the default — since it's sitting inside a <form>, an unspecified button type defaults to "submit", which would trigger form submission every time someone just clicks the eye icon. Worth remembering, since it's an easy one to miss.


// button inside button is not a valid syntax in html , now you have fixed it , you did in eye and eyeoff component function , there you put eye and eyeoff in button and again in app.jsx you put them inside button , this caused an error


// CAN'T USE VALUE AND DEFAULT VALUE IN SAME INPUT
// You're using both defaultValue and value on the same input — these are mutually exclusive in React. value makes this a controlled input (React fully owns and manages what's displayed, always). defaultValue is for uncontrolled inputs (React sets it once on initial render, then leaves the DOM alone). Mixing both is a genuine conflict — React will likely warn you in the console about this ("a component is changing an uncontrolled input to be controlled" or similar), and behavior can become unpredictable.