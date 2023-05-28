import React, { useState } from 'react';
import Notification from './components/Notification';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import {StyleCss, CampgroundCss} from "./components/Css"

import SearchIcon from './img/Search Icon.svg'
import img1 from "./img/Camp Images/Compressed Images/Mount Ulap.jpg"

import img2 from "./img/Camp Images/Compressed Images/Calaguas Island.jpg"

import img3 from "./img/Camp Images/Compressed Images/Onay Beach.jpg"

import img4 from "./img/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg"

import img5 from "./img/Camp Images/Compressed Images/Latik Riverside.jpg" 

import img6 from "./img/Camp Images/Compressed Images/Buloy Springs.jpg"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function Campgrounds(){
    useEffect(() => {
        document.title = 'YelpCamp | Campgrounds';
      }, []);
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
    ${StyleCss}
    ${CampgroundCss}
    `
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
                            <Link className="bl-a" to="/campgrounds/add">Or add your own campground</Link>
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
                                            <Link to="campspot" className="btn secondary">Veiw Campground</Link>
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