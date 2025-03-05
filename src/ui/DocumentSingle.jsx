import React, { useContext, useEffect, useState } from "react";
import JSZip from "jszip";
import styled from "styled-components";
import { saveAs } from "file-saver";
import supabase from "../services/supabase";
import { useDeleteDocument } from "../features/documents/useDeleteDocument";
import Modal, { ModalContext } from "../ui/Modal";
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";

const DocumentItem = styled.div`
  padding: 1rem;
  border: 1px solid white;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  z-index: 5;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
`;

const DownloadButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: black;
`;

const DocumentSingleActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 350px;
  }
`;

const ConfirmationActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

function DocumentSingle({
  companyName,
  month,
  documents,
  created_at,
  documentId,
}) {
  const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Descarcă documentele");
  const { deleteDocumentFunction, isDeleting } = useDeleteDocument();

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Define month names in Romanian
    const months = [
      "Ianuarie",
      "Februarie",
      "Martie",
      "Aprilie",
      "Mai",
      "Iunie",
      "Iulie",
      "August",
      "Septembrie",
      "Octombrie",
      "Noiembrie",
      "Decembrie",
    ];

    // Extract date parts
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${month} ${year}, ora ${hours}:${minutes}`;
  }

  const documentUrls = Array.isArray(documents) ? documents : [documents];

  useEffect(() => {
    // Check if there are valid document URLs
    const cleanedUrls = documentUrls
      .map((url) => {
        if (typeof url === "string") {
          try {
            return JSON.parse(url); // Parse JSON strings if necessary
          } catch (e) {
            return url; // If it's not a JSON string, return as is
          }
        }
        return url;
      })
      .flat()
      .filter((url) => typeof url === "string" && url.trim() !== ""); // Remove invalid/empty strings

    // Update button state and text
    if (cleanedUrls.length === 0) {
      setIsDownloadDisabled(true);
      setButtonText("Niciun document");
    } else {
      setIsDownloadDisabled(false);
      setButtonText("Descarcă documentele");
    }
  }, [documents, documentUrls]); // Run this whenever `documents` changes

  const downloadDocuments = async () => {
    try {
      console.log("Starting to process documents...");

      const cleanedUrls = documentUrls
        .map((url) => {
          if (typeof url === "string") {
            try {
              return JSON.parse(url); // Parse JSON strings if necessary
            } catch (e) {
              return url; // If it's not a JSON string, return as is
            }
          }
          return url;
        })
        .flat()
        .filter((url) => typeof url === "string" && url.trim() !== ""); // Remove invalid/empty strings

      console.log("Flattened and cleaned document URLs:", cleanedUrls);

      const zip = new JSZip();
      let filesAdded = 0;

      for (const url of cleanedUrls) {
        console.log("Processing URL:", url);

        if (typeof url === "string" && url.trim() !== "") {
          const fileName = url.split("/").pop(); // Extract the file name
          console.log("Downloading file:", fileName);

          try {
            const { data, error } = await supabase.storage
              .from("accounting_docs")
              .download(fileName);

            if (error) {
              console.error("Error downloading file", fileName, error);
            } else {
              zip.file(fileName, data); // Add file to ZIP
              filesAdded++;
              console.log(`Added ${fileName} to the ZIP archive`);
            }
          } catch (err) {
            console.error(`Error downloading file ${fileName}:`, err);
          }
        }
      }

      if (filesAdded > 0) {
        console.log("All files processed. Generating ZIP...");
        const zipBlob = await zip.generateAsync({ type: "blob" });
        saveAs(zipBlob, "documents.zip");
        console.log("Download started.");
      } else {
        console.warn("No files were added to the ZIP archive.");
      }
    } catch (err) {
      console.error("An error occurred while processing documents:", err);
    }
  };

  return (
    <DocumentItem>
      <div>
        <strong>
          <span>Nume firmă: </span>
        </strong>
        <span>{companyName}</span>
      </div>
      <div>
        <strong>
          <span>Luna: </span>
        </strong>
        <span>{month}</span>
      </div>
      <div>
        <strong>
          <span>Documente încărcate la: </span>
        </strong>
        <span>{formatTimestamp(created_at)}</span>
      </div>
      <DocumentSingleActions>
        <DownloadButton
          onClick={downloadDocuments}
          disabled={isDownloadDisabled}
        >
          {buttonText}
        </DownloadButton>
        <Modal>
          <Modal.Open opens="delete-confirmation">
            <button className="btn btn-danger" disabled={isDeleting}>
              Șterge
            </button>
          </Modal.Open>
          <Modal.Window name="delete-confirmation">
            <ConfirmationContainer>
              <h4 className="text-center">
                Sigur doriți să ștergeți intrarea din baza de date?
              </h4>
              <p className="text-danger text-center">
                Dacă ștergeți această intrare în baza de date, documentele și
                informațiile corespunzătoare vor fi șterse definitiv. Această
                acțiune este ireversibilă.
              </p>
              <ConfirmationActions>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteDocumentFunction(documentId);
                  }}
                >
                  Șterge
                </button>
                <CancelButton />
              </ConfirmationActions>
            </ConfirmationContainer>
          </Modal.Window>
        </Modal>
      </DocumentSingleActions>
    </DocumentItem>
  );
}

export default DocumentSingle;
