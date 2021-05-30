import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/global.css'

//Need to add links & routing
function Navbar(): JSX.Element {
    return (
        <div className='navbar'>
            <ul className='nav-links'>
                <li><a href='#home'>
                    home
                </a></li>
                <li><a href='#about'>
                    about
                </a></li>
                <li><a href='#work'>
                    work
                </a></li>
                <li><a href='#projects'>
                    projects
                </a></li>
                <li><a href='#contact'>
                    contact
                </a></li>
            </ul>
        </div>
    );
}

export default Navbar;