import { useEffect, useState } from 'react';
import { HorizontalLayout } from "@/components/HorizontalLayout";
import { useAppSelector } from "@/redux/hooks";

export function LatestReleasesSection(): JSX.Element {
  const [latestMovies, setLatestMovies] = useState<number[]>([]);
  const availableMovies = useAppSelector((state) => state.availableMovies.value)

  useEffect(() => {
    setLatestMovies(availableMovies);
  }, [availableMovies])
  
  return (
    <div className="">
      <HorizontalLayout title='Latest Releases' listedIds={latestMovies} />
    </div>
  );
}
