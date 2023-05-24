import Header from './components/Header';
import React, { useState } from 'react';

function Campgrounds(){
    const [campList, setcampList] = useState([
        {
            title: "Mount Ulap",
            img: "/img/Camp Images/Compressed Images/Mount Ulap.jpg",
            desc: "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
        },
        {
            title: "Callagus Islands", 
            img: "/img/Camp Images/Compressed Images/Calaguas Island.jpg",
            desc: "A Paradise of islands that can rival the white sand beauty of Boracay.",
        },
        {
            title: "Onay Beach",
            img: "/img/Camp Images/Compressed Images/Onay Beach.jpg",
            desc: "This is one of the best beach camping sites, beautiful and pristine.",
        },
        {
            title: "Seven Sisters Waterfall",
            img: "/img/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg",
            desc: "The Seven Sisters is the 39th tallest waterfall in Norway.",
        },
        {
            title: "Latik Riverside",
            img: "/img/Camp Images/Compressed Images/Latik Riverside.jpg",
            desc: "Philippines is one of the most dazzling countries in all of Asia.",
        },
        {
            title: "Buloy Springs",
            img: "/img/Camp Images/Compressed Images/Buloy Springs.jpg",
            desc: "This is one of the best beach camping sites, beautiful and pristine.",
        },

    ])
    return(
        <>
                    
            <link rel="stylesheet" href="assets/css/styles.css"/>
            <link rel="stylesheet" href="assets/css/campgrounds.css"/>
            <Header />
            <main>
                <section>
                    <div className="content1">
                        <h1>Welcome to YelpCamp!</h1>
                        <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                        <form action="">
                            <div className="inp-grp">
                                <img src="assets/img/Search Icon.svg" alt="" />
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
                                <div className="camp-item">
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
        </>
    )
}
export default Campgrounds;