
function LandingPage(){
    return (
        <>
            
            <link rel="stylesheet" href="assets/css/index.css"/>
            <main>
                <section className="lft">
                    <div>
                        <img className="logo" src="assets/img/Logo.svg" alt=""/>
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
                            <a className="btn primary" href="campgrounds.html">View Campgrounds</a>
                            <div>
                                <p>Partnered with:</p>
                                <div className="img-row">
                                    <img src="assets/img/Airbnb.svg" alt=""/>
                                    <img src="assets/img/Booking.svg" alt=""/>
                                    <img src="assets/img/Plum Guide.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rgh">
                </section>
            </main>
        </>
    )
}

export default LandingPage;