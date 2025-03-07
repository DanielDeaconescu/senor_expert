import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true; // Prevent re-triggering

          let start = 0;
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newValue = Math.floor(progress * target);

            setCount(newValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target); // Ensure final value is exact
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={counterRef} className="counter">
      {count.toLocaleString()}
    </span>
  );
};

function InfoSection() {
  return (
    <section className="statement mb-5">
      <div className="container">
        <h3>Statistici Relevante Senor Expert</h3>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="title">
                + <Counter target={10} /> <span> ani de experiență</span>
              </div>
            </Card>
            <small>oferind servicii de contabilitate.</small>
          </div>
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i className="fa-solid fa-coins"></i>
              </div>
              <div className="title">
                + <Counter target={10000} />{" "}
                <span> de declarații fiscale /an</span>
              </div>
            </Card>
            <small>
              asigurându-ne că respectam întotdeauna legislația în vigoare.
            </small>
          </div>
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i className="fa-solid fa-piggy-bank"></i>
              </div>
              <div className="title">
                + <Counter target={30000} /> <span> de euro economii /an</span>
              </div>
            </Card>
            <small>pentru clienții care au ales Senor Expert.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
