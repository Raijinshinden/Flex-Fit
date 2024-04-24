export default function Navbar() {
    return(
        <nav>
            <h1 href="/">Flex-Fit</h1>
            <ul className="flex ">
                <li className="mr-6">
                    <a href="/">Home</a>
                </li>
                <li className="mr-6">
                    <a href="about">About</a>
                </li>
                <li className="mr-6">
                    <a href="classes">Classes</a>
                </li>
                <li className="mr-6"> 
                    <a href="contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}
