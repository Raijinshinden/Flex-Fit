



function Home(){
    return (
        <section id="home">
            <div>
                <img src="/images/man-treadmill.jpg" className="md:w-full h-screen object-cover"/>
                <div className="absolute top-20 left-0 text-left mt-14 ml-6 px-4 py-4 rounded-xl bg-gray-800">
                    <h1 className="text-4xl font-bold text-amber-500"><span>Are you looking to get in shape,</span>{" "} 
                    <br/>
                    but short on time?</h1>
                    <p className="mt-2 text-xl text-white"><span>Flex-Fit is a state-of-the-art 24hr gym.</span>{""}
                    <br />
                    So you can come and exercise whenever you want to.</p>
                <button className="bg-amber-500 px-4 py-2 mt-2 text-2xl text-white rounded-full hover:bg-white hover:text-amber-500 delay-300">Trial</button>
                </div>
            </div>
        </section>
    );
}

export default Home