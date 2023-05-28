import styled from 'styled-components';
import {StyleCss, CampSpotCss} from "./components/Css"
import Header from './components/Header';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { Link } from 'react-router-dom';
import ChatBubble from "./img/Chat Bubble.svg"

import img1 from "./img/Camp Images/High Quality Images/Mount Ulap.jpg"
import { useEffect } from 'react';


function CampSpot(props){
    useEffect(() => {
        document.title = 'YelpCamp | Mount Ulap';
      }, []);
    
    const Page = styled.div`
    ${StyleCss}
    ${CampSpotCss}
    `;
    const Content = {
        title: "Mount Ulap",
        img: img1,
        price: "104.99",
        desc: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
        author: "Andrew Mike",
    }
    const FetchedComments= [ 
        {
            name: "Adam Jones",
            time: "13h ago",
            comment: "Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!",
        },
        {
            name: "Isaac Dylan",
            time: "1 day ago",
            comment: "Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.",
        },
        {
            name: "Hudson Luca",
            time: "3 day ago",
            comment: "Definitely recommend going there, not too far and not a lot of people to ruin the experience.",

        }


    ]
    return (
        <Page>
            <Notification />
            <div className='ctn-mx'>
                <Header />
                <main>
                    <section>
                        <div className="content location">
                            <iframe title={Content.title} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48266.235665220265!2d-73.7534736623464!3d40.87977991286715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d89d5ba56b5%3A0xcf7ac33b6a7edaa2!2sNew%20Rochelle%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1684589603510!5m2!1sen!2sng" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
                    <section>
                        <section>
                            <div className="content">
                                <img className="img" src={Content.img} alt="Mount Ulap"/>
                                <div className="space-btw">
                                    <h2>{Content.title}</h2>
                                    <p className="price">${Content.price}/night</p>
                                </div>
                                <p>{Content.desc}</p>
                                <p className="author">Submitted by {Content.author}</p>
                            </div>
                        </section>
                        <section>
                            <div className="content comm-ctn">
                                {FetchedComments.map((comment) => {
                                    return (
                                    <div  key={comment.name}>
                                    <div  className="comment">
                                        <div className="space-btw">
                                            <h4>{comment.name}</h4>
                                            <p className="time">{comment.time}</p>
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                    <hr/>
                                    </div>
                                    )
                                })
                                }
                                <div className="rt-ch">
                                    <Link to="/comments/add" className="icon-grp btn primary">
                                        <img src={ChatBubble} alt="Chat Bubble"/>
                                        <p>Leave a Review</p>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>
                <Footer />
            </div>

        </Page>
    )



}

export default CampSpot;