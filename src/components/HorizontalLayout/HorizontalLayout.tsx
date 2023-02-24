import { MovieCard } from "../MovieCard";
import { useState, useEffect, useRef } from 'react';

type HorizontalLayoutProps = {
  title?: string
  listedIds: number[]
}

export function HorizontalLayout({title, listedIds}: HorizontalLayoutProps) {
  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth);
  const [layoutLeftScroll, setLayoutLeftScroll] = useState(0);
  const [layoutRightScroll, setLayoutRightScroll] = useState(0);
  const [loading, setLoading] = useState(true);

  const moviesWrapperRef = useRef<HTMLDivElement>(document.createElement('div'));
  const generalWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (moviesWrapperRef.current) {
      setLayoutWidth(parseInt(getComputedStyle(moviesWrapperRef.current).width));
      setLoading(false);
    }
  }, [moviesWrapperRef.current?.scrollWidth, listedIds.length]);
  
  const handleScroll = () => {
    if (generalWrapperRef.current) {
      setLayoutLeftScroll(Math.round(generalWrapperRef.current.scrollLeft))
      setLayoutRightScroll(generalWrapperRef.current.scrollWidth - generalWrapperRef.current.clientWidth)
    }
  }

  function HorizontalLayoutLoader() {
    return (
      <div className="flex flex-col m-auto p-auto">
        <h1 className="flex py-5 lg:px-3 md:px-10 px-5 lg:mx-8 md:mx-10 mx-5 font-bold text-4xl dark:text-white text-gray-700">
          Loading...
        </h1>
        <div className="flex overflow-x-scroll pb-10 no-scrollbar">
          <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10">
            <div className="flex flex-row gap-2 overflow-x-auto ml-2 mr-2">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="w-44 h-64 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }


  if (loading) {
    return <HorizontalLayoutLoader />;
  }

  return (
    <div className="flex flex-col m-auto p-auto mb-2">
      {
        title
        ? <h1 className="flex py-4 lg:px-3 md:px-10 sm:px-2 lg:mx-8 md:mx-10 mx-5 font-bold text-2xl lg:text-4xl dark:text-white text-gray-700">
            {title}
          </h1>
        : <></>
      }
      <div className="flex overflow-x-scroll py-2 no-scrollbar" ref={generalWrapperRef} onScroll={() => handleScroll()}>
        { window.innerWidth < layoutWidth && layoutLeftScroll > 0
          ? <div className="fixed z-10 w-[4em] left-0 h-[18rem] bg-transparent bg-gradient-to-r from-blue-800 hidden lg:flex"><span className="m-auto cursor-default text-white">{'<'}</span></div>   
          : <></>
          //Todo arreglar fixed
        }
        <div className="flex flex-nowrap lg:ml-10 md:ml-20 sm:ml-2">
          <div className="flex flex-row gap-2 overflow-x-auto mx-2" ref={moviesWrapperRef}>
            { listedIds.length > 0 
            ? listedIds.slice(0, 15).map((id: number) => (
                <MovieCard key={id} movieId={id}/>
              ))
              : <></>
            }
          </div>
        </div>
        { window.innerWidth < layoutWidth && layoutRightScroll !== layoutLeftScroll
          ? <div className="fixed z-0 w-[4em] right-0 h-[18rem] bg-transparent bg-gradient-to-l from-blue-800 hidden lg:flex"><span className="m-auto cursor-default text-white">{'>'}</span></div>   
          : <></>
          //Todo arreglar fixed
        }
      </div>
    </div>
  );
}