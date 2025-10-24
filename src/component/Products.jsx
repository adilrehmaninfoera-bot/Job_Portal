
import React from 'react'
import Button from './Button'
// import Typewriter from './Typewritter'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





function Products() {

const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Navigate to the next page route
    navigate('/signup');  // Change '/nextpage' to the route you want to go to
  };

  return (
    <div className="max-h-screen flex flex-col justify-center items-center px-2">
     <div className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="mt-0 mb-4 w-full text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-50 leading-tight break-words">
          {/* <Typewriter /> */}
          {/* <span className="block mt-1 text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
            Success is where preparation and opportunity meet.
          </span> */}
        </h1>
        <h2 className="mt-3 text-lg sm:text-2xl md:text-3xl font-semibold text-center text-amber-50">
            Your Gateway to the Next Big Step
        </h2>
      <ul className="mt-6 space-y-2 w-full max-w-2xl mx-auto list-disc list-outside text-sm sm:text-base md:text-lg text-amber-50">
  <li>
    Equip yourself with the right tools to <span className=" font-bold">grow, prepare</span>, and land the job that fits you best.
  </li>
  <li>Train with <span className=" font-bold">AI Interview Coaching</span></li>
  <li>
    Build confidence by practicing <span className=" font-bold">real interview scenarios</span> powered by intelligent AI guidance.
  </li>
  <li>Get Expert Resume Reviews</li>
  <li>
    Improve your resume with <span className="font-bold">smart feedback</span> so you can apply with confidence.
  </li>
  <li>Keep Track of All Your Applications</li>
  <li>
    Monitor every job you apply for — even those <span className=" font-bold">outside our platform</span> — all in one place.
  </li>
  <li>Discover Handpicked Job Matches</li>
  <li>Increase your chances with <span className=" font-bold">personalized job recommendations</span> and let recruiters find you easily.</li>
</ul>


        <div className="mt-8 w-full flex justify-center">
         
            
          <Button  signin  onClick={()=>handleSignUpClick()} className=''>sign up</Button>
          
          
            
        </div>
      </div>
    </div>
  )
}


export default Products
