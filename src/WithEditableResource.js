import { useState, useEffect } from 'react';
import axios from 'axios';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export const withEditableResource = (Component, resourceURL, resourceName) => {
    return props => {
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceURL);
                setOriginalData(response.data);
                setData(response.data);
            })()
        }, [])

        const onChange = changes => {
            setData({ ...data, ...changes });
        }

        const onSave = async () => {
            const response = await axios.post(resourceURL, { [resourceName]: data });
            setData(response.data);
            setOriginalData(response.data);
        }

        const onReset = () => {
            setData(originalData)
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <Component {...props}
            {...resourceProps}
        />
    }
}