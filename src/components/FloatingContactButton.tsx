'use client';

import React, { useState } from 'react';
import {
  Fab,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

interface FloatingContactButtonProps {
  phoneNumber: string;
  whatsappMessage?: string;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  phoneNumber,
  whatsappMessage = 'Hello! I would like to inquire about your Sundarban tour packages.',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCall = () => {
    handleClose();
    
    if (isMobile) {
      // On mobile, open phone dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop, copy to clipboard
      navigator.clipboard.writeText(phoneNumber).then(
        () => {
          setSnackbarMessage('Phone number copied to clipboard!');
          setSnackbarOpen(true);
        },
        () => {
          setSnackbarMessage('Failed to copy phone number');
          setSnackbarOpen(true);
        }
      );
    }
  };

  const handleWhatsApp = () => {
    handleClose();
    
    // Format phone number for WhatsApp (remove + and spaces)
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="success"
        aria-label="contact"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 24, md: 32 },
          left: { xs: 16, md: 32 },
          zIndex: 1000,
          backgroundColor: '#25D366',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        }}
      >
        <ContactPhoneIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            minWidth: 180,
          },
        }}
      >
        <MenuItem onClick={handleCall}>
          <ListItemIcon>
            <PhoneIcon sx={{ color: '#0A5F4E' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Call" 
            secondary={isMobile ? phoneNumber : 'Copy number'}
            secondaryTypographyProps={{
              sx: { fontSize: '0.75rem' }
            }}
          />
        </MenuItem>
        
        <MenuItem onClick={handleWhatsApp}>
          <ListItemIcon>
            <WhatsAppIcon sx={{ color: '#25D366' }} />
          </ListItemIcon>
          <ListItemText 
            primary="WhatsApp"
            secondary="Send message"
            secondaryTypographyProps={{
              sx: { fontSize: '0.75rem' }
            }}
          />
        </MenuItem>
      </Menu>

      {/* Snackbar for copy notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        sx={{ mb: 8 }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FloatingContactButton;
