import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

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
            {error && <div> { error }</div>}
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