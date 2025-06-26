// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tabs, Tab } from '@mui/material';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ShoppingCart, Heart } from 'lucide-react';


import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const products = [
  { id: 1, name: 'Sản phẩm A', image: 'https://via.placeholder.com/300', price: '100.000₫' },
  { id: 2, name: 'Sản phẩm B', image: 'https://via.placeholder.com/300', price: '150.000₫' },
  { id: 3, name: 'Sản phẩm C', image: 'https://via.placeholder.com/300', price: '200.000₫' },
  { id: 4, name: 'Sản phẩm C', image: 'https://via.placeholder.com/300', price: '200.000₫' },
  { id: 5, name: 'Sản phẩm C', image: 'https://via.placeholder.com/300', price: '200.000₫' },
  { id: 6, name: 'Sản phẩm C', image: 'https://via.placeholder.com/300', price: '200.000₫' },
  { id: 7, name: 'Sản phẩm C', image: 'https://via.placeholder.com/300', price: '200.000₫' },
];

const HomePage: React.FC = () => {



  return (
    <>
    {/* Navbar */}
    <AppBar position="static" sx={{ backgroundColor: 'black', height: 48 }}>
      {/* Notice Navbar */}
      <Toolbar
        disableGutters
        sx={{
          minHeight: '48px !important',
          height: '48px !important',
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.90rem',
              letterSpacing: '0.5px',
              color: 'white',
            }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                marginLeft: '8px',
                cursor: 'pointer',
              }}
            >
              ShopNow
            </Box>
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Dropdown chọn ngôn ngữ */}
        <Typography
          sx={{
            fontSize: '0.90rem',
            padding: '4px 50px',
            lineHeight: 1,
            minHeight: 'unset',
            marginRight: 4,
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center', 
            gap: '4px', 
            color: 'white',
            cursor: 'pointer',
          }}
        >
          English <ExpandMoreIcon fontSize="small" />
        </Typography>
      </Toolbar>
      
      {/* Main Navbar */}
      <Toolbar
        sx={{ borderBottom: '1px solid #f1f1f1', paddingBottom: 2}}
      >
        {/* Logo */}
        <Box sx={{display: 'flex', alignItems: 'center', paddingTop: 5, gap: 20 }}>
          <Box>
            <Typography sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
              BookNest
            </Typography>
          </Box>

          <Tabs value={false} sx={{ minHeight: 48, }}>
            {['Home', 'Shop', 'Contact', 'About', 'Sign Up'].map((label, index) => (
              <Tab
                key={index}
                label={label}
                component={Link}
                to={`/${label.toLowerCase().replace(' ', '')}`}
                sx={{
                  mr: 1,
                  color: 'black',
                  fontSize: '1rem',
                  textTransform: 'none',
                  minHeight: 48,
                  minWidth: 'auto',
                  px: 2,
                  '&:hover': {
                    color: 'black',
                    borderBottom: '2px solid black',
                  },
                }}
              />
            ))}
          </Tabs>
          <Box 
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
                padding: '0 12px',
                height: '35px',
                width: 250,
               
              }}
            >
              <SearchIcon sx={{ color: 'gray', mr: 1 }} />
              <InputBase
                placeholder="What are you looking for?"
                sx={{
                  flex: 1,
                  '& input': {
                    padding: 0,
                    fontSize: '0.9rem',
                    color: '#7D8184',
                    '::placeholder': {
                      fontSize: '0.80rem',
                      color: '#7D8184',
                    },
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <IconButton color="inherit" sx={{ color:'black' }}>
                <Badge badgeContent={3} color="error">
                  <Heart size={'1.7rem'} strokeWidth={1} color="black" />
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ color:'black'}}>
                <Badge badgeContent={3} color="error">
                  <ShoppingCart size={'1.7rem'} strokeWidth={1} color="black" />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>




      {/* Banner */}
      {/* <Box sx={{ bgcolor: '#f5f5f5', py: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Chào mừng đến với cửa hàng của chúng tôi!
        </Typography>
        <Typography variant="h6">
          Tìm kiếm sản phẩm yêu thích của bạn ngay hôm nay.
        </Typography>
      </Box> */}

      {/* Danh sách sản phẩm */}
      {/* <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Giá: {product.price}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>Mua ngay</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}

      {/* Footer */}
      {/* <Box sx={{ bgcolor: '#1976d2', py: 4, mt: 4 }}>
        <Container>
          <Typography variant="body1" color="white" textAlign="center">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </Typography>
        </Container>
      </Box> */}
    </>
  );
};

export default HomePage;
