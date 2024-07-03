import { useState, useEffect } from "react";
import MuseumComponent from "../Components/MuseumComponent";

const MuseumList = () => {

    const [objectId, setObjectId] = useState([]);

    const fetchMuseumObject = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1");
        const data = await response.json();
        setObjectId(data);
    }

    useEffect(() => {
        fetchMuseumObject()
    }, []);

    return(
        <>
            <h3>Museum Items</h3> 
            <MuseumComponent />
        </>
    );
}

export default MuseumList;