import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBox } from '@/components/SearchBox';

export function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value)

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <div className="fixed z-50 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Movies Center</h1>
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
              className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Movie Details</span>
            </div>
          </Link>
        }
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleSubMenu}>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Favorite Movies</span>
            <span className={`text-sm ${isSubMenuOpen ? "rotate-180" : ""}`} id="arrow">
              <i className="bi "></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isSubMenuOpen ? "" : "hidden"}`}
          id="submenu">
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Movie 1
          </h1>
        </div>
      </div>
    </>
  )
}