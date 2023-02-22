import { MovieCard } from "../MovieCard";
import { useState, useEffect, useRef } from 'react';

type HorizontalLayoutProps = {
  title?: string
  listedIds: number[]
}

export function HorizontalLayout({title, listedIds}: HorizontalLayoutProps) {
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [layoutLeftScroll, setLayoutLeftScroll] = useState(0);
  const [layoutRightScroll, setLayoutRightScroll] = useState(0);

  const moviesWrapperRef = useRef<HTMLDivElement | null>(null);
  const generalWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (moviesWrapperRef.current) {
      setLayoutWidth(parseInt(getComputedStyle(moviesWrapperRef.current).width));
    }
  }, [moviesWrapperRef.current?.scrollWidth, listedIds.length]);
  
  const handleScroll = () => {
    if (generalWrapperRef.current) {
      setLayoutLeftScroll(Math.round(generalWrapperRef.current.scrollLeft))
      setLayoutRightScroll(generalWrapperRef.current.scrollWidth - generalWrapperRef.current.clientWidth)
    }
  }


  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-3 md:px-10 px-5 lg:mx-8 md:mx-10 mx-5 font-bold text-4xl text-gray-800">
        {title}
      </h1>
      <slot/>
      <div className="flex overflow-x-scroll pb-10 no-scrollbar" ref={generalWrapperRef} onScroll={() => handleScroll()}>
        { window.innerWidth < layoutWidth && layoutLeftScroll > 0
          ? <div className="fixed z-10 flex w-[4em] left-0 h-[18rem] bg-transparent bg-gradient-to-r from-purple-800"><span className="m-auto cursor-default text-white">{'<'}</span></div>   
          : <></>
          //Todo arreglar fixed
        }
        <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10">
          <div className="flex flex-row gap-2 overflow-x-auto ml-2 mr-2" ref={moviesWrapperRef}>
            { listedIds.length > 0 
            ? listedIds.slice(0, 15).map((id: number) => (
                <MovieCard key={id} movieId={id}/>
              ))
              : <></>
            }
          </div>
        </div>
        { window.innerWidth < layoutWidth && layoutRightScroll !== layoutLeftScroll
          ? <div className="fixed z-10 flex w-[4em] right-0 h-[18rem] bg-transparent bg-gradient-to-l from-purple-800"><span className="m-auto cursor-default text-white">{'>'}</span></div>   
          : <></>
          //Todo arreglar fixed
        }
      </div>
    </div>
  );
}