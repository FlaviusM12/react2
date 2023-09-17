import { useState, useEffect } from "react";



const useFetch = (resource) => {

    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(resource, {signal: abortCont.signal})
            .then(result => {
                if (!result.ok) {
                    console.log("im in here");
                    throw Error(`Could not fetch the resource`);
                }
                return result.json()})
            .then(data => {
                setError(null);
                setPending(false);
                setData(data)})
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("aborted");
                } else {
                    setError(err.message);
                    setPending(false);
                }
            });    
        }, 1000);
        return () => {abortCont.abort(); console.log("cleanup function");};
    }, []);
    return {data, isPending, error, setData};
}

export default useFetch;