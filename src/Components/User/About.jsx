import { Link } from "react-router-dom";

export default function About(){
  return(
    <>
  <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <h1 className="mb-3 bread">About</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="index.html">Home</Link>
            </span>{" "}
            <span>About</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-section ftco-intro"
    style={{ backgroundImage: "url(images/intro.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6">
          <div className="heading-section ftco-animate">
            <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
          </div>
          <p className="ftco-animate">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <ul className="mt-5 do-list">
            <li className="ftco-animate">
              <Link to="#">
                <span className="ion-ios-checkmark-circle mr-3" />
                Spa &amp; Massage boosts brain power
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="ion-ios-checkmark-circle mr-3" />
                Spa &amp; Massage helps you to breathe better
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="ion-ios-checkmark-circle mr-3" />
                Spa &amp; Massage improves your strength
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="ion-ios-checkmark-circle mr-3" />
                Spa &amp; Massage helps you to focus
              </Link>
            </li>
            <li className="ftco-animate">
              <Link to="#">
                <span className="ion-ios-checkmark-circle mr-3" />
                Spa &amp; Massage helps give meaning to your day
              </Link>
            </li>
          </ul>
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
  <section className="ftco-section ftco-section-services bg-light">
    <div className="container-fluid px-md-5">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="services text-center ftco-animate">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-candle" />
            </div>
            <div className="text mt-3">
              <h3>Aromatheraphy</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="services text-center ftco-animate">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-beauty-treatment" />
            </div>
            <div className="text mt-3">
              <h3>Skin Care</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="services text-center ftco-animate">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-stone" />
            </div>
            <div className="text mt-3">
              <h3>Herbal Spa</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="services text-center ftco-animate">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-relax" />
            </div>
            <div className="text mt-3">
              <h3>Body Massage</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-10 heading-section ftco-animate text-center">
          <h3 className="subheading">Testimony</h3>
          <h2 className="mb-1">Successful Stories</h2>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="text">
                  <div className="line pl-5">
                    <p className="mb-4 pb-1">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    ></div>
                    <div className="ml-4">
                      <p className="name">Gabby Smith</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="text">
                  <div className="line pl-5">
                    <p className="mb-4 pb-1">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    ></div>
                    <div className="ml-4">
                      <p className="name">Floyd Weather</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="text">
                  <div className="line pl-5">
                    <p className="mb-4 pb-1">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    ></div>
                    <div className="ml-4">
                      <p className="name">James Dee</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="text">
                  <div className="line pl-5">
                    <p className="mb-4 pb-1">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_4.jpg)" }}
                    ></div>
                    <div className="ml-4">
                      <p className="name">Lance Roger</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div className="text">
                  <div className="line pl-5">
                    <p className="mb-4 pb-1">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    ></div>
                    <div className="ml-4">
                      <p className="name">Kenny Bufer</p>
                      <span className="position">Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="ftco-counter img"
    id="section-counter"
    style={{ backgroundImage: "url(images/bg_3.jpg)" }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={2560}>
                    0
                  </strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={60}>
                    0
                  </strong>
                  <span>Treatments</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={50}>
                    0
                  </strong>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={100}>
                    0
                  </strong>
                  <span>Lesson Conducted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-gallery ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h3 className="subheading">Gallery</h3>
          <h2 className="mb-1">See the latest photos</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ftco-animate">
          <Link
            to="images/gallery-1.jpg"
            className="gallery image-popup img d-flex align-items-center"
            style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-instagram" />
            </div>
          </Link>
        </div>
        <div className="col-md-3 ftco-animate">
          <Link
            to="images/gallery-2.jpg"
            className="gallery image-popup img d-flex align-items-center"
            style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-instagram" />
            </div>
          </Link>
        </div>
        <div className="col-md-3 ftco-animate">
          <Link
            to="images/gallery-3.jpg"
            className="gallery image-popup img d-flex align-items-center"
            style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-instagram" />
            </div>
          </Link>
        </div>
        <div className="col-md-3 ftco-animate">
          <Link
            to="images/gallery-4.jpg"
            className="gallery image-popup img d-flex align-items-center"
            style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-instagram" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
</>

  )
}