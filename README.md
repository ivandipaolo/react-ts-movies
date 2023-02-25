<h1 align="center">📽️ React TypeScript Movies 🎬</h1>

<p align="center">
  A movie app built with React, TypeScript, and TailwindCSS. It utilizes Apollo Client for data fetching, Redux for state management, and other important dependencies such as React Router, GraphQL Codegen, etc. 
</p>

<details>
  <summary>
    <h3>Live version</h3>
  </summary>
  
  
> **Warning**
<h3> The project was made based on this link https://movieql.netlify.app/ and cloned the referenced GitHub repository</h3>
<h3> the endpoints on that repository are not the same as  https://movieql.netlify.app/graphql</h3>

<h3> This is the main branch adapted and deployed fetching the data from https://movieql.netlify.app/graphql</h3>

<h3 align="center">

[Live Version Here](https://react-ts-movies-omega.vercel.app/)

</h3>

</details>

## Some gifs of how it works:
<details>
  <summary>Home & Movie details</summary>
  
![animations](https://user-images.githubusercontent.com/65032224/221240777-16f641a5-060d-4642-a2f0-305f405a90c5.gif)

</details>
<details>
  <summary>Genre selector</summary>

![genrefilter](https://user-images.githubusercontent.com/65032224/221240802-2473a010-29c2-40ad-8a1c-e59be019c73a.gif)

</details>
<details>
  <summary>Searchbox</summary>

![searchg](https://user-images.githubusercontent.com/65032224/221240812-be0bedf2-9b0f-40e5-9b85-fe09e0266466.gif)

</details>
<details>
  <summary>Favorite section</summary>

![favorite](https://user-images.githubusercontent.com/65032224/221366588-562cdc20-3e98-4702-819b-e1fc9c070fc1.gif)

</details>
<details>
  <summary>Responsive Design</summary>

![mobileD](https://user-images.githubusercontent.com/65032224/221240791-f8b6dfba-7766-499f-8595-d36769bf8fde.gif)

</details>

## Table of Contents!


- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Back-end Issues](#backend-issues)

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)

## Installation

### Frontend:

To install the project, clone the repository from this branch:
```
git clone -b adapted_to_backend_repo https://github.com/ivandipaolo/react-ts-movies.git
```
[adapted_to_backend_repo](https://github.com/ivandipaolo/react-ts-movies/tree/adapted_to_backend_repo)

and run the following command:

```
npm install
```

### Backend
Clone the repository from [Here](https://github.com/hwhang0917/ql-movie-api)
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

## Usage:
### Front-End:
To start the development server, run the following command:
```
npm run dev
```
To compile the GraphQL types, run the following command: (Only if you are changing any query)
```
npx graphql-codegen
```

### Back-End:
To start the server:
```
yarn start
```
You can access the application by visiting http://localhost:5173 in your browser.
And access the graphQL server by visiting http://localhost:3131/graphql in your browser.



## Folder Structure
### The project follows the following folder structure:

- `assets/`: Contains the static assets used in the project.
- `src/components/`: Contains reusable components used in the project.
- `src/graphql/`: Contains compiled queries made by codegen.
- `src/redux/`: Contains store/reducers/slices for the state control.
- `src/pages/`: Contains the page components used in the project.
- `src/App.tsx`: The entry point of the application.
- `src/main.tsx`: The main file that renders the application.

<details id="backend-issues">
  <summary>
     <h2>Backend issues</h2>
  </summary>

### The graphQL Playground do not correspond to the Back-End repo on this link
### [https://movieql.netlify.app/](https://movieql.netlify.app/)

## As you can see the queries are different:
### https://movieql.netlify.app/graphql
![image](https://user-images.githubusercontent.com/65032224/221209678-2d0bc8ab-95ec-4768-ae8b-88f99563857a.png)

### http://localhost:3131/graphql corresponding to https://github.com/hwhang0917/ql-movie-api
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
</details>
