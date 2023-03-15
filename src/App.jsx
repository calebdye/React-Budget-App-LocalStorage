import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//library imports
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layouts
import Main, {mainLoader} from "./layouts/Main";

//actions
import { logoutAction } from "./actions/logout";

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/", // This is the main route could also use // index: true
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "Logout",
        action: logoutAction
      },

      //Error handling route
      // {
      //   path: "*",
      //   element: <Error />
      // }

    ]
    
  },

]);

function App() {

  return (
    <div className="App">
     <RouterProvider router={router} />
     <ToastContainer />
    </div>
  )
}

export default App
