import React, { useState } from 'react';
import Notification from './components/Notification';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

import SearchIcon from './img/Search Icon.svg'
import img1 from "./img/Camp Images/Compressed Images/Mount Ulap.jpg"

import img2 from "./img/Camp Images/Compressed Images/Calaguas Island.jpg"

import img3 from "./img/Camp Images/Compressed Images/Onay Beach.jpg"

import img4 from "./img/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg"

import img5 from "./img/Camp Images/Compressed Images/Latik Riverside.jpg" 

import img6 from "./img/Camp Images/Compressed Images/Buloy Springs.jpg"


function Campgrounds(){
    const [campList, setcampList] = useState([
        {
            title: "Mount Ulap",
            img: img1, 
            desc: "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
        },
        {
            title: "Callagus Islands", 
            img: img2, 
            desc: "A Paradise of islands that can rival the white sand beauty of Boracay.",
        },
        {
            title: "Onay Beach",
            img: img3, 
            desc: "This is one of the best beach camping sites, beautiful and pristine.",
        },
        {
            title: "Seven Sisters Waterfall",
            img: img4, 
            desc: "The Seven Sisters is the 39th tallest waterfall in Norway.",
        },
        {
            title: "Latik Riverside",
            img: img5,
            desc: "Philippines is one of the most dazzling countries in all of Asia.",
        },
        {
            title: "Buloy Springs",
            img: img6, 
            desc: "This is one of the best beach camping sites, beautiful and pristine.",
        },

    ])
    const Page = styled.div`
    /* Generall Styling */

    .bl-a{
        display: block;
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
        border-radius: 7px;
    }
    .btn.secondary{
        display: block;
        padding: 1rem;
        color: #000000;
        font-weight: 800;
        text-align: center;
        width: auto;
        border: 1px solid #9e9e9e87;
    }
    .ctn-mx{
        max-width: 1140px;
        margin: 0px auto;
    }
    .not{
        display: flex;
        justify-content: center;
        gap: 2rem;
        background-color: #000000;
        color: #fff;
        padding: 10px 0px;
    }
    .not a{
        color: #99e3ff;
    }
    .not button{
        background: none;
        border: none;
    }
    
    
    /* header and nav */
    header{
        padding: 2rem 0rem;
    }
    .nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav .grp{
        display: flex;
        list-style: none;
        align-items: center;
        gap: 1.5rem;
    }
    .grp .logo-ctn{
        height: 27px;
    }
    .nav a{
        color: #6b7280;
        text-decoration: none;
    }
    
    
    footer{
        padding: 4rem 0rem;
    }
    .mob-only{
        display: none;
    }
    
    .img{
        width: 100%;
    }
    
    header{
        background-color: #fff;
    }
    #hamburger, #closem{
        background-color: #f9f6f1;
        border: none;
        border-radius: 8px;
        padding: 0.5rem;
    }
    #closem{
        float: right;
    }
    #closem img{
        min-height: 1rem;
    }
    #menu{
        padding: 3rem 2rem;
        width: 100%;
        height: 100vh;
        top: 0;
        position: fixed;
        left: -100%;
        transition: left 1s;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: #fff;
    }
    #menu.show{
        left: 0;
    }
    #menu ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 5rem;
        list-style: none;
    }
    #menu a{
        text-decoration: none;
        color: #6b728f;
        transition: all 0.4s;
    }
    nav a:hover{
        color: #9E9E9E;
    }
    .icon-grp{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;
    }
    
    
    /* Media styling */
    
    @media screen and (max-width:1024px) {
        .ctn-mx{
            margin: 0px 40px;
        }
    }
    @media screen and (max-width: 680px){
        .ctn-mx{
            margin: 0px 20px;
        }
        .mob-only{
            display: inline-block;
        }
        .not{
            text-align: center;
            padding: 0.5rem 1.5rem;
        }
        .nav .mob-no{
            display: none;
        }
    }
    /* Main Styling */
    main section:nth-child(1){
        background-color: #f9f6f1;
        padding: 4.5rem 4rem;
        margin-bottom: 4.5rem;
    }
    main .content1{
        max-width: 25rem;
        
    }

    .inp-grp{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #9E9E9E;
        border-radius: 4px;
        margin: 1rem 0rem;
    }
    .content1 form{
        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }
    .content1 h1{
        margin-bottom: 0.5rem;
    }
    form .btn{
        font-size: 1em;
    }
    .bl-a{
        color: #6b728f;
    }
    .search-inp{
        font-size: 1em;
        background: none;
        border: none;
    }   


    /* Campgrounds */
    .camps{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }
    .camp-item{
        display: flex;
        flex-direction: column;
        gap: 14px;
        justify-content: center;
        border: 1px solid #9E9E9E;
        border-radius: 7px;
        padding: 16px;
    }
    .camp-item img{
        width: 100%;
        border-radius: 7px;
    }
    .camp-item div{
        border-radius: 40px;
    }
    .content1 .search-inp {
        width: 100%;
    }
    .content1 .search-inp:focus-visible{
        border: none;
        outline: none;
    }




    /* Media Styling */
    @media screen and (max-width:1024px) {
        .camps{
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
    }
    @media screen and (max-width: 680px){
        header{
            padding: 2.5rem 0rem;
        }
        .camps{
            display: flex;
            flex-direction: column;
        }
        main section:nth-child(1) {
            padding: 2rem;
        }
        form{
            flex-direction: column;
        }
        form .btn.primary{
            display: inline-block;
            width: 100%;
            margin: 0px;
            margin-bottom: 18px;
        }
    
        
        .content1 form{
            display: block;
        }
    }
    `;
    return(
        <Page>
                    
            <Notification />
            <div className='ctn-mx'>
                <Header />
                <main>
                    <section>
                        <div className="content1">
                            <h1>Welcome to YelpCamp!</h1>
                            <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                            <form action="">
                                <div className="inp-grp">
                                    <img src={SearchIcon} alt="" />
                                    <input className="search-inp" type="text" name="q" id="search-bar" placeholder="Search for camps"/>
                                </div>
                                <input type="submit" value="Search" className="btn primary"/>
                            </form>
                            <a className="bl-a" href="addcamp.html">Or add your own campground</a>
                        </div>
                    </section>
                    <section>
                        <div className="camps">
                            {campList.map((campItem)=>{
                                return(
                                    <div key={campItem.title} className="camp-item">
                                        <div>
                                            <img src={campItem.img} alt={campItem.title} />
                                        </div>
                                        <h4>{campItem.title}</h4>
                                        <p>{campItem.desc}</p>
                                        <div>
                                            <a href="campspot.html" className="btn secondary">Veiw Campground</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        </Page>
    )
}
export default Campgrounds;