import { Link } from "react-router-dom"
export default function User_Footer(){
  return(
    <>
    <footer className="ftco-footer ftco-section">
  <div className="container">
    <div className="row d-flex">
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Energen</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="ftco-footer-social list-unstyled float-lft mt-3">
            <li className="ftco-animate">
              <Link to="#">
                <span className="icon-twitter" />
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="icon-facebook" />
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="icon-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-md-4">
          <h2 className="ftco-heading-2">Popular Links</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="#">Aromatheraphy</Link>
            </li>
            <li>
              <Link to="#">Skin Care</Link>
            </li>
            <li>
              <Link to="#">Herbal Spa</Link>
            </li>
            <li>
              <Link to="#">Body Massage</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Our Spa</Link>
            </li>
            <li>
              <Link to="#">Treatments</Link>
            </li>
            <li>
              <Link to="#">Specialists</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon icon-map-marker" />
                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li>
                <Link to="#">
                  <span className="icon icon-phone" />
                  <span className="text">+2 392 3929 210</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="icon icon-envelope" />
                  <span className="text">info@yourdomain.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p className="mb-0">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="icon-heart" aria-hidden="true" /> by{" "}
          <Link to="https://colorlib.com" target="_blank">
            Colorlib
          </Link>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}