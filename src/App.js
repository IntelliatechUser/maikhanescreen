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
  TeamBusiness

} from "./components/index.js";
import Login from "./components/Login";
import FrontPage from "./components/FrontPage";
import DatePicker from "./components/DatePicker.jsx";
import FillOtpLogin from "./components/FillOtpLogin.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  // { path: "/DatePicker", element: <DatePicker /> },
  { path: "/businessGrid", element: <BusinessDetail /> },
  // { path: "/business1", element: <Business1 /> },
  { path: "/ownerdatail", element: <Ownerdatail /> },
  // { path: "/business2", element: <Business2 /> },
  { path: "/businessDetail", element: <BusinessDetail /> },
  { path: "/addBusinessUnitGrid", element: <AddBusinessUnitGrid /> },
  { path: "/FrontPage", element: <FrontPage /> },
  { path: "/header", element: <Header /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
 { path: "/fillotplogin", element: <FillOtpLogin /> },
 {
  path:"/teambusiness",element: <TeamBusiness/>
 },
  {
    path: "/",
    element: <Login />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
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
