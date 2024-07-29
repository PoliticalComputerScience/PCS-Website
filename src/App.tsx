import CssBaseline from "@mui/material/CssBaseline";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, About, WhatWeDo, JoinUs } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "what-we-do",
    element: <WhatWeDo />,
  },
  {
    path: "join-us",
    element: <JoinUs />,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
