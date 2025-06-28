import React, { useRef, useState } from 'react';
import { 
  Box, Card, CardContent, CardMedia, Typography, 
  Button, IconButton, Container 
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  discount: string;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showTimer?: boolean;
  productWidth?: number;
  gap?: number;
}

export const ProductCarousel = ({ 
  title, 
  subtitle = "Today's", 
  products, 
  showTimer = false,
  productWidth = 280,
  gap = 24
}: ProductCarouselProps) => {
  // Carousel state and refs
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  // Timer data
  const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds'];
  const timeValues = ['03', '23', '19', '56'];

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

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

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = productWidth + gap;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <Container sx={{ py: 6 }}>
      {/* Title Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb:3 }}>
        <Box sx={{ borderLeft: '20px solid #DB4444', py: 2.5, borderRadius: 1 }} />
        <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
          {subtitle}
        </Typography>
      </Box>

      {/* Header with Timer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{title}</Typography>
          
          {showTimer && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
          )}
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

      {/* Product Cards */}
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
          onMouseLeave={() => setIsDragging(false)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
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

              {/* Favorite Button */}
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
                {favorites[product.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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