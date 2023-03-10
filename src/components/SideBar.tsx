import { useAppSelector } from "@/redux/hooks";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { SearchBox } from '@/components/SearchBox';
import { MovieCard } from "./MovieCard";

export function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value)
  const detailedMovies = useAppSelector((state) => state.detailedMovies.value)
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies.value)

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  
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

  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(!!document.documentElement.classList[0])
    console.log(document.documentElement.className)
  }


  return (
    <>
      <div className="fixed z-50 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 no-scrollbar">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center gap-2">
            <img 
            className="w-10"
            src="https://images.squarespace-cdn.com/content/v1/546bda42e4b02689ea84e659/1434908135361-GF5OZKCX107Q6XNSVZAS/vietnamwarfilm?format=1000w" 
            alt="logo" />
            <h1 className="font-bold text-gray-200 text-[15px] mx-5">Movies Center</h1>
            <button className="toggle-dark" onClick={handleDarkModeToggle}>
              {
                isDarkMode
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              }
            </button>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <SearchBox />
        <Link to="/">
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
          </div>
        </Link>
        {selectedMovieId &&
          <Link to="/movieDetails">
            <div
              className='p-2.5 mt-3 flex w-full ml-4 justify-start items-start flex-col rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
              <span className="text-[15px] text-gray-200 font-bold">Movie Details</span>
              <span className='text-xs truncate'>{detailedMovies.find((movie) => movie.id === selectedMovieId)?.name}</span>
            </div>
          </Link>
        }
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleSubMenu}>
          <div className="flex justify-between text-center w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">{`Favorite Movies ${favoriteMovies.length > 0 ? `(${favoriteMovies.length})` : ''} `} </span>
            <span className='text-sm'>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                {isSubMenuOpen ? menuIconPaths.open : menuIconPaths.closed}
              </svg>
            </span>
          </div>
        </div>
        <div 
          className={`flex flex-col text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold gap-2 ${isSubMenuOpen ? "" : "hidden"}`}
          id="submenu">
            { favoriteMovies.length > 0 
              ? favoriteMovies.map((movie) => (
                <div key={movie.id} className="p-3 bg-gray-800 duration-300 hover:bg-gray-600 bg-opacity-95 rounded-md pb-5">
                  <MovieCard movieId={movie.id} detailed={false}/>
                </div>
                ))
              : 
              <div className="mt-2 text-xs flex flex-col gap-2">
                <p>No favorite movies on your list</p>
                <p>You can add one by pressing the star on the movies.</p>
              </div>
            }
        </div>
      </div>
    </>
  )
}