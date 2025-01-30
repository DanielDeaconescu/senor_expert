import { useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

function InfoSection() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 400;

    const animateCounters = () => {
      let completedAnimations = 0;
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText.replace(/,/g, "");
          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment).toLocaleString();
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target.toLocaleString();
            completedAnimations++;
            if (completedAnimations === counters.length) {
              observer.disconnect();
            }
          }
        };

        updateCount();
      });
    };

    const statement = document.querySelector(".statement");
    if (!statement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(statement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statement mb-5">
      <div className="container">
        <h3>Statistici Relevante Senor Expert</h3>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div className="title">
                +
                <span className="counter" data-target="10">
                  10
                </span>
                <span> ani de experiență</span>
              </div>
            </Card>
            <small>oferind servicii de contabilitate.</small>
          </div>
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i class="fa-solid fa-coins"></i>
              </div>
              <div className="title">
                +
                <span className="counter" data-target="10000">
                  10.000
                </span>
                <span> de declarații fiscale /an</span>
              </div>
            </Card>
            <small>asigurându-ne că respectam întotdeauna legislația.</small>
          </div>
          <div className="col-md-4 col-sm-6">
            <Card className="statistic-card">
              <div className="icon">
                <i class="fa-solid fa-piggy-bank"></i>
              </div>
              <div className="title">
                +
                <span className="counter" data-target="30000">
                  30.000
                </span>
                <span> de euro economii /an</span>
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
