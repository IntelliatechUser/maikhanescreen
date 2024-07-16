import { testingdata } from "./store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Header,
  Footer,
  Errorpage,
  Home,
  Register,
  Business2,
  AddBusinessUnitGrid,
  Ownerdatail,
  BusinessDetail,
  Business1,
  TeamBusiness,
} from "./components/index.js";
import Login from "./components/Login";
import Dashboard from "./pages/DashboardPage.jsx";
import BusinessUnit from "./pages/AddBusinessUnitPage.jsx";

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
    element: <BusinessUnit />
  },
  {
    path: "/teambusiness",
    element: <TeamBusiness />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <Errorpage />,
    // children: [
    //   {
    //     path: "register",
    //     element: <Register />,
    //   },
    //   {
    //     path: "header",
    //     element: <Header />,
    //   },
    //   {
    //     path: "footer",
    //     element: <Footer />,
    //   },
    // ],
  },
  // {path : '/businessheader', element: <headerBusiness/>,
  // errorElement: <Errorpage/>,
  // children:[{
  //   path:'',element:<Home/>},{
  //   path: 'header',element:<Header/>},{
  //   path:'footer',element:<Footer/>}
  // ],},
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
