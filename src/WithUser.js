import { useState, useEffect } from 'react';
import axios from 'axios'

export const withUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`http://localhost:8080/users/${userId}`)
                setUser(response.data)
            })();
        }, [userId])
        return <Component {...props} user={user} />
    }
}