import { Link } from "react-router-dom"
export default function User_Header(){
  return(
    <>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="/">
        <span className="flaticon-lotus" />
        Energen S
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="treatments" className="nav-link">
              Treatments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="specialists" className="nav-link">
              Specialists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
             <li className="nav-item">
            <Link to="login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
</>

  )
}