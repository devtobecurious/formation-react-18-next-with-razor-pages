import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";

const routes = createRoutesFromElements(
    <>
        <Route path="" element={<Home></Home>}></Route>
    </>
  );

const router = createBrowserRouter(
    routes
)

export const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}