import "./About.css";
import portrait from "../assets/10.6 - Runquan Ray Zhou.jpg";

export default function About() {
  return (
    <div className="About">
      <img className="About__img" src={portrait} alt="self portrait" />
      <p>Youtunes By: Runquan (Ray) Zhou</p>
      <div className="About__icons">
        <a href="mailto:rzhou@pursuit.org">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="https://github.com/runquan-ray-zhou">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/runquanrayzhou/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/runquan-ray-zhou/1.3-youtunes-app-frontend">
          <i className="fa-solid fa-code"></i>
        </a>
      </div>
      <p>All Rights Reserved 2025</p>
    </div>
  );
}
