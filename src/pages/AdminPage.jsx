import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";
import AdminBackground from "../data/images/admin_background.jpg";
import Pagination from "../ui/Pagination";
import { useDeleteAllDocuments } from "../features/documents/useDeleteAllDocuments";
import { useSearchParams } from "react-router";
import AdminNavbar from "../ui/AdminNavbar";
import usePrices from "../services/usePrices";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0 5rem 0;
  background-image: url(${AdminBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 576px) {
    padding: 8rem 0 5rem 0;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 8rem 0 5rem 0;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 1400px) {
    padding: 6rem 0 5rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const DocumentsContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DocumentsSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AdminPage() {
  const { isLoading, documents, count } = useDocuments();
  const { isLoading1, data: prices_list, error } = usePrices();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (sortOrder) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort", sortOrder);
      return newParams;
    });
  };

  const { deleteAllDocumentsFunction } = useDeleteAllDocuments();
  return (
    <>
      <DocumentsContainer className="container-fluid">
        <AdminNavbar
          handleSortChange={handleSortChange}
          deleteAllDocumentsFunction={deleteAllDocumentsFunction}
          pricesList={prices_list}
        />

        <DocumentsContainerInner className="container">
          <DocumentsSection>
            {documents?.map((doc) => (
              <DocumentSingle
                companyName={doc.company_name}
                month={doc.month}
                documents={doc.documents}
                created_at={doc.created_at}
                key={doc.id}
                documentId={doc.id}
              />
            ))}
          </DocumentsSection>
          <Pagination count={count} />
        </DocumentsContainerInner>
      </DocumentsContainer>
    </>
  );
}

export default AdminPage;
