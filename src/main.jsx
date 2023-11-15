import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './routes/App.jsx';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Paddle from "./routes/Paddle.jsx";
import Quiz from "./routes/Quiz";
import Similar from "./routes/Similar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <App />,
  },
  {
    path: "quiz",
    element: <Quiz />,
  },
  {
    path: "similar",
    element: <Similar />,
  },
  {
    path: "paddle/:paddleName",
    element: <Paddle />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
