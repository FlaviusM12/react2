import BlogList from "./BlogList";
import useGetDocs from "./useGetDocs";
import { useEffect } from "react";

const Home = () => {

    // name acum e variabila reactive, cand se invoca functia seName triggeruieste react-ul sa re-randeze 
    // toata componenta
    
    // useEffect(() => {
    const {blogs, setBlogs, isPending} = useGetDocs();
    // }, []);

    if (blogs)
        console.log(blogs);
    return ( 
    <div className="home">
        {/* { error && <div>{ error }</div> } */}
        { isPending && <div>Pending..</div>}
        {/* {console.log(blogs)} */}
        {blogs && <BlogList blogs={blogs} title='All blogs'/>}
    </div> );
}
 
export default Home;