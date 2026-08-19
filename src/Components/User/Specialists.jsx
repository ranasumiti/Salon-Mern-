import { Link } from "react-router-dom";

export default function Specialists(){
    return(<>
    <>
  <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        <div className="col-md-9  text-center">
          <h1 className="mb-3 bread">Our Team Specialists</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">Home</Link>
            </span>{" "}
            {/* <span>Treatments</span> */}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-12 heading-section text-center">
          <h3 className="subheading">Specialists</h3>
          <h2 className="mb-1">Meet Our Spa Specialists</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 d-flex">
          <div className="coach align-items-stretch">
            <div
              className="img"
              style={{ backgroundImage: "url(images/trainer-1.jpg)" }}
            />
            <div className="text bg-white p-4 ">
              <span className="subheading">Owner / Head Coach</span>
              <h3>
                <Link href="#">Elizabeth Nelson</Link>
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-social-media d-flex mt-4">
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-instagram" />
                  </Link>
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex">
          <div className="coach align-items-stretch">
            <div
              className="img"
              style={{ backgroundImage: "url(images/trainer-2.jpg)" }}
            />
            <div className="text bg-white p-4 ">
              <span className="subheading">Owner / Head Coach</span>
              <h3>
                <Link href="#">Scarlett Torres</Link>
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-social-media d-flex mt-4">
                <li className="">
                  <Link
                    href="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-instagram" />
                  </Link>
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex">
          <div className="coach align-items-stretch">
            <div
              className="img"
              style={{ backgroundImage: "url(images/trainer-3.jpg)" }}
            />
            <div className="text bg-white p-4 ">
              <span className="subheading">Owner / Head Coach</span>
              <h3>
                <Link href="#">Victoria Wright</Link>
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-social-media d-flex mt-4">
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-instagram" />
                  </Link>
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex">
          <div className="coach align-items-stretch">
            <div
              className="img"
              style={{ backgroundImage: "url(images/trainer-4.jpg)" }}
            />
            <div className="text bg-white p-4 ">
              <span className="subheading">Owner / Head Coach</span>
              <h3>
                <Link href="#">Stella Perry</Link>
              </h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-social-media d-flex mt-4">
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="mr-2 d-flex justify-content-center align-items-center"
                  >
                    <span className="icon-instagram" />
                  </Link>
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    
    </>)
}