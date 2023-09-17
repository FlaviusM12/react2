import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // name acum e variabila reactive, cand se invoca functia seName triggeruieste react-ul sa re-randeze 
    // toata componenta

    const {data: blogs, isPending, error, setData} = useFetch("http://localhost:8000/blogs");

    return ( 
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Pending..</div>}
        {blogs && <BlogList blogs={blogs} title='All blogs' setData={setData}/>}
    </div> );
}
 
export default Home;