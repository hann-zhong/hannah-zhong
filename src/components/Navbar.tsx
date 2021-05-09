import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/global.css'

//Need to add links & routing
function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <p className="nav-text">home</p>
            <p className="nav-text">about</p>
            <p className="nav-text">work</p>
            <p className="nav-text">projects</p>
            <p className="nav-text">contact</p>
        </div>
    );
}

export default Navbar;