import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navigation from './assets/Components/Navigation';
import MuseumList from './assets/Containers/MuseumList';
import Home from './assets/Components/Home';
import SignUp from './assets/Components/SignUp';
import AboutUs from './assets/Components/AboutUs';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigation />,
        children: [
          {
            path: "/home",
            element: <Home />
          },
          {
            path: "/sign-up",
            element: <SignUp />
          },
          {
            path: "/about-us",
            element: <AboutUs />
          }
        ]
      }
    ]
  )

  return (
    <>
      <h1>The Metropolitan Museum of Art Collection</h1>
      <MuseumList />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
