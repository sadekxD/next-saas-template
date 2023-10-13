import Link from "next/link";
import { Icons } from "./icons";

export default function Nav() {
  return (
    <nav>
      <div className="container h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2
        "
        >
          <Icons.logo width="26" height="26" />
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-sm font-medium text-black border border-[rgba(47, 43, 67, 0.10)] rounded-lg px-3 py-1.5"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex items-center gap-6 text-ghost font-medium">
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* navlinks */}

        {/* buttons */}
      </div>
    </nav>
  );
}
