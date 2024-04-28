



function Home(){
    return (
        <section id="heroSection" className="hero-section">
            <img src="/images/man-treadmill.jpg" className="w-full h-screen object-cover"/>
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h1 className="text-4xl font-bold text-amber-500"><span>Are you looking to get in shape,</span>{" "} 
                    <br/>
                    but short on time?</h1>
                    <p className="text-xl"><span>Flex-Fit is a state-of-the-art 24hr gym.</span>{""}
                    <br />
                    So you can come and exercise whenever you want to.</p>
                </div>
                <button className="bg-amber-500 px-2 py-2">Contact Us</button>
            </div>
        </section>
    );
}

export default Home