import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./img/Logo.svg";
import Booking from './img/Booking.svg'
import PlumGuide from './img/Plum Guide.svg'
import Airbnb from './img/Airbnb.svg'
import HeroImg from './img/Hero-Image.jpg'
import HeroImgTablet from './img/Hero Image (Tablet and Mobile).jpg'
import Checkmark from './img/Checkmark.svg'
import { useEffect } from "react";
function LandingPage(){
    useEffect(() => {
        document.title = 'YelpCamp';
      }, []);
    const Page = styled.div`
    height: 100vh;
    overflow: hidden;
    font-family: 'Archivo', sans-serif;
    font-weight: 500;
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    html{
        font-size: 18px;
        color: #6b7280;
        background-color: #f9f6f1;
    }
    
    
    
    
    h1{
        font-size: 56px;
        word-spacing: 0.2rem;
        color: #000000;
    }
    p{    
        line-height: 1.5;
    }
    .btn{
        color: currentColor;
        text-decoration: none;
        display: inline-block;
        width: fit-content;
        
    
    }
    .btn.primary{
        color: #fff;
        background-color: #000000;
        padding: 1.2rem 1.4rem;
        margin: 14px 0px;
        border-radius: 4px;
    }
    
    
    
    
    main{
        height: 100%;
        display: flex;
    }
    .rgh{
        display: block;
        width: 46%;
        background-image: url(${HeroImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    .lft{
        flex: 1;
        padding: 40px 150px;
        background-color: #f9f6f1
    }
    .inn{    
        margin-top: 125px;
    }
    .inn, .inn ul{
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
    .inn ul{
        list-style: none;
        gap: 14px;
    }
    .inn ul li{
        padding-left: 35px;
        background-image: url(${Checkmark});
        background-repeat: no-repeat;
        background-position: left center;
        line-height: 1.5;
    }
    .img-row{
        max-height: 42px;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin-top: 7px;
    }
    .mt-only{
        display: none;
        width: 100%;
        margin-bottom: 2rem;
        background-image: url(${HeroImgTablet});
        background-size: cover;
        background-position: center bottom;
    }
    
    
    
    @media screen and (max-width: 1024px){
        body{
            overflow: scroll;
        }
        h1{
            font-size: 56px;
        }
        main{
            height: auto;
        }
        .logo{
            padding: 2rem 2.5rem;
        }
        .rgh{
            display: none;
        }
        .lft{
            padding: 0px;
        }
        .mt-only{
            display: block;
            min-height: 37vh;
        }
        .inn{
            margin: 0px 2.5rem;
        }
    }
    @media screen and (max-width: 768px){
        body{
            overflow: scroll;
        }
        h1{
            font-size: 38px;
        }
        main{
            height: auto;
        }
        .logo{
            padding: 2rem 1rem;
        }
        .lft{
            padding: 0px;
        }
        .mt-only{
            display: block;
            min-height: 40vh;
        }
    }
     
    `;
    return (
        <Page>
            
            {/* <link rel="stylesheet" href="/css/index.css"/> */}
            <main>
                <section className="lft">
                    <div>
                        <img className="logo" src={Logo} alt=""/>
                        <div className="mt-only">
                            
                        </div>  
                        <div className="inn">
                            <h1>Explore the best camps on Earth.</h1>
                            <p>YelpCamp is a curated list of best camping spots on Earth. Unfiltered and Unbiased reviews.</p>
                            <ul>
                                <li>Add your own camp suggestions.</li>
                                <li>Leave reviews and experiences.</li>
                                <li>See locations for all camps.</li>
                            </ul>
                            <Link className="btn primary" to="/campgrounds">View Campgrounds</Link>
                            <div>
                                <p>Partnered with:</p>
                                <div className="img-row">
                                    <img src={Airbnb} alt=""/>
                                    <img src={Booking} alt=""/>
                                    <img src={PlumGuide} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rgh">
                </section>
            </main>
        </Page>
    )
}

export default LandingPage;