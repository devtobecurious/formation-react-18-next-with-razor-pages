import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const SuspenseLayout = () => (
    <Suspense fallback={<><i>Loading ...</i></>}>
        <Outlet />
    </Suspense>
);

const Home = lazy(() => import('./Pages/Home'));
const Films = lazy(() => import('./Pages/Films/Films'));
const EditFilm = lazy(() => import('./Pages/Films/Edit'));

const routes = createRoutesFromElements(
    <>
        <Route element={<SuspenseLayout />}>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="films" element={<Films></Films>}></Route>
            <Route path="films/:id" element={<EditFilm></EditFilm>}></Route>
        </Route>
    </>
);

const router = createBrowserRouter(
    routes
)

export default router;