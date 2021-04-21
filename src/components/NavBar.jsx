const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="navbar-brand" style={{ height: "3em" }} />
                <ul className="navbar mr-auto">
                    <div className="nav-link">Home</div>
                    <div className="nav-link">Films</div>
                    <div className="nav-link">People</div>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;