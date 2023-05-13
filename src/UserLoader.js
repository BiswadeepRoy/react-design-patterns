import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserLoader = ({ userId, children }) => {
    const [user, setuser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:8080/users/${userId}`);
            setuser(response.data);
        })();
    }, [userId])

    return (<>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
            }

            return child;
        })}
    </>)
}