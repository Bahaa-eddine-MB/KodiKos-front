import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col gap-16 items-center md:flex-row md:h-screen">
      <div className="flex flex-col gap-8 items-center justify-center w-full md:w-1/2 bg-primary h-screen text-white">
        <h1 className="font-semibold text-5xl">Welcome back !</h1>
        <p className="text-2xl max-w-[25rem] text-center">Enter your personal details and start your journey with us</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-2 outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-2 outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white  bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
