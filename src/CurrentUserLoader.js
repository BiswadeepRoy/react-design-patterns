import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const CurrentUserLoader = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null);

    useEffect(() => {
        const useAsyncAwait = true;
        if (useAsyncAwait) {
            (async () => {
                const response = await axios.get('http://localhost:8080/current-user');
                setcurrentUser(response.data);
            })();
        } else {
            fetch('http://localhost:8080/current-user').then(response => {
                response.json().then(finalResponse => {
                    setcurrentUser(finalResponse)
                })
            })
        }
    }, [])

    return (<>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { user: currentUser });
            }

            return child;
        })}
    </>)
}