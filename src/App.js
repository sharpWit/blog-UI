import HomePage from "./pages/homepage/HomePage";
import Blog from "./pages/blog/Blog";
import Post from "./pages/posts/Post";
import NotFound from "./pages/not-found/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/blog", element: <Blog /> },
  {
    path: "/post/id",
    element: ({ id }) => <Post id={id} />,
  },
]);
function App() {
  return <RouterProvider router={router} /> || <NotFound />;
}

export default App;
