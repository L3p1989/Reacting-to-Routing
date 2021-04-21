import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="navbar-brand" style={{ height: "3em" }} />
                <ul className="navbar mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/films" className="nav-link">Films</Link>
                    <Link to="/people" className="nav-link">People</Link>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;