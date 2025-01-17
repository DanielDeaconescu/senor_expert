import authorImage from "../data/images/author.png";

function Section3() {
  return (
    <section className="details my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container p-5">
              <img src={authorImage} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-container d-flex flex-column justify-content-center h-100">
              <h2 className="display-6">Craft Remarkable Content</h2>
              <p>
                Discover techniques for effective storytelling, engaging
                visuals, and compelling calls-to-action. Unlock the secrets of
                creating a consistent and authentic brand voice that sets you
                apart from the competition.
              </p>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Embrace Your Unique Voice:</strong> Learn how to
                  harness the power of your unique voice.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Spark Creativity: </strong> Explore techniques to
                  spark creativity and overcome writer's block.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong>Engage Your Readers:</strong> Discover strategies for
                  creating content that engages your readers on a deeper level.
                </li>
              </ul>
              <a className="btn btn-primary text-white mt-4 align-self-start">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
