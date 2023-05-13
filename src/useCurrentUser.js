import axios from 'axios';
import { useState, useEffect } from 'react'

export const useCurrentUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://localhost:8080/current-user');
            setUser(response.data);
        })();
    }, [])

    return user;
}