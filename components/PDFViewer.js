import React, { useEffect, useState } from 'react';

function PDFViewer(props) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (props.pdfBase64) {
      // Decodifica el string base64 en un objeto Blob
      const decodedPdf = atob(props.pdfBase64);
      const blobPdf = new Blob([decodedPdf], { type: 'application/pdf' });

      // Crea una URL del objeto Blob y la establece como fuente del visor de PDF
      const urlPdf = URL.createObjectURL(blobPdf);
      setPdfUrl(urlPdf);
    }
  }, [props.pdfBase64]);

  if (pdfUrl) {
    return (
      <embed
        src={pdfUrl}
        type="application/pdf"
        width="100%"
        height="600px"
      />
    );
  } else {
    return <p>No se encontró el archivo PDF.</p>;
  }
}

export default PDFViewer;

