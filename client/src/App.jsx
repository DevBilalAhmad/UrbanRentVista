import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth, UserAccountType } from "./layout/layout";
// Loaders: for fetching data
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
//public
import HomePage from "./Pages/Home/Home";
import About from "./Pages/About/Aabout";
import ListPage from "./Pages/listPage/listPage";
import SinglePage from "./Pages/singlePage/singlePage";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Signup";
// Private routes
import ProfilePage from "./Pages/profilePage/profilePage";
import ProfileUpdatePage from "./Pages/profilePage/ProfileUpdate";
import SaveList from "./Pages/MyList/SaveList";
//  Routes for listing agent
import NewPostPage from "./Pages/newPostPage/newPostPage";
import EditPost from "./Pages/newPostPage/EditPost";
import MyLists from "./Pages/MyList/ViewListings";
import ListSaveByUser from "./Pages/MyList/ListSaveByUser";

// for testing purpose
import Test from "./test";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          // loader: listPageLoader,
        },
        {
          path: "/About",
          element: <About />,
        },
        // properties page
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        // property detail page
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/Signup",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },

        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/FavList",
          element: <SaveList />,
          loader: profilePageLoader,
        },

        {
          path: "/viewLists",
          element: <MyLists />,
          loader: profilePageLoader,
        },
      ],
    },
    {
      path: "/",
      element: <UserAccountType />,
      children: [
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
        {
          path: "/edit/:id",
          element: <EditPost />,
        },
        {
          path: "/ListSaveByUser",
          element: <ListSaveByUser />,
          loader: profilePageLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
