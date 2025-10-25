'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { footerSections, socialMediaLinks, footerInfo } from '@/data/footer';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <FacebookIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#02352D',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Social Media */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {socialMediaLinks.map((social) => (
                <IconButton
                  key={social.id}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                    },
                  }}
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </IconButton>
              ))}
            </Box>
          </Box>
          
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <Box key={section.id}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link) => (
                  <MuiLink
                    key={link.id}
                    component={Link}
                    href={link.path}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Box>
            </Box>
          ))}

         

           {/* Company Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {footerInfo.companyName}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {footerInfo.tagline}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">{footerInfo.phone}</Typography>
            </Box>
          </Box>

        </Box>

        <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 1,
          }}
        >
          <Typography variant="body2" align="center">
            {footerInfo.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
