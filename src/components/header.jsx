import { Link } from "react-router-dom"
import HeaderImg from '../assets/Header-img.jpg'

export default function Header() {
    return (
        <header className="header">
            <div className="center">
                <img src={HeaderImg} alt="Header image" className="header-img" />
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </header>
    );
}