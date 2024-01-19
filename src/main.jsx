import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Search from './routes/Search.jsx';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Paddle from "./routes/Paddle.jsx";
import Quiz from "./routes/Quiz";
import Similar from "./routes/Similar";
import Guide from "./routes/Guide";
import Admin from "./routes/Admin";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ScrollRestoration, redirect } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "search/:brand",
    element: <Search />,
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
    path: "guide",
    element: <Guide />,
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

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)
