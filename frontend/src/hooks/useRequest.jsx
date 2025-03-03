import { useEffect, useRef, useState } from "react"
import axios from 'axios'

export const useRequest = (url, options = {}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const optiosnRef = useRef(options);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            setError('');

            try {
                const response = await axios(url, options.current); // options => {methos: post}
                setData(response.data);
            } catch (error) {
                setError(error?.response?.data?.message || "Somthing went wrong");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url, optiosnRef])

    return {isLoading, error, data};
}