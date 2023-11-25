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
import Admin from "./routes/Admin";
import {Provider} from "react-redux";
import store from "./redux/store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search/:brand",
    element: <App />,
  },
  {
    path: "search/",
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
  {
    path: "admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)
