import { useQuery } from "@apollo/client";
import { GetLatestReleasesDocument } from '../graphql/queries';
import { useEffect, useState } from 'react';
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout";

export const LatestReleases = () => {
  const { loading, error, data } = useQuery(GetLatestReleasesDocument);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    if (!loading && !error && data) {
      setLatestMovies(data.nowPlayingMovies.movies.concat(data.popularMovies.movies));
    }
  }, [loading, error, data]);

  if (loading) {
    //Todo add loading template to horizsontal layout
    return <p>Loading...</p>;
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <div className="">
      <HorizontalLayout title='Latest Releases' listedIds={latestMovies}/>
    </div>
  )
}
