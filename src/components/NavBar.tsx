import { useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import { SearchBox } from './SearchBox';
import { Link } from "react-router-dom";
import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from './HorizontalLayout';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value)
  const detailedMovies = useAppSelector((state) => state.detailedMovies.value)
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies.value)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [selectedMovieId])
  

  const menuIconPaths = {
    open: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"/>
    ),
    closed: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"/>
    ),
  };

  return (
    <nav className="fixed bottom-0 w-full bg-gray-900 z-100">
      <Transition
        show={isMenuOpen}
        className="z-50 w-full bg-gray-900"
        enter="transition ease-in duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-out duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
          <div className="bottom-2 z-50">
            <div className="z-50 px-2 pt-2 flex flex-col pb-3 space-y-1 sm:px-3">
              {favoriteMovies.length > 0 &&
                <>
                  <h1 className='text-white text-m text-start font-medium'>
                    Your favorite movie{favoriteMovies.length > 1 && 's'}:
                  </h1>
                  <div className='overflow-auto'>
                    <HorizontalLayout listedIds={favoriteMovies.map(movie => movie.id)} />
                  </div>
                </>
              }
              {selectedMovieId &&
              <Link
                to="/movieDetails"
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm text-end font-medium">
                <button
                  className="w-full flex flex-row justify-between items-center align-middle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <span className="text-xs text-center py-1">
                    {detailedMovies.find((movie) => movie.id === selectedMovieId)?.name}
                  </span>
                  <span>
                    Movie Details
                  </span>
                </button>
              </Link>
              }
              <Link
                to="/"
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm text-end font-medium">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  Home
                </button>
              </Link>
            </div>
          </div>
      </Transition>
      <div className="w-full px-4" >
        <div className="flex items-center w-full justify-between h-16">
          <div className="flex items-center justify-center align-middle">
            <div className="h-14 flex items-center justify-center align-middle rounded-md flex-shrink-0">
              <Link to="/">
                <img
                className="h-9 w-9 p-auto"
            src="https://images.squarespace-cdn.com/content/v1/546bda42e4b02689ea84e659/1434908135361-GF5OZKCX107Q6XNSVZAS/vietnamwarfilm?format=1000w" 
            alt="Workflow"/>
              </Link>
            </div>
          </div>
          <SearchBox />
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              role="button">
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                {isMenuOpen ? menuIconPaths.open : menuIconPaths.closed}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}