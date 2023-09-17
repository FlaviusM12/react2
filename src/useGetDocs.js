import { useState, useEffect } from "react";
import {collection, getDocs} from 'firebase/firestore';
import {db} from './firebase-config';

const useGetDocs = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const blogsCollectionref = collection(db, "blogs");

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsCollectionref);
            console.log("data.docs", data.docs);
            setBlogs(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
            setIsPending(false);
            // console.log("blogs=", blogs);

        };
        getBlogs();
    }, []); 
    return {blogs, setBlogs, isPending};
}
 
export default useGetDocs;