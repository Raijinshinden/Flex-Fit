



function Home(){
    return (
        <section id="heroSection" className="hero-section">
            <div>
                <img src="/images/man-treadmill.jpg" className="w-full h-screen object-cover"/>
                <div className="absolute top-20 left-0 text-left mt-10 ml-10 px-4 py-4 rounded-lg bg-gray-800">
                    <h1 className="text-4xl font-bold text-amber-500"><span>Are you looking to get in shape,</span>{" "} 
                    <br/>
                    but short on time?</h1>
                    <p className="text-xl text-white"><span>Flex-Fit is a state-of-the-art 24hr gym.</span>{""}
                    <br />
                    So you can come and exercise whenever you want to.</p>
                <button className="bg-amber-500 px-2 py-2 text-white rounded-full">Contact Us</button>
                </div>
            </div>
        </section>
    );
}

export default Home