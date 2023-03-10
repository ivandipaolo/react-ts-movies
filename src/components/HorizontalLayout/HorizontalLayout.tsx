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
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const [layoutHoverStop, setLayoutHoverStop] = useState<boolean>(false);

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
  useEffect(() => {
    setTimeout(() => {
      if (generalWrapperRef.current) {
        setLayoutLeftScroll(Math.round(generalWrapperRef.current.scrollLeft))
        setLayoutRightScroll(generalWrapperRef.current.scrollWidth - generalWrapperRef.current.clientWidth)
      } 
    }, 500);
  }, [])   

  const handleLayoutHover = (side: "left" | "right") => {
    setLayoutHoverStop(false)
    setHoveredSide(side);
  };

  const handleLayoutStop = () => {
    setLayoutHoverStop(true)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (hoveredSide && !layoutHoverStop) {
      const handleInterval = () => {
        if (generalWrapperRef.current) {
          if (hoveredSide === "left" && generalWrapperRef.current.scrollLeft > 0) {
            generalWrapperRef.current.scrollLeft -= 2;
            setLayoutLeftScroll(Math.round(generalWrapperRef.current.scrollLeft));
          } else if (hoveredSide === "right" && generalWrapperRef.current.scrollLeft < generalWrapperRef.current.scrollWidth) {
            generalWrapperRef.current.scrollLeft += 3;
            setLayoutLeftScroll(Math.round(generalWrapperRef.current.scrollLeft));
          } else {
            setHoveredSide(null);
          }
        }
      };
      intervalId = setInterval(handleInterval, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [hoveredSide, generalWrapperRef.current?.scrollLeft, layoutHoverStop]);

  function HorizontalLayoutLoader() {
    return (
      <div className="flex flex-col m-auto p-auto">
        <h1 className="flex py-5 lg:px-3 md:px-10 px-5 lg:mx-8 md:mx-10 mx-5 font-bold text-3xl dark:text-white text-gray-700">
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
        ? <h1 className="flex py-4 lg:px-3 md:px-10 sm:px-2 lg:mx-8 md:mx-10 mx-5 font-bold text-1xl lg:text-3xl dark:text-white text-gray-700">
            {title}
          </h1>
        : <></>
      }
      <div className="flex overflow-x-scroll py-2 no-scrollbar" ref={generalWrapperRef} onScroll={() => handleScroll()}>
        { window.innerWidth < layoutWidth && layoutLeftScroll > 0
          ? <div className="fixed z-10 w-[20em] h-[18rem] bg-transparent hidden lg:flex" onMouseEnter={() => handleLayoutHover('left')} onMouseLeave={handleLayoutStop}></div>   
          : <></>
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
        <div
          className={`fixed z-0 w-[20rem] h-[18rem] right-0 bg-transparent hidden lg:${layoutRightScroll !== layoutLeftScroll ? 'flex' : 'hidden'}`}
          onMouseEnter={() => handleLayoutHover('right')}
          onMouseLeave={handleLayoutStop}></div>   
      </div>
    </div>
  );
}