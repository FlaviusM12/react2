import { useHistory, useParams } from "react-router-dom";
import useGetDocs from "./useGetDocs";
import { useState } from "react";
import {doc, deleteDoc, collection} from "firebase/firestore";
import {db} from "./firebase-config";

const BlogDetails = () => {
    const { id } = useParams();
    const {blogs, setBlogs, isPending} = useGetDocs();
    const history = useHistory();
    const [blog, setBlog] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    if (blogs && !isLoaded) {
        let aux = null;
        blogs.forEach(element => {
            if (element.id == id)
                aux = element;
        });
        setBlog(aux);
        setLoaded(true);
    }

    const handleDelete = async () => {
        const blogDoc = doc(db, "blogs", id);
        await deleteDoc(blogDoc);
        history.push("/react2");
    }

    return (
        <div className="blog-details">
            {isPending && <div>Pending...</div>}
            {/* {error && <div> { error }</div>} */}
            {blog && (
                <article>
                    <h2>{ blog.title } </h2>
                    <p>Written by {blog.author}</p>
                    <div className="blog-content">
                        <p>{blog.body}</p>
                    </div>
                    <button onClick={handleDelete}>Delete article</button>
                </article>
            )}

        </div>
    );
}
 
export default BlogDetails;