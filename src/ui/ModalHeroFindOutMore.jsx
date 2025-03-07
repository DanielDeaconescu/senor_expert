import styled from "styled-components";

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

function ModalHeroFindOutMore() {
  return (
    <div
      class="modal fade modal-custom"
      id="hero-find-out-more"
      aria-labelledby="hero-find-out-more-modal"
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
              profesionalismul în tot ceea ce facem, transparența în comunicare
              și acțiuni și angajamentul pe care ni-l luăm față de relațiile de
              lungă durată.
            </p>
            <ul className="list-group list-group-flush lh-lg">
              <li className="list-group-item">
                <ItemTitle>
                  <i class="fa-solid fa-address-card"></i>
                  <h4>Profesionalism</h4>
                </ItemTitle>
                <ItemText>
                  Ne dedicăm oferirii unor servicii contabile la cele mai înalte
                  standarde de calitate, respectând legislația în vigoare și
                  cele mai bune practici din domeniu.
                </ItemText>
              </li>
              <li className="list-group-item">
                <ItemTitle>
                  <i class="fas fa-eye"></i>
                  <h4>Transparență</h4>
                </ItemTitle>
                <ItemText>
                  Construim relații bazate pe încredere, oferind soluții
                  contabile clare, corecte și transparente pentru afacerea
                  dumneavoastră.
                </ItemText>
              </li>

              <li className="list-group-item ">
                <ItemTitle>
                  <i class="fas fa-handshake"></i>
                  <h4>Relații de Lungă Durată</h4>
                </ItemTitle>
                <ItemText>
                  Construim parteneriate durabile, bazate pe comunicare
                  eficientă și sprijin constant pentru succesul clienților
                  noștri.
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
  );
}

export default ModalHeroFindOutMore;
