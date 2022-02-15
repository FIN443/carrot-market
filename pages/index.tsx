import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-3xl">
          Select Item
        </span>
        <ul>
          {[1, 2].map((i) => (
            <div key={i} className="flex justify-between my-2 ">
              <span className="text-gray-500 dark:text-gray-300">
                Grey Chair
              </span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 mx-auto bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3 text-center 
          rounded-xl w-3/4 block dark:hover:bg-white hover:bg-teal-500 dark:hover:text-black
          active:bg-yellow-500 focus:bg-red-500"
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>🔙</span>
          <div className="space-x-3">
            <span>⭐︎ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center justify-between w-1/3">
              <button
                onClick={() => setCounter((prev) => prev - 1)}
                className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500"
              >
                -
              </button>
              <span>{counter}</span>
              <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button
              onClick={() => setCounter(0)}
              className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white focus-within:bg-blue-100 overflow-hidden rounded-3xl shadow-xl">
        <form className="w-full flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="Username"
            className="border p-1 peer border-gray-400 rounded-md"
          />
          <span className="peer-invalid:text-red-500 peer-valid:hidden">
            This input is invalid
          </span>
          <span className="peer-valid:text-teal-500 peer-invalid:hidden">
            Awesome username
          </span>
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 text-white rounded-md py-1 cursor-pointer"
          />
        </form>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col space-y-2">
        <p className="first-letter:text-3xl first-letter:hover:text-purple-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam
          architecto itaque incidunt quisquam deleniti modi, iusto aperiam
          temporibus accusamus atque adipisci similique illo vel quibusdam. Sed
          amet quasi voluptatibus.
        </p>
      </div>
    </div>
  );
};

export default Home;
