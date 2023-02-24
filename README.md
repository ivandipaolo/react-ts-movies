<h1 align="center">📽️ React TypeScript Movies 🎬</h1>

<p align="center">
  A movie app built with React, TypeScript, and TailwindCSS. It utilizes Apollo Client for data fetching, Redux for state management, and other important dependencies such as React Router, GraphQL Codegen, etc. 
</p>

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)

## Installation

To install the project, clone the repository and run the following command:

```
npm install
```

Clone the back-end repo from [Here](https://github.com/hwhang0917/ql-movie-api)
and run the following command:
```
yarn install
```
And copy this into your .env
```
TMDB_API_KEY={Your TMDB API Key here}
LANGUAGE=EN
REGION=US
PORT=3131
```


## Back-end Usage:
To start the server:
```
yarn start
```


## Front-End Usage:
To start the development server, run the following command:
```
npm run dev
```
To compile the GraphQL types, run the following command:
```
npx graphql-codegen
```
You can access the application by visiting http://localhost:5173 in your browser.
And access the graphQL server by visiting http://localhost:3131/graphql in your browser.


## Folder Structure
### The project follows the following folder structure:

```
react-ts-movies/
  public/
  src/
    components/
    pages/
    App.tsx
    index.tsx
    ...
 ```
- `public/`: Contains the static assets used in the project.
- `src/components/`: Contains reusable components used in the project.
- `src/pages/`: Contains the page components used in the project.
- `src/App.tsx`: The entry point of the application.
- `src/index.tsx`: The main file that renders the application.

# The graphQL Playground do not correspond to the Back-End repo on this link
### [https://movieql.netlify.app/](https://movieql.netlify.app/)

## As you can see the queries are different:
### https://movieql.netlify.app/graphql
![image](https://user-images.githubusercontent.com/65032224/221209678-2d0bc8ab-95ec-4768-ae8b-88f99563857a.png)

### http://localhost:3131/graphql 
![image](https://user-images.githubusercontent.com/65032224/221210045-a80aa781-5008-4c8e-9195-17308a41f363.png)


# Query fails:
### 
```
Error while trying to get the movies genres into nowPlayingMovies query and popularMovies query
[GraphQL error]: Message: Cannot return null for non-nullable field Movie.genres.
Location: [object Object], Path: nowPlayingMovies,movies,0,genres
 query GetGenresForMovies{
   nowPlayingMovies {
     movies{
       id
       genres {
         id
         name
       }
     }
   }
   popularMovies {
     movies{
       id
       genres {
         id
         name
       }
     }
   }
 }
```
Making the test with their playground:

![image](https://user-images.githubusercontent.com/65032224/221203859-11992019-f9b2-4b8c-a3ab-45cbd748cef2.png)

### This is why I am getting the movie genres by the query getMovieById on each MovieCard and sending it to the reducer.
