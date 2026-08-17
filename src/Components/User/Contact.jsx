import { Link } from "react-router-dom";

export default function Contact(){
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
        <div className="col-md-9 text-center">
          <h1 className="mb-3 bread">Contact us</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">home</Link>
            </span>{" "}
            <span>Contact us</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-section">
    <div className="container">
      <div className="row block-9">
        <div className="col-md-4 contact-info  bg-light p-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="col-md-12 mb-3">
              <p>
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p>
                <span>Phone:</span>{" "}
                <Link to="tel://1234567920">+ 1235 2355 98</Link>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p>
                <span>Email:</span>{" "}
                <Link to="mailto:info@yoursite.com">info@yoursite.com</Link>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p>
                <span>Website:</span> <Link to="#">yoursite.com</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-6 ">
          <form action="#" className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
</>

  )
}