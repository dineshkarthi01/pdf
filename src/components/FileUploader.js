import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PDFViewer from './preview';

const FileUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPdfFile(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the PDF file here...</p>
        ) : (
          <p>Drag 'n' drop a PDF file here, or click to select one</p>
        )}
      </div>
      {pdfFile && <PDFViewer pdfUrl={pdfFile} />}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploader;
