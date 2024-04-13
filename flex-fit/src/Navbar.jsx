export default function Navbar() {
    return(
        <nav className="navbar">
            <a href="/" className="site-title">Flex Fit</a>
            <ul className="nav-list">
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="classes">Classes</a>
                </li>
                <li>
                    <a href="contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}