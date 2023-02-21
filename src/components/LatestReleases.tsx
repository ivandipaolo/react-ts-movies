import { useQuery } from "@apollo/client";
import { GetLatestReleasesDocument } from '../graphql/queries';
import { useEffect, useState } from 'react';
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout";

export function LatestReleases(): JSX.Element {
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
    return <p>Error! {error.message}</p>
  }

  return (
    <div className="">
      <HorizontalLayout title='Latest Releases' listedIds={latestMovies} />
    </div>
  );
}
