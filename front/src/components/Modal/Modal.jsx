
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import './Modal.css';

export const CardModal = ({ theme, onClose, src }) => {
  if (!theme) return null;

  return <Modal
    open={!!theme}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className='box'>
      <video src={src} autoPlay controls></video>
    </Box>
  </Modal>
}
