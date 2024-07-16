import { testingdata } from "./store/authSlice";
import { useSelector, useDispatch } from "react-redux";
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
]);
export default function App() {
  const dispatch = useDispatch();

  const authdata = useSelector((state) => {
    return state.auth;
  });

  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline bg-blue">
        <button onClick={() => dispatch(testingdata("login data"))}>
          dddd
        </button>
        {authdata?.testdata}
      </h1>
    </RouterProvider>
  );
}
