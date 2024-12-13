import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Research,
  JoinUs,
  Editorials,
  Projects,
  ExternalEvents,
  Members,
} from "./pages";

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
    path: "join-us",
    element: <JoinUs />,
  },
  {
    path: "members",
    element: <Members />,
  },

  {
    path: "what-we-do/research",
    element: <Research />,
  },
  {
    path: "what-we-do/editorials",
    element: <Editorials />,
  },
  {
    path: "what-we-do/projects",
    element: <Projects />,
  },
  {
    path: "what-we-do/external-events",
    element: <ExternalEvents />,
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
