import { useState, useEffect } from "react";
import MuseumComponent from "../Components/MuseumComponent";

const MuseumList = () => {

    const [objectId, setObjectId] = useState([]);

    const fetchMuseumObject = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1");
        const data = await response.json();
        setObjectId(data);
    }



// document.addEventListener('DOMContentLoaded', () => {

    const allPromises = [] ;
    // for (let i = 1; i < 11; i++){
    //     allPromises.push(
    //         fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1")
    //         .then((response) => response.json())
    //     )
    // }
Promise.all(allPromises)
.then((allResults) => {
    const allArt = allResults.map((result) => result.data).flat();
    const allArtNames = allArt.map((artObject) => artObject.name)
})

    // })

    useEffect(() => {
        fetchMuseumObject()
    }, []);

    useEffect(() => {
        allArtNames()
    }, [])

    return(
        <>
            <h3>Museum Items</h3> 

        </>
    );

}

export default MuseumList;