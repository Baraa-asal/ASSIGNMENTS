import React from 'react';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  
  {
    path: "/:category",
    element: <Main />,
  },
  
  {
    path: "/:category/:id",
    element: <Main />,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
]);
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
