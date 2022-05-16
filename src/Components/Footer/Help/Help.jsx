import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './Help.module.css'
import { NoEncryptionTwoTone } from '@mui/icons-material';




export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4    
  };

  return (
    <div >
      <Button onClick={handleOpen} className={styles.help} >Help</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           If you need urgent asistance please call us at: +54 9 11 22 33 44
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For more information please send an email to: computechshop@computechshop.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}