import { Link } from "react-router-dom";

export default function Login(){
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
          <h1 className="mb-3 bread">LOGIN FORM</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">home</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-section">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-1" />
        <div className="col-md-6 ">
          <form action="#" className="contact-form">
            <div className="row">
                
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-md-12">
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
                placeholder="Password"
              />
            </div>
           
            <div className="col-md-12 text-center" >
              <input
                type="submit"
                defaultValue="Submitted"
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