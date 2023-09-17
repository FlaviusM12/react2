import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Gossip Girl</h1>
            <div className="links">
                <Link to="/react2">Home</Link>
                <Link to="/react2/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar ;