import { useHistory, useParams } from "react-router-dom";
import useGetDocs from "./useGetDocs";
import { useState } from "react";

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

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method:'DELETE',
        }).then(() => {
            history.push("/");            
        });
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