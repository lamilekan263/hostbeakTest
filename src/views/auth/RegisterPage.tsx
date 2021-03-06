import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/form/Input";

function RegisterPage() {

  const [formDetail, setFormDetails] = useState({})


  const onChange = () => {
    setFormDetails({ ...formDetail })
  }

  return (
    <div className="flex  max-h-screen  ">
      <div className="basis-1/2  bg-hero-Image bg-no-repeat bg-cover relative" >
        <p className="font-poppins font-light text-xl text-white absolute bottom-20 left-64 text-xl w-64 leading-9">
          Building exceptional <br/>
          services with Back Office <br />
          Support and Business <br/> Perfomance
        </p>
      </div>
      <div className="basis-1/2 py-24 pl-10 pr-24">
        <div className="mb-5">
          <h1 className="font-roobert text-3xl text-mezechBlue font-bold mb-4">Create Account</h1>
          <p className="font-roobert  text-[#282C40] font-normal">Build an exceptional business</p>
        </div>
        <div>
          <form >
            {/* form input fields */}
            <div className="flex space-x-3 ">
              <Input type="text" onChange={onChange} placeholder="Enter your first name" label="First Name" />
              <Input type="text" onChange={onChange} placeholder="Enter your last name" label="Last Name" />
            </div>
            <Input type="text" onChange={onChange} placeholder="Enter your phone number" label="Phone Number" />
            <Input type="email" onChange={onChange} placeholder="Enter your email" label="Email Address" />
            <Input type="password" onChange={onChange} placeholder="Enter your password" label="Password" />
            {/* remember me */}

            <div className="flex justify-between items-center my-5">
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="p-2" />
                <p className="text-roobert text-[#82869A] font-medium">Remember me</p>
              </div>
              <p className="text-lighterBlue font-roobert">Forgot Password?</p>
            </div>
            <Link to="/view-report">
            <div className="flex items-center justify-center bg-lighterBlue shadow-lg rounded-md h-14">
              <p  className="font-roobert font-medium text-white">Sign Up</p>
              </div>
            </Link>
            <div className="flex py-5 items-center justify-center ">
              <div className="grow border-t border-gray-400 h-14 w-full" />
              <div className="flex items-center justify-center w-full ">
                <p className="font-roobert mt-5 text-[#82869A]">Got an Account? <span className="text-lighterBlue ">Sign In</span>  </p>
                
              </div>
              <div className="grow border-t border-gray-400 h-14 w-full" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage