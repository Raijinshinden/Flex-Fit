



function Home(){
    return (
        <section id="home">
            <div>
                <img src="/images/man-treadmill.jpg" className="md:w-full h-screen object-cover lg:pt-10"/>
                <div className="invisible md:visible absolute top-60 left-0 text-left mt-14 ml-6 px-4 py-4 rounded-xl bg-gray-800">
                    <h1 className="pb-2 text-5xl font-bold text-amber-500"><span>Are you looking to get in shape,</span>{" "} 
                    <br/>
                    but short on time?</h1>
                    <p className="py-2 text-3xl text-white"><span>Flex-Fit is a state-of-the-art 24hr gym.</span>{""}
                    <br />
                    So you can come and exercise whenever you want to.</p>
                <button className="bg-amber-500 px-4 py-2 mt-2 text-3xl text-white rounded-full hover:bg-white hover:text-amber-500 transition delay-100 hover:ease-in-out">Trial</button>
                </div>
                <div className="flex items-center justify-center w-full h-screen absolute top-0 bg-white/50 md:invisible">
                    <div className="top-24 bg-gray-600 rounded-xl hover:cursor-pointer">
                        <h1 className="text-center text-5xl text-white p-12">
                            Welcome to <br/>
                            <span className="text-amber-500 font-bold">Flex-Fit</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home