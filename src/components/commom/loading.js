import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 10,

};

export default function BasicModal() {
    const loading = useSelector((state) => state.loading.loading)

  return (
      <>
        <Modal
          open={loading}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <CircularProgress />
          </Box>
        </Modal>
      </>
  );
}
