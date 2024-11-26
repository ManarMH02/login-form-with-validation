import { useState } from "react"

function App() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: ''
  })
  const onChangeHandler = (e) => {
    const { value, name } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const formValidation = ({ username, password }) => {
    const errors = { usernameError: '', passwordError: '' }
    if (!username) errors.usernameError = 'Please enter your username'
    if (!password) errors.passwordError = 'Please enter your password'
    return errors
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setErrors(formValidation(userData))
  }

  return (
    <>
      <div className=" grid items-center grid-cols-[repeat(auto-fit,minMax(300px,1fr))] min-h-screen bg-[url('../public/loginbg-img.png')] bg-center bg-repeat md:bg-none">
        <div className="login-info h-full hidden md:block">
          <img src="../public/loginbg-img.png" alt="login-photo" className="w-full h-full" />
        </div>
        <form action=""
          onChange={onChangeHandler}
          className="login-form flex flex-col text-center rounded-md mx-auto my-0 space-y-8 py-5 px-2 min-w-[350px] bg-white shadow-md" id="login-form">
          <h1 className="text-[#34495E] text-4xl mb-6 font-bold">SecureLogin</h1>
          <h2 className="text-start text-2xl text-[#34495E]">Login in now!</h2>
          <div className="username">
            <input type="text" name="username" id="username" placeholder="Username" className="w-full outline-none border-b border-b-[#22313F]  placeholder:text-[34495E] placeholder:opacity-70 py-[8px] px-[3px]" />
            {errors.usernameError && <span className="text-start block mt-1 text-red-600 text-sm">{errors.usernameError}</span>}
          </div>
          <div className="password">
            <input type="password" name="password" id="password" placeholder="Password" className="w-full outline-none border-b border-b-[#22313F] placeholder:text-[34495E] placeholder:opacity-70 py-[8px] px-[3px]" />
            {errors.passwordError && <span className="text-start block mt-1 text-red-600 text-sm">{errors.passwordError}</span>}
          </div>
          <button
            type="submit"
            onClick={submitHandler}
            className="mt-5 block py-3 w-full mx-auto text-white transition duration-300 bg-[#2ECC71] hover:bg-[#29b765] rounded-md text-lg font-bold cursor-pointer">Login</button>
        </form>
      </div>
    </>
  )
}

export default App
