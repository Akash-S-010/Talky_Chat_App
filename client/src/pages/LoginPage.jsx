import React, { useState } from "react";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("SignUp");
  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-md">
      <div className="bg-white/50 bg-opacity-20 backdrop-blur-md p-10 rounded-3xl shadow-xl w-full max-w-md border-2 border-violet-300">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-violet-500 mb-8">
            {currentState === "SignUp" ? "Sign Up" : "Sign In"}
          </h2>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-violet-500 mb-1"
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none  focus:border-purple-500"
              placeholder="your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-violet-500 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none  focus:border-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-violet-500 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none  focus:border-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          {currentState === "SignIn" && (
           <div className="flex items-center justify-end text-sm">
            <a href="#" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-2 rounded-lg font-medium hover:bg-violet-600 transition cursor-pointer hover:scale-102"
          >
            {currentState === "SignUp" ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {currentState === "SignIn" ? (
          <p className="mt-6 text-center text-sm text-charcoal">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
        ):(
          <p className="mt-6 text-center text-sm text-charcoal">
          Already have an account?{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
