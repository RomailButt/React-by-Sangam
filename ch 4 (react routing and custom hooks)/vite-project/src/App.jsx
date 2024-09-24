import { Children, useState } from "react";
import "./App.css";
import { Link, Route, useNavigate, useRoutes } from "react-router-dom";
import RecipesList from "./pages/recipes";
import CommentsList from "./pages/comments-list";
import RecipesDetails from "./pages/recipes-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import UseMemoHook from "./pages/hooks/useMemoHook";
import UseCallbackHook from "./pages/hooks/useCallbackHook";
import ReactQuery from "./pages/react-query";

function Routes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home/recipes-list",
          element: <RecipesList />,
        },
        {
          path: "/home/comments-list",
          element: <CommentsList />,
        },
        {
          path: "/home/recipes-list/:id",
          element: <RecipesDetails />,
        },
        {
          path: "/home/eact-hook-form",
          element: <ReactHookFormExamplePage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/memo",
      element: <UseMemoHook />,
    },
    {
      path: "/callback",
      element: <UseCallbackHook />,
    },
    {
      path: "/react-query",
      element: <ReactQuery />,
    },
  ]);

  return element;
}

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        {/* <h1>Routing routing, Custom hooks and more</h1>
        <div className="">
          <Link to="/home/recipes-list">
            Alternative way of navigating to the Recipes list page
          </Link>
          <Link to="/home/comments-list">
            Alternative way of navigating to the Comments list page
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => {
              navigate("/home/recipes-list");
            }}
          >
            Nvigate to Recipes list page
          </button>
          <button
            onClick={() => {
              navigate("/home/comments-list");
            }}
          >
            Nvigate to Comments list page
          </button>
        </div> */}
        {/* <Routes>
          <Route path="home" element={<Layout/>}>
            <Route path="recipes-list" element={<RecipesList />} />
            <Route path="comments-list" element={<CommentsList />} />
            <Route
              path="recipes-list/:id/:name"
              element={<RecipesDetails />}
            />
          </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes> */}
        <Routes />
      </div>
    </>
  );
}

export default App;
