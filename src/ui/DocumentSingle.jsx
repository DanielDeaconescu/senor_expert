import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import styled from "styled-components";
import { saveAs } from "file-saver";
import supabase from "../services/supabase";

const DocumentItem = styled.div`
  padding: 1rem;
  border: 1px solid white;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  z-index: 10;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
`;

const DownloadButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: black;
`;

function DocumentSingle({ companyName, month, documents, created_at }) {
  const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Descarcă documentele");

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
      <div>
        <DownloadButton
          onClick={downloadDocuments}
          disabled={isDownloadDisabled}
        >
          {buttonText}
        </DownloadButton>
      </div>
    </DocumentItem>
  );
}

export default DocumentSingle;
