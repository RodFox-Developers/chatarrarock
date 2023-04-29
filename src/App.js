import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import InicioPage from './pages/InicioPage';
import DiscografiaPage, { loader as spotifyLoader } from './pages/DiscografiaPage';
import VideosPage from './pages/VideosPage';
import BiografiaPage from './pages/BiografiaPage';
import EventosPage from './pages/EventosPage';
import ContactoPage from './pages/ContactoPage';
import RiderPage from './pages/RiderPage';
import CachePage from './pages/CachePage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  { path:'/', 
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { path:'/', element: <InicioPage /> },
    { path:'/discografia', element: <DiscografiaPage />, loader: spotifyLoader },
    { path:'/videos', element: <VideosPage /> },
    { path:'/biografia', element: <BiografiaPage /> },
    { path:'/eventos', element: <EventosPage /> },
    { path:'/contacto', element: <ContactoPage /> },
    { path:'/rider', element: <RiderPage /> },
    { path:'/cache', element: <CachePage /> },
  ]
  }
])

function App() {
  return (
    <div className="container-fluid">      
      <RouterProvider router={router} />
    </div>    
  );
}

export default App;
