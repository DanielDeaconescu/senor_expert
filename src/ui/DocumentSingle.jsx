function DocumentSingle({ companyName, month, documents }) {
  console.log("Documents prop: ", documents);
  const handleDownload = async (url) => {
    try {
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error downloading the document:", error.message);
    }
  };

  return (
    <div>
      <div>
        <span>Numele companiei: </span>
        {companyName}
      </div>
      <div>
        <span>Luna:</span>
        {month}
      </div>
      <div>
        <span>Documente incarcate:</span>
        {Array.isArray(documents) && documents.length > 0 ? (
          <ul>
            {documents.map((url, index) => (
              <li key={index}>
                <button onClick={() => handleDownload(url)}>
                  Download Document {index + 1}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No documents available</p>
        )}
      </div>
    </div>
  );
}

export default DocumentSingle;
