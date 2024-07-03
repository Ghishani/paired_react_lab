import {Link, Outlet} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default Navigation;