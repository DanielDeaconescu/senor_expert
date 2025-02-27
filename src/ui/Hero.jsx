import HeaderHomeBackground from "../data/images/header-home-background.jpg";
import HeaderHomeImage from "../data/images/header-home-image.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: url(${HeaderHomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & .text-container {
    position: relative;
    z-index: 8;
  }

  & .frame-decoration {
    position: relative;
    z-index: 2;
  }
`;

const TextLargeScreen = styled.span`
  display: none;
`;

const StyledParagraph = styled.p`
  text-align: justify;
`;

const StyledHeaderHomeImage = styled.img`
  width: 420px;
  border-radius: 1rem;
  position: relative;
  z-index: 8;
`;

const StyledText = styled.div`
  text-align: justify;
`;

const ItemText = styled.div`
  display: flex;
  line-height: 1.5;
  @media (max-width: 576px) {
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    text-align: left;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    text-align: left;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    text-align: left;
  }

  @media (min-width: 1400px) {
    text-align: justify;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSection2SideImage = styled.img`
  border-radius: 1rem;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ValuesTitle = styled.h3`
  padding-top: 1rem;
`;

const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & h4 {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    justify-content: center;
    white-space: nowrap;
  }
`;

const ListItem = styled.li`
  text-align: center;
`;

function Hero() {
  return (
    <StyledHeader className="hero">
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container mb-5 px-4">
                <StyledHeaderHomeImage
                  src={HeaderHomeImage}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 fw-bold">
                  Bun venit la Senor Expert!
                </h1>
                <StyledParagraph className="lead">
                  Suntem o echipă de experți contabili care oferă soluții
                  complete de contabilitate, fiscalitate, resurse umane și
                  salarizare, consultanță pentru înființarea societăților
                  comerciale și multe altele.
                </StyledParagraph>

                {/* <div className="form-container text-center"> */}
                <button
                  className="btn btn-primary btn-lg text-white"
                  data-bs-target="#hero-find-out-more"
                  data-bs-toggle="modal"
                >
                  Află mai mult
                </button>

                <div
                  class="modal fade modal-custom"
                  id="hero-find-out-more"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body modal-body-custom text-center">
                        <h4>Valorile noastre</h4>
                        <p>
                          Valorile noastre stau la baza fiecărei colaborări:
                          profesionalismul în tot ceea ce facem, transparența în
                          comunicare și acțiuni și angajamentul pe care ni-l
                          luăm față de relațiile de lungă durată.
                        </p>
                        <ul className="list-group list-group-flush lh-lg">
                          <li className="list-group-item">
                            <ItemTitle>
                              <i class="fa-solid fa-address-card"></i>
                              <h4>Profesionalism</h4>
                            </ItemTitle>
                            <ItemText>
                              Ne dedicăm oferirii unor servicii contabile la
                              cele mai înalte standarde de calitate, respectând
                              legislația în vigoare și cele mai bune practici
                              din domeniu.
                            </ItemText>
                          </li>
                          <li className="list-group-item">
                            <ItemTitle>
                              <i class="fas fa-eye"></i>
                              <h4>Transparență</h4>
                            </ItemTitle>
                            <ItemText>
                              Construim relații bazate pe încredere, oferind
                              soluții contabile clare, corecte și transparente
                              pentru afacerea dumneavoastră.
                            </ItemText>
                          </li>

                          <li className="list-group-item ">
                            <ItemTitle>
                              <i class="fas fa-handshake"></i>
                              <h4>Relații de Lungă Durată</h4>
                            </ItemTitle>
                            <ItemText>
                              Construim parteneriate durabile, bazate pe
                              comunicare eficientă și sprijin constant, pentru
                              succesul clienților noștri.
                            </ItemText>
                          </li>
                        </ul>
                      </div>
                      <div class="modal-footer justify-content-end modal-footer-custom">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Închide
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
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
      </svg>
    </StyledHeader>
  );
}

export default Hero;
