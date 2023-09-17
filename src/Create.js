import { useState } from "react";
import { useHistory} from 'react-router-dom';
import { db } from './firebase-config';
import {collection, addDoc} from "firebase/firestore"

const Create = () => {


    const blogsCollectionRef = collection(db, "blogs"); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author};
        
        await addDoc(blogsCollectionRef, blog);
        await history.push("/");
    }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Saving...</button>}
            </form>
        </div>
    );
}
 
export default Create;