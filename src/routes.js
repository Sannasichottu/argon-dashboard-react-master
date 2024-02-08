
// import Index from "views/Index.js";
import CustomerDetail from "./components/Customer/Details/CustomerDetail";
import AddItem from "components/Customer/addItem/AddItem";
import SendList from "components/Customer/sendList/SendList";
import RecivedList from "components/Customer/recivedList/RecivedList";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";

var routes = [
 
 
  {
    path: "/customerDetail",
    name: "Customer Detail",
    icon: "ni ni-single-02 text-yellow",
    component: <CustomerDetail />,
    layout: "/admin",
  },
  {
    path: "/addItem",
    name: "Add Item",
    icon: "ni ni-tv-2 text-primary",
    component:<AddItem />,
    layout: "/admin",
  },
  {
    path: "/sendList",
    name: "Send List",
    icon: "ni ni-bullet-list-67 text-red",
    component: <SendList />,
    layout: "/admin",
  },
  {
    path: "/recivedList",
    name: "Recived List",
    icon: "ni ni-bullet-list-67 text-red",
    component: <RecivedList />,
    layout: "/admin",
  },
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;
