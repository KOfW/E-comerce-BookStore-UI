import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tabs, Tab, InputBase, IconButton, Badge, AppBar, Toolbar, Container, Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart, Heart } from 'lucide-react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Import your images
import i1 from '../assets/images/Frame 928.png';
import i2 from '../assets/images/GP11_PRD3 1.png';
import i3 from '../assets/images/ak-900-01-500x500 1.png';
import i4 from '../assets/images/g27cq4-500x500 1.png';
import i5 from '../assets/images/gammaxx-l240-argb-1-500x500 1.png';

const HomePage: React.FC = () => {
  // Timer data
  const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds'];
  const timeValues = ['03', '23', '19', '56'];

  // Product carousel setup
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const productWidth = 280;
  const gap = 24;

  // Sample products data
  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', image: i1, discount: '40%' },
    { id: 2, name: 'AK-900 Wired Keyboard', price: '$96', oldPrice: '$160', image: i2, discount: '50%' },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: '$370', oldPrice: '$400', image: i3, discount: '60%' },
    { id: 4, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', image: i4, discount: '70%' },
    { id: 5, name: 'Another Product', price: '$420', oldPrice: '$500', image: i5, discount: '30%' },
    { id: 6, name: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', image: i1, discount: '40%' },
    { id: 7, name: 'AK-900 Wired Keyboard', price: '$96', oldPrice: '$160', image: i2, discount: '50%' },
    { id: 8, name: 'IPS LCD Gaming Monitor', price: '$370', oldPrice: '$400', image: i3, discount: '60%' },
    { id: 9, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', image: i4, discount: '70%' },
    { id: 10, name: 'Another Product', price: '$420', oldPrice: '$500', image: i5, discount: '30%' },
  ];

  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Mouse event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Arrow navigation
  const handleArrowClick = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = productWidth + gap;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

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

          {/* Language dropdown */}
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
        <Toolbar sx={{ borderBottom: '1px solid #f1f1f1', paddingBottom: 2 }}>
          {/* Logo */}
          <Box sx={{display: 'flex', alignItems: 'center', paddingTop: 5, gap: 10, paddingLeft: 17 }}>
            <Box>
              <Typography sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                BookNest
              </Typography>
            </Box>
            <Tabs value={false} sx={{ minHeight: 48, paddingLeft:14}}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
                padding: '0 12px',
                height: '35px',
                width: 250,
              }}>
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton color="inherit" component={Link} to="/wishlist" sx={{ color:'black' }}>
                  <Badge badgeContent={3} color="error">
                    <Heart size={'1.7rem'} strokeWidth={1} color="black" />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" component={Link} to="/cart" sx={{ color:'black'}}>
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
      <Box sx={{ display: 'flex', width: '100%', pb: 12 }}>
        {/* Left Tabs */}
        <Box sx={{
          paddingTop: 6, 
          mt: 10.1, 
          pl: 18,
          pr: 12,
          borderRight: '1px solid #e0e0e0',
        }}>
          <Tabs
            orientation="vertical"
            value={false}
            sx={{
              minHeight: 48,
              minWidth: 150,
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTab-root': {
                textAlign: 'left',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                color: 'black',
                fontSize: '0.9rem',
                textTransform: 'none',
                minHeight: 48,
                px: 2,
                '&:hover': {
                  color: 'black',
                  textShadow: '0 0 0.9px black'
                },
                '&:focus': {
                  outline: 'none',
                  border: 'none',
                  boxShadow: 'none'
                }
              },
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }}
          >
            <Tab label="Women's Fashion" />
            <Tab label="Men's Fashion" />
            <Tab label="Electronics" />
            <Tab label="Home & Life Style" />
            <Tab label="Medicine" />
            <Tab label="Sport & Outdoor" />
            <Tab label="Baby's & Toys" />
          </Tabs>
        </Box>
        
        {/* Right Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          pl: 4,
          mt: 15 
        }}>
          <Typography variant="h3" gutterBottom>
            Chào mừng đến với cửa hàng của chúng tôi!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Tìm kiếm sản phẩm yêu thích của bạn ngay hôm nay.
          </Typography>
        </Box>
      </Box>

      {/* Product Section */}
      <Container sx={{ py: 6 }}>
        {/* Title Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ borderLeft: '20px solid #DB4444', py: 2.5, borderRadius: 1 }}></Box>
          <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
            Today's
          </Typography>
        </Box>

        {/* Header with Timer and Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display:'flex', gap:10 , alignItems: 'center'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Flash Sale</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {timeUnits.map((label, index) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ textAlign: 'center', mx: 1 }}>
                    <Typography variant="body2" color="text.secondary">{label}</Typography>
                    <Typography variant="h4" fontWeight="bold">{timeValues[index]}</Typography>
                  </Box>
                  {index < timeUnits.length - 1 && (
                    <Typography variant="h4" sx={{ mx: 1, pt: 1.7, fontWeight: 'bold', color: '#DB4444' }}>:</Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Navigation Arrows */}
          <Box>
            <IconButton
              onClick={() => handleArrowClick('left')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0',
                mr: 1
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => handleArrowClick('right')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0'
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        {/* Product Carousel with Drag-to-Scroll */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            ref={containerRef}
            sx={{
              display: 'flex',
              gap: `${gap}px`,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              py: 1
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                sx={{
                  minWidth: `${productWidth}px`,
                  flexShrink: 0,
                  position: 'relative',
                  pointerEvents: isDragging ? 'none' : 'auto'
                }}
              >
                {/* Discount Badge */}
                <Box sx={{
                  position: 'absolute', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.7, 
                  py: 0.5,
                  background: '#DB4444', 
                  m: 2,
                  zIndex: 1
                }}>
                  <Typography fontSize={'12px'}>
                    -{product.discount}
                  </Typography>
                </Box>

                {/* Favorite Icon */}
                <IconButton 
                  onClick={() => toggleFavorite(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: favorites[product.id] ? '#DB4444' : 'rgba(0,0,0,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }
                  }}
                >
                  {favorites[product.id] ? (
                    <FavoriteIcon fontSize="medium" />
                  ) : (
                    <FavoriteBorderIcon fontSize="medium" />
                  )}
                </IconButton>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: 200,
                    height: 220,
                    objectFit: 'contain',
                    margin: '0 auto',
                    p: 1
                  }}
                  image={product.image}
                  alt={product.name}
                />

                {/* Product Info */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>{product.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', textDecoration: 'line-through' }}>
                      {product.oldPrice}
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      mt: 2,
                      bgcolor: '#DB4444',
                      '&:hover': { bgcolor: '#B03D3D' }
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* View All Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="outlined" 
            endIcon={<ChevronRight />}
            sx={{ 
              borderColor: '#DB4444',
              background: '#DB4444',
              color: 'white',
              px: 5,
              py: 2,  
              '&:hover': { borderColor: '#B03D3D' }
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>

            <Container sx={{ py: 6 }}>
        {/* Title Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ borderLeft: '20px solid #DB4444', py: 2.5, borderRadius: 1 }}></Box>
          <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
            Today's
          </Typography>
        </Box>

        {/* Header with Timer and Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display:'flex', gap:10 , alignItems: 'center'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Flash Sale</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {timeUnits.map((label, index) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ textAlign: 'center', mx: 1 }}>
                    <Typography variant="body2" color="text.secondary">{label}</Typography>
                    <Typography variant="h4" fontWeight="bold">{timeValues[index]}</Typography>
                  </Box>
                  {index < timeUnits.length - 1 && (
                    <Typography variant="h4" sx={{ mx: 1, pt: 1.7, fontWeight: 'bold', color: '#DB4444' }}>:</Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Navigation Arrows */}
          <Box>
            <IconButton
              onClick={() => handleArrowClick('left')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0',
                mr: 1
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => handleArrowClick('right')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0'
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        {/* Product Carousel with Drag-to-Scroll */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            ref={containerRef}
            sx={{
              display: 'flex',
              gap: `${gap}px`,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              py: 1
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                sx={{
                  minWidth: `${productWidth}px`,
                  flexShrink: 0,
                  position: 'relative',
                  pointerEvents: isDragging ? 'none' : 'auto'
                }}
              >
                {/* Discount Badge */}
                <Box sx={{
                  position: 'absolute', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.7, 
                  py: 0.5,
                  background: '#DB4444', 
                  m: 2,
                  zIndex: 1
                }}>
                  <Typography fontSize={'12px'}>
                    -{product.discount}
                  </Typography>
                </Box>

                {/* Favorite Icon */}
                <IconButton 
                  onClick={() => toggleFavorite(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: favorites[product.id] ? '#DB4444' : 'rgba(0,0,0,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }
                  }}
                >
                  {favorites[product.id] ? (
                    <FavoriteIcon fontSize="medium" />
                  ) : (
                    <FavoriteBorderIcon fontSize="medium" />
                  )}
                </IconButton>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: 200,
                    height: 220,
                    objectFit: 'contain',
                    margin: '0 auto',
                    p: 1
                  }}
                  image={product.image}
                  alt={product.name}
                />

                {/* Product Info */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>{product.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', textDecoration: 'line-through' }}>
                      {product.oldPrice}
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      mt: 2,
                      bgcolor: '#DB4444',
                      '&:hover': { bgcolor: '#B03D3D' }
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* View All Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="outlined" 
            endIcon={<ChevronRight />}
            sx={{ 
              borderColor: '#DB4444',
              background: '#DB4444',
              color: 'white',
              px: 5,
              py: 2,  
              '&:hover': { borderColor: '#B03D3D' }
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>

            <Container sx={{ py: 6 }}>
        {/* Title Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ borderLeft: '20px solid #DB4444', py: 2.5, borderRadius: 1 }}></Box>
          <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
            Categories
          </Typography>
        </Box>

        {/* Header with Timer and Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display:'flex', gap:10 , alignItems: 'center', my:2}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Browse By Category</Typography>
          </Box>
          
          {/* Navigation Arrows */}
          <Box>
            <IconButton
              onClick={() => handleArrowClick('left')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0',
                mr: 1
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => handleArrowClick('right')}
              sx={{ 
                bgcolor: 'white',
                boxShadow: 3,
                '&:hover': { bgcolor: '#f5f5f5' },
                border: '1px solid #e0e0e0'
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        {/* Product Carousel with Drag-to-Scroll */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            ref={containerRef}
            sx={{
              display: 'flex',
              gap: `${gap}px`,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              py: 1
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                sx={{
                  minWidth: `${productWidth}px`,
                  flexShrink: 0,
                  position: 'relative',
                  pointerEvents: isDragging ? 'none' : 'auto'
                }}
              >
                {/* Discount Badge */}
                <Box sx={{
                  position: 'absolute', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.7, 
                  py: 0.5,
                  background: '#DB4444', 
                  m: 2,
                  zIndex: 1
                }}>
                  <Typography fontSize={'12px'}>
                    -{product.discount}
                  </Typography>
                </Box>

                {/* Favorite Icon */}
                <IconButton 
                  onClick={() => toggleFavorite(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: favorites[product.id] ? '#DB4444' : 'rgba(0,0,0,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }
                  }}
                >
                  {favorites[product.id] ? (
                    <FavoriteIcon fontSize="medium" />
                  ) : (
                    <FavoriteBorderIcon fontSize="medium" />
                  )}
                </IconButton>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: 200,
                    height: 220,
                    objectFit: 'contain',
                    margin: '0 auto',
                    p: 1
                  }}
                  image={product.image}
                  alt={product.name}
                />

                {/* Product Info */}
                <CardContent>
                  <Typography variant="h6" gutterBottom>{product.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', textDecoration: 'line-through' }}>
                      {product.oldPrice}
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      mt: 2,
                      bgcolor: '#DB4444',
                      '&:hover': { bgcolor: '#B03D3D' }
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* View All Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="outlined" 
            endIcon={<ChevronRight />}
            sx={{ 
              borderColor: '#DB4444',
              background: '#DB4444',
              color: 'white',
              px: 5,
              py: 2,  
              '&:hover': { borderColor: '#B03D3D' }
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1976d2', py: 4, mt: 4 }}>
        <Container>
          <Typography variant="body1" color="white" textAlign="center">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;