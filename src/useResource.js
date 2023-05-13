import axios from 'axios';
import { useState, useEffect } from 'react'

export const useResource = (resourceURL) => {
    const [resource, setResource] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceURL);
            setResource(response.data);
        })();
    }, [resourceURL])

    return resource;
}