import { useRef } from "react";
import Logo from "../img/Logo.svg";
function Header(){
    const navRef = useRef(null);
    const toggleNav = ()=>{navRef.current.classList.toggle("show")}
    return (
        <>
            <header>
                <nav className="nav">
                    <ul>
                        <div className="grp">
                            <li className="logo-ctn"><a className="nav-link" href="index.html"><img src={Logo} alt="Logo"/></a></li>
                            <li className="mob-no"><a className="nav-link" href="campgrounds.html">Home</a></li>
                        </div>
                        <div className="grp">
                            <li className="mob-no"><a href="login.html" className="nav-link">Login</a></li>
                            {/* <!-- Loggged in
                            <li className="mob-no"><b>John Doe</b></li> --> */}
                            <li className="mob-no"><a href="signup.html" className="nav-link btn primary">Create an account</a></li>
                            {/* <!-- Loggged in
                            <li className="mob-no"><a href="campgrounds.html" className="nav-link">Logout</a></li> --> */}
                            <li className="mob-only">
                                <button onClick={toggleNav} id="hamburger">
                                    <img src="/img/Hamburger Menu.svg" alt=""/>
                                </button>
                            </li>
                        </div>
                    </ul>
                </nav>
                
            </header>
            <nav ref={navRef} className="mob-only" id="menu">
                <div>
                    <button onClick={toggleNav} id="closem">
                        <img src="/img/Close.svg" alt=""/>
                    </button>
                </div>
                <ul>
                    <li><a href="campgrounds.html">Home</a></li>
                    <hr/>
                    <li><a href="login.html">Login</a></li>
                    {/* <!-- Loggged in
                    <li><b>John Doe</b></li> --> */}
                    <li><a href="signup.html">Create an account</a></li>
                    {/* <!-- Loggged in
                    <li><a href="campgrounds.html">Logout</a></li> --> */}
                </ul>
            </nav>

        </>
    )
}

export default Header;