import { Link } from "react-router-dom";
import {StyleCss, AddNewCss, SignCss} from "./components/Css"
import styled from "styled-components"

import Logo from "./img/Logo.svg"
import Checkmark from "./img/Checkmark.svg"
import UserTestimonial from "./img/User Testimonial.svg"
import { useEffect } from "react";

function Login(){
    useEffect(() => {
        document.title = 'YelpCamp | Login';
      }, []);
    const Page = styled.div`
    ${StyleCss}
    ${AddNewCss}
    ${SignCss}
    `;
    return(
        <Page>
            <main>
                <section className="fir">
                    <div className="content">
                        <header className="space-btw">
                            <img src={Logo} alt="Logo"/>
                            <div className="icon-grp">
                                <img src={Checkmark} alt="back-arrow"/>
                                <Link to="/campgrounds" className="btn">Back to campgrounds</Link>
                            </div>
                        </header>
                        <form action="">
                            <h1>Start exploring camps from all around the world.</h1>
                            <div class="inp-div">
                                <label for="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="johndoe_91"/>
                            </div>
                            <div class="inp-div">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Your Password"/>
                            </div>
                            <input type="submit" value="Login" class="btn primary"/>
                            <p>Not a user yet? <Link to="/signup">Create an account</Link></p>
                        </form>
                    </div>
                </section>
                <section className="sec">
                    <div className="content">
                        <article>
                            "YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."
                        </article>
                        <div className="icon-grp">
                            <img src={UserTestimonial} alt="User pic"/>
                            <div>
                                <h4>May Andrews</h4>
                                <p>Professional Hiker</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Page>
    )
}

export default Login;