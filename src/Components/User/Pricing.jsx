import { Link } from "react-router-dom";

export default function Pricing(){

    return(<>
    
    <>
  <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        <div className="col-md-9  text-center">
          <h1 className="mb-3 bread">Pricing</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">Home</Link>
            </span>{" "}
            {/* <span>Pricing</span> */}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="offer-deal text-center px-2 px-lg-5">
            <div
              className="img"
              style={{ backgroundImage: "url(images/offer-deal-1.jpg)" }}
            />
            <div className="text mt-4">
              <h3 className="mb-4">Book Your Treatment</h3>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <Link to="#" className="btn btn-white px-4 py-3">
                  {" "}
                  Book A Treatment{" "}
                  <span className="ion-ios-arrow-round-forward" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="offer-deal active text-center px-2 px-lg-5">
            <div
              className="img"
              style={{ backgroundImage: "url(images/offer-deal-2.jpg)" }}
            />
            <div className="text mt-4">
              <h3 className="mb-4">Great Gift Packages</h3>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <Link to="#" className="btn btn-white px-4 py-3">
                  {" "}
                  Book A Treatment{" "}
                  <span className="ion-ios-arrow-round-forward" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="offer-deal text-center px-2 px-lg-5">
            <div
              className="img"
              style={{ backgroundImage: "url(images/offer-deal-3.jpg)" }}
            />
            <div className="text mt-4">
              <h3 className="mb-4">Special Offer &amp; Deal</h3>
              <p className="mb-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <Link to="#" className="btn btn-white px-4 py-3">
                  {" "}
                  Book A Treatment{" "}
                  <span className="ion-ios-arrow-round-forward" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center">
          <h3 className="subheading">Pricing Tables</h3>
          <h2 className="mb-1">Pricing Treatments</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Year Card</h2>
              <span className="price">
                <sup>$</sup> <span className="number">449</span>
              </span>
              <span className="excerpt d-block">For 1 Year</span>
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              <ul className="pricing-text mb-5">
                <li>Face Treatments</li>
                <li>Nail Treatments</li>
                <li>Medical Treatments</li>
                <li>Hair Removal</li>
              </ul>
              <Link to="#" className="btn btn-primary d-block px-2 py-4">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 blank">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Monthly Card</h2>
              <span className="price">
                <sup>$</sup> <span className="number">200</span>
              </span>
              <span className="excerpt d-block">For 1 Month</span>
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              <ul className="pricing-text mb-5">
                <li>Face Treatments</li>
                <li>Nail Treatments</li>
                <li>Medical Treatments</li>
                <li>Hair Removal</li>
              </ul>
              <Link to="#" className="btn btn-primary d-block px-2 py-4">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="block-7">
            <div className="text-center">
              <h2 className="heading">Weekly Card</h2>
              <span className="price">
                <sup>$</sup> <span className="number">85</span>
              </span>
              <span className="excerpt d-block">For 1 Week</span>
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              <ul className="pricing-text mb-5">
                <li>Face Treatments</li>
                <li>Nail Treatments</li>
                <li>Medical Treatments</li>
                <li>Hair Removal</li>
              </ul>
              <Link to="#" className="btn btn-primary d-block px-2 py-4">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    
    </>)
}