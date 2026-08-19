import { Link } from "react-router-dom";

export default function Blog(){
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
          <h1 className="mb-3 bread">Blog</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">Home</Link>
            </span>{" "}
            {/* <span>Blog</span> */}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_1.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_2.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_3.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_4.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry justify-content-end">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_5.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="blog-entry">
            <Link
              to="/blog/blogsingle"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_6.jpg")' }}
            ></Link>
            <div className="text p-4 float-right d-block">
              <div className="d-flex align-items-center pt-2 mb-4">
                <div className="one">
                  <span className="day">25</span>
                </div>
                <div className="two">
                  <span className="yr">2019</span>
                  <span className="mos">September</span>
                </div>
              </div>
              <h3 className="heading mt-2">
                <Link to="/blog/blogsingle">Is wellness the new luxury</Link>
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <Link to="#">&lt;</Link>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">4</Link>
              </li>
              <li>
                <Link to="#">5</Link>
              </li>
              <li>
                <Link to="#">&gt;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    
    </>)
}