import User1 from "../data/images/user1.jpg";
import User2 from "../data/images/user2.jpg";
import User3 from "../data/images/user3.jpg";

function TestimonialsSection() {
  return (
    <section className="testimonials mb-8">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={User1} alt="" className="rounded-circle mb-3 img-fluid" />
            <p className="lead fst-italic">
              "This ebook completely transformed my blogging journey. The
              practical strategies and valuable insights helped me take my blog
              to new heights. I highly recommend it!"
            </p>
            <p className="fw-bold">Kenny Smith - Portland, ME</p>
          </div>

          <div className="col-md-4 text-center">
            <img src={User2} alt="" className="rounded-circle mb-3 img-fluid" />
            <p className="lead fst-italic">
              "I'm so grateful for this ebook! It provided me with the guidance
              and inspiration I needed to create engaging content and build a
              loyal readership. It's a game-changer!"
            </p>
            <p className="fw-bold">Laurie Mitchell - Miami, FL</p>
          </div>

          <div className="col-md-4 text-center">
            <img src={User3} alt="" className="rounded-circle mb-3 img-fluid" />
            <p className="lead fst-italic">
              "I can't recommend this ebook enough. It's a treasure of blogging
              wisdom. It helped me unlock my creativity, connect with my
              audience, and achieve remarkable results."
            </p>
            <p className="fw-bold">Henry White - Boston, MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
