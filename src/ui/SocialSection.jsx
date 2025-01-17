function SocialSection() {
  return (
    <section className="social text-bg-dark py-6 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center fs-4">
            <p>
              Stay connected and join our vibrant community. For any inquiries
              or assistance, feel free to reach out to us
            </p>
            <div className="social-icons d-flex justify-content-center gap-4">
              <i className="fab fa-facebook fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
              <i className="fab fa-instagram fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
              <i className="fab fa-pinterest fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
