import axios from 'axios';
import { useState, useEffect } from 'react'

export const useUser = (userId) => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:8080/users/${userId}`);
            setUser(response.data);
        })();
    }, [])

    return user;
}