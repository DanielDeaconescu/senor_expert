import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import styled from "styled-components";
import { PAGE_SIZE } from "../../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;
  color: white;
  & span {
    font-weight: 600;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  @media (min-width: 992px) {
    background-color: ${(props) =>
      props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
    &:hover:not(:disabled) {
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    }
  }

  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 577px) {
    font-size: 1.4rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        Se afișează intrările de la{" "}
        <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> la{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        din <span>{count}</span> de intrări din baza de date
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Înapoi</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Înainte</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
