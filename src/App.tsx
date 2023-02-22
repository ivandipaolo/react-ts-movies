import { Home } from "@/pages/Home";
import { Navbar } from '@/components/NavBar';
import { MovieDetails } from './pages/MovieDetails';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';

import Sidebar from "./components/SideBar";

function App(): JSX.Element {
  const isMobileScreen = useMediaQuery('(max-width: 640px)');
  return (  
    <BrowserRouter>
      <section className="flex lg:flex-row sm:flex-col md:flex-col min-h-screen light:bg-white dark:bg-gray-900">
        {
        isMobileScreen 
          ? <Navbar/>
          : <Sidebar/>
        }
        <div className="lg:ml-[20rem] sm:ml-0 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movieDetails" element={<MovieDetails />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}
export default App;
