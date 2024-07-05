import { useState, useEffect } from "react";
import MuseumComponent from "../Components/MuseumComponent";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Home from '../Components/Home';
import SignUp from '../Components/SignUp';
import AboutUs from '../Components/AboutUs';

const MuseumList = () => {

    const [objectId, setObjectId] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const fetchMuseumObject = async () => {
        console.log("Fetching data");
        const urls = [];
        for (let i = 100; i < 340; i+=40) {
            urls.push(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
        }
        const allPromises = urls.map(async url => {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        })
        const allResults = await Promise.all(allPromises)
        setObjectId(allResults);

    }

    useEffect(() => {
        fetchMuseumObject()
    }, []);

    const router = createBrowserRouter(
        [
          {
            path: "/",
            element: <Navigation />,
            children: [
              {
                path: "/home",
                element: <Home objectId={objectId}/>
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
  

    return(
        <>
            <div className="greeting">
      {currentUser ? (
        <h3>Hello, {currentUser.name}!</h3>
      ) : (
       <></>
      )}
    </div>

      <h1>The Metropolitan Museum of Art Collection</h1>
      <RouterProvider router={router} />

        </>

    );

}

export default MuseumList;