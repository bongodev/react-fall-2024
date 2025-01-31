import clsx from "clsx";
import { useTheme } from "../Hooks";

export function About() {
  const {theme} =useTheme()
    return (
      <div className={clsx("h-[90vh] m-[auto] flex flex-col items-center px-8 py-6",theme? 'text-[#EAEAEA]':'text-gray-700')}>
     
          <h1 className="text-3xl font-bold mb-4">About Number Comparator</h1>
          <p className=" mb-4 text-2xl text-center">
            The Number Comparator app allows users to quickly compare two numbers and determine which one is larger or if they are equal. 
            It is designed to be simple, intuitive, and efficient, making it useful for quick calculations.
          </p>
          <h2 className="text-2xl font-semibold mt-12">Features</h2>
          <ul className="list-disc text-xl text-left pl-6">
            <li>Instant number comparison</li>
            <li>Clear and reset functionality</li>
            <li>User-friendly interface</li>
          </ul>
          <p className="text-center text-xl mt-8">
        This project demonstrates the use of React hooks, React Context, React
         Routers, component reusability.
      </p>
      </div>
    );
  }
  