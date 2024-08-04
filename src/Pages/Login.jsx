import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    return (
    <div className="Login">
        <div className="circle">
            <div className="circle1">
                <div className="circle2">
                    <div className="circle3">
                    <img src="https://media4.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=790b76114ee03ef7f860492a9083d77f86191a7bf340002c&rid=giphy.gif&ct=g" alt="tuner icon" />
                    </div>
                </div>
            </div>
        <span className="login__app-name">Youtunes</span>
        </div>
        <div className="login-button__container">
            <div className="edition">
            <p>2024 EDITION</p>
            </div>
            <Link to="/home">
                <button className="login-button">LOGIN</button>
            </Link>
        </div>
    </div>
    )
}