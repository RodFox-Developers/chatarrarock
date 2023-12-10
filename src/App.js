import { RouterProvider, createBrowserRouter  } from "react-router-dom";

import InicioPage from "./pages/InicioPage";
import DiscografiaPage from "./pages/DiscografiaPage";
import VideosPage from "./pages/VideosPage";
import BiografiaPage from "./pages/BiografiaPage";
import EventosPage from "./pages/EventosPage";
import ContactoPage from "./pages/ContactoPage";
import RiderPage from "./pages/RiderPage";
import CachePage from "./pages/CachePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminInicio from "./components/admin/AdminInicio";
import AdminBio from "./components/admin/AdminBio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <InicioPage /> },
      { path: "/discografia", element: <DiscografiaPage /> },
      { path: "/videos", element: <VideosPage /> },
      { path: "/biografia", element: <BiografiaPage /> },
      { path: "/eventos", element: <EventosPage /> },
      { path: "/contacto", element: <ContactoPage /> },
      { path: "/rider", element: <RiderPage /> },
      { path: "/cache", element: <CachePage /> },
      { path: "/login", element: <AuthPage /> },
      { path: "/admin",
        element: <AdminDashboardPage />,        
        children: [
          { path: "/admin", element: <AdminInicio /> },
          { path: "/admin/bio", element: <AdminBio /> }
        ] 
      }
    ],
  },

]);

function App() {
  return (
    <div className="container-fluid">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
