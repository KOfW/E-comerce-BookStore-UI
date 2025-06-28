import React from 'react'
import { Tabs, Tab, InputBase, IconButton, Badge, AppBar, Toolbar, Container, Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

export const Footer = () => {
  return (
      <Box sx={{ bgcolor: '#1976d2', py: 4, mt: 4 }}>
        <Container>
          <Typography variant="body1" color="white" textAlign="center">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </Typography>
        </Container>
      </Box>
  )
}

export default Footer
