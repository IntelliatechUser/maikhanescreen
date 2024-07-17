import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Header,
  Errorpage,
  Register,
  AddBusinessUnitGrid,
  Ownerdatail,
  BusinessDetail,
  TeamBusiness,
} from "./components/index.js";
import Login from "./components/Login";
import Dashboard from "./pages/DashboardPage.jsx";
import BusinessUnit from "./pages/AddBusinessUnitPage.jsx";
import SignUp from "./components/SignUp.jsx";
import ModelTest from "./ModelTest.jsx";
const router = createBrowserRouter([
  // { path: "/DatePicker", element: <DatePicker /> },
  { path: "/businessGrid", element: <BusinessDetail /> },
  // { path: "/business1", element: <Business1 /> },
  { path: "/ownerdatail", element: <Ownerdatail /> },
  // { path: "/business2", element: <Business2 /> },
  { path: "/businessDetail", element: <BusinessDetail /> },
  { path: "/addBusinessUnitGrid", element: <AddBusinessUnitGrid /> },

  { path: "/header", element: <Header /> },
  { path: "/register", element: <Register /> },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addBusinessUnit",
    element: <BusinessUnit />,
  },
  {
    path: "/teambusiness",
    element: <TeamBusiness />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <Errorpage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Errorpage />,
  },
  {
    path: "/modaltest",
    element: <ModelTest />,
    errorElement: <Errorpage />,
  },
]);
export default function App() {
  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline bg-blue">
        <button>
          dddd
        </button>
      </h1>
    </RouterProvider>
  );
}
