import React, { useRef, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Button
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Sample product images (replace with your actual imports)
const i1 = '/placeholder1.jpg';
const i2 = '/placeholder2.jpg';
const i3 = '/placeholder3.jpg';
const i4 = '/placeholder4.jpg';
const i5 = '/placeholder5.jpg';

const FlashSalesSection = () => {
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

  // First Carousel Logic
  const containerRef1 = useRef<HTMLDivElement>(null);
  const [isDragging1, setIsDragging1] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [favorites1, setFavorites1] = useState<Record<number, boolean>>({});

  // Second Carousel Logic (duplicated with different refs and state)
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [favorites2, setFavorites2] = useState<Record<number, boolean>>({});

  // Shared configuration
  const productWidth = 280;
  const gap = 24;
  const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds'];
  const timeValues = ['03', '23', '19', '56'];

  // First Carousel Handlers
  const toggleFavorite1 = (productId: number) => {
    setFavorites1(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseDown1 = (e: React.MouseEvent) => {
    if (!containerRef1.current) return;
    setIsDragging1(true);
    setStartX1(e.pageX - containerRef1.current.offsetLeft);
    setScrollLeft1(containerRef1.current.scrollLeft);
  };

  const handleMouseLeave1 = () => setIsDragging1(false);
  const handleMouseUp1 = () => setIsDragging1(false);

  const handleMouseMove1 = (e: React.MouseEvent) => {
    if (!isDragging1 || !containerRef1.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    containerRef1.current.scrollLeft = scrollLeft1 - walk;
  };

  const handleTouchStart1 = (e: React.TouchEvent) => {
    if (!containerRef1.current) return;
    setIsDragging1(true);
    setStartX1(e.touches[0].pageX - containerRef1.current.offsetLeft);
    setScrollLeft1(containerRef1.current.scrollLeft);
  };

  const handleTouchMove1 = (e: React.TouchEvent) => {
    if (!isDragging1 || !containerRef1.current) return;
    const x = e.touches[0].pageX - containerRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    containerRef1.current.scrollLeft = scrollLeft1 - walk;
  };

  const handleArrowClick1 = (direction: 'left' | 'right') => {
    if (!containerRef1.current) return;
    const scrollAmount = productWidth + gap;
    containerRef1.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Second Carousel Handlers (same as first but with "2" suffix)
  const toggleFavorite2 = (productId: number) => {
    setFavorites2(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseDown2 = (e: React.MouseEvent) => {
    if (!containerRef2.current) return;
    setIsDragging2(true);
    setStartX2(e.pageX - containerRef2.current.offsetLeft);
    setScrollLeft2(containerRef2.current.scrollLeft);
  };

  const handleMouseLeave2 = () => setIsDragging2(false);
  const handleMouseUp2 = () => setIsDragging2(false);

  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!isDragging2 || !containerRef2.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    containerRef2.current.scrollLeft = scrollLeft2 - walk;
  };

  const handleTouchStart2 = (e: React.TouchEvent) => {
    if (!containerRef2.current) return;
    setIsDragging2(true);
    setStartX2(e.touches[0].pageX - containerRef2.current.offsetLeft);
    setScrollLeft2(containerRef2.current.scrollLeft);
  };

  const handleTouchMove2 = (e: React.TouchEvent) => {
    if (!isDragging2 || !containerRef2.current) return;
    const x = e.touches[0].pageX - containerRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    containerRef2.current.scrollLeft = scrollLeft2 - walk;
  };

  const handleArrowClick2 = (direction: 'left' | 'right') => {
    if (!containerRef2.current) return;
    const scrollAmount = productWidth + gap;
    containerRef2.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Render function for a carousel (to avoid duplicate JSX)
  const renderCarousel = (
    containerRef: React.RefObject<HTMLDivElement>,
    isDragging: boolean,
    favorites: Record<number, boolean>,
    toggleFavorite: (id: number) => void,
    handleMouseDown: (e: React.MouseEvent) => void,
    handleMouseLeave: () => void,
    handleMouseUp: () => void,
    handleMouseMove: (e: React.MouseEvent) => void,
    handleTouchStart: (e: React.TouchEvent) => void,
    handleTouchMove: (e: React.TouchEvent) => void,
    handleArrowClick: (direction: 'left' | 'right') => void,
    title: string
  ) => {
    return (
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
          <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{title}</Typography>
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
              '&::-webkit-scrollbar': { display: 'none' },
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
                  <Typography fontSize={'12px'}>-{product.discount}</Typography>
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
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                  }}
                >
                  {favorites[product.id] ? <FavoriteIcon fontSize="medium" /> : <FavoriteBorderIcon fontSize="medium" />}
                </IconButton>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  sx={{ width: 200, height: 220, objectFit: 'contain', margin: '0 auto', p: 1 }}
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
    );
  };

  return (
    <>
      {renderCarousel(
        containerRef1,
        isDragging1,
        favorites1,
        toggleFavorite1,
        handleMouseDown1,
        handleMouseLeave1,
        handleMouseUp1,
        handleMouseMove1,
        handleTouchStart1,
        handleTouchMove1,
        handleArrowClick1,
        "Flash Sale 1"
      )}

      {renderCarousel(
        containerRef2,
        isDragging2,
        favorites2,
        toggleFavorite2,
        handleMouseDown2,
        handleMouseLeave2,
        handleMouseUp2,
        handleMouseMove2,
        handleTouchStart2,
        handleTouchMove2,
        handleArrowClick2,
        "Flash Sale 2"
      )}
    </>
  );
};

export default FlashSalesSection;