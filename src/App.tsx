import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';

import { Home } from "@/pages/Home";
import { MovieDetails } from './pages/MovieDetails';
import { Navbar } from '@/components/NavBar';
import { Sidebar } from "@/components/SideBar";

function App(): JSX.Element {
  const isMobileScreen = useMediaQuery('(max-width: 640px)');

  const menu = isMobileScreen ? <Navbar /> : <Sidebar />;

  return (
    <BrowserRouter>
      <section className={`min-h-screen light:bg-white dark:bg-gray-900`}>
        <div className="overflow-x-hidden lg:ml-[20rem] sm:ml-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movieDetails" element={<MovieDetails />} />
          </Routes>
        </div>
        {menu}
      </section>
    </BrowserRouter>
  );
}

export default App;
