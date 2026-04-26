import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
   <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      
      {/* Card Container: Using bg-white to pop against base-100 background */}
      <div className="card w-full max-w-md bg-white shadow-xl border border-base-300">
        <div className="card-body">
          
          {/* Header Section */}
          <div className="text-center mb-3">
             <p className="text-base-content/70 mt-2">Welcome back to</p>
            <Link to={"/"} className="text-3xl font-bold text-primary tracking-tight">Learners Care</Link>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="input input-bordered w-full focus:input-primary transition-all" 
                required 
              />
              {/* focus:input-primary: Highlights border with your #1A73E8 on click */}
            </div>

            {/* Password Input */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full focus:input-primary transition-all" 
                required 
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
              </label>
            </div>

            {/* Login Button: Uses your primary brand color */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full text-white text-lg font-bold">
                Login
              </button>
            </div>
          </form>

          {/* Divider with Muted Text */}
          <div className="divider text-base-content/40 text-sm">OR</div>

          {/* Social Login: Neutral style */}
          <button className="btn hover:btn-neutral w-full flex items-center gap-2 font-medium">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Footer: Uses Secondary color (#34A853) for the Call to Action */}
          <p className="text-center mt-4 text-base-content/80 text-sm">
            Don't have an account? 
            <Link to="/signup" className="text-secondary font-bold hover:underline ml-1">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
