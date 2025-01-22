import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import styled from "styled-components";
import { saveAs } from "file-saver";
import supabase from "../services/supabase";

const DocumentItem = styled.div`
  border: 1px solid black;
  width: 100%;
`;

function DocumentSingle({ companyName, month, documents }) {
  const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Download all documents");

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
      setButtonText("No documents");
    } else {
      setIsDownloadDisabled(false);
      setButtonText("Download all documents");
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
          <span>Numele companiei: </span>
        </strong>
        <strong>{companyName}</strong>
      </div>
      <div>
        <strong>
          <span>Luna:</span>
        </strong>
        <strong>{month}</strong>
      </div>
      <div>
        <button onClick={downloadDocuments} disabled={isDownloadDisabled}>
          {buttonText}
        </button>
      </div>
    </DocumentItem>
  );
}

export default DocumentSingle;
