import './App.css'
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navigation from './assets/Components/Navigation';
import MuseumList from './assets/Containers/MuseumList';
import Home from './assets/Components/Home';
import SignUp from './assets/Components/SignUp';
import AboutUs from './assets/Components/AboutUs';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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
            element:  <SignUp users={users} setUsers={setUsers} setCurrentUser={setCurrentUser}/>
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

      <div className="greeting">
      {currentUser ? (
        <h3>Hello, {currentUser.name}!</h3>
      ) : (
       <></>
      )}
    </div>

      <h1>The Metropolitan Museum of Art Collection</h1>
      <MuseumList />
      <RouterProvider router={router} />

      

    </>
  );
};

export default App;
