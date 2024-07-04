import { useState, useEffect } from "react";
import MuseumComponent from "../Components/MuseumComponent";

const MuseumList = () => {

    const [objectId, setObjectId] = useState([]);

    const fetchMuseumObject = async () => {
        console.log("Fetching data");
        const urls = [];
        for (let i = 1; i < 11; i++) {
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

  

    return(
        <>
            <h3>Museum Items</h3> 

        </>
    );

}

export default MuseumList;