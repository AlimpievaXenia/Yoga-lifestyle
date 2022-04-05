import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import oils from "../../oils.pdf";
import './ModalGuides.css';

export const CardModal = ({
  file,
  onClose,
  onDocumentLoadSuccess,
  pageNumber,
  numPages
}) => {
  if (!file) return null;

  return (
    <Modal
      open={!!file}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="guideBox">
          <Document file={oils} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
      </Box>
    </Modal>
  );
};
