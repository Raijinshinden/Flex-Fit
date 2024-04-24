



function Home(){
    return (
        <section id="heroSection" className="hero-section">
            <img src="../public/images/man-treadmill.jpg"/>
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h1 className="section-title"><span>Are you looking to get in shape,</span>{" "} 
                    <br/>
                    but short on time?</h1>
                    <p className="hero-description"><span>Flex-Fit is a state-of-the-art 24hr gym.</span>{""}
                    <br />
                    So you can come and exercise whenever you want to.</p>
                </div>
                <button className="btn btn-primary">Contact Us</button>
            </div>
        </section>
    );
}

export default Home