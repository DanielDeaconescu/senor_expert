import heroServices from "../data/images/hero_services.jpg";
import backgroundHeroServices from "../data/images/background_hero_services.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: url(${backgroundHeroServices});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function ServicesHeader() {
  return (
    <StyledHeader className="header">
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container mb-5 px-4">
                <img src={heroServices} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 fw-bold">Bun venit la Senor Expert</h1>
                <p className="lead">
                  Are you ready to take your blogging journey to new heights?
                  Blog Mastery is your ultimate guide to creating and managing a
                  successful blog that captivates your audience and drives
                  engagement.
                </p>

                <div className="form-container text-center">
                  <form>
                    <div className="my-4">
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-5"
                        placeholder="Adresa de email"
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg text-white">
                        Free Download
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <svg
        className="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          <style>
            {`.cls-1 {
          fill: #f3f6f9;
        }`}
          </style>
        </defs>
        <title>frame-decoration</title>
        <path
          className="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg> */}
    </StyledHeader>
  );
}

export default ServicesHeader;
