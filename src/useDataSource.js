import { useState, useEffect } from 'react'

export const useDataSource = resourceFetchFunction => {
    const [resource, setResource] = useState();

    useEffect(() => {
        (async () => {
            const result = await resourceFetchFunction();
            setResource(result);
        })();
    }, [resourceFetchFunction])

    return resource;
}