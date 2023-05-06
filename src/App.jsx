import { Routes, Route, Navigate } from "react-router";
import { lazy } from "react";
import { SharedLayout } from "components/SharedLayout";
import { Cast } from "components/Cast";
import { Reviews } from "components/Reviews";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import ("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/movies" element={<Movies/>}/>
         <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
         </Route>
         <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
  );
};
