import { useContext, useEffect, useState } from 'react';

import { HorizontalLayout } from "@/components/HorizontalLayout";
import { AppContext } from '@/context/AppContext';

export function LatestReleasesSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [latestMovies, setLatestMovies] = useState<number[]>([]);

  const { state } = useContext(AppContext);
  const { availableMovies } = state;

  useEffect(() => {
    setLatestMovies(availableMovies.value);
  }, [availableMovies])
  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`duration-300 ease-in-out transform transition-all" ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <HorizontalLayout title='Latest Releases' listedIds={latestMovies} />
    </div>
  );
}
