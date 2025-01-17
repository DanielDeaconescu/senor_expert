import descriptionImg from "../data/images/description.png";

function Section2() {
  return (
    <section id="details" className="details my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container d-flex flex-column justify-content-center h-100">
              <h2 className="display-6">Unlock Your Blogging Potential</h2>
              <p>
                Are you ready to unleash your true blogging potential? Our
                ebook, "Blog Mastery," provides you with the tools and knowledge
                to take your blog to the next level.
              </p>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Unleash Your Creativity:</strong> Our ebook empowers
                  you to unleash your creativity and express your unique voice
                  through your blog.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Maximize Your Reach:</strong> Learn how to optimize
                  your blog for search engines.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Monetization Strategies:</strong> Discover various
                  monetization strategies, such as sponsored content & affiliate
                  marketing.
                </li>
              </ul>

              <a className="btn btn-primary text-white mt-4 align-self-start">
                Get your copy now
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-container p-5">
              <img src={descriptionImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
