import React, { useRef, useState } from 'react';
import type { ElementType } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Container } from '@mui/material';
import type { SxProps } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  icon: ElementType;
  path: string;
}

interface CategoryCarouselProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  categoryWidth?: number;
  gap?: number;
  sx?: SxProps;
}

export const CategoriesCarousel = ({ 
  title, 
  subtitle = "Categories", 
  categories, 
  categoryWidth = 200,
  gap = 24,
  sx = {}
}: CategoryCarouselProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    clickAllowed: true
  });

  const handleDragStart = (clientX: number) => {
    if (!containerRef.current) return;
    setDragState({
      isDragging: false, // Start as false until we detect actual drag
      startX: clientX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
      clickAllowed: true
    });
  };

  const handleDragMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const x = clientX - containerRef.current.offsetLeft;
    const walk = (x - dragState.startX);
    
    // Only consider it dragging if movement exceeds threshold
    if (Math.abs(walk) > 5) {
      setDragState(prev => ({
        ...prev,
        isDragging: true,
        clickAllowed: false
      }));
      containerRef.current.scrollLeft = dragState.scrollLeft - walk * 2;
    }
  };

  const handleDragEnd = () => {
    if (dragState.isDragging) {
      // If we were dragging, prevent click action
      setDragState(prev => ({ ...prev, isDragging: false }));
      return false;
    }
    setDragState(prev => ({ ...prev, isDragging: false, clickAllowed: true }));
    return true;
  };

  const handleCardClick = (path: string) => {
    if (dragState.clickAllowed) {
      navigate(path);
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -(categoryWidth + gap) : categoryWidth + gap,
      behavior: 'smooth'
    });
  };

  const commonCardStyles: SxProps = {
    minWidth: `${categoryWidth}px`,
    flexShrink: 0,
    border: '1px solid rgb(174, 174, 174)',
    textAlign: 'center',
    pt: 3,
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
      boxShadow: 2
    },
    transition: 'all 0.2s ease'
  };

  const carouselContainerStyles: SxProps = {
    display: 'flex',
    gap: `${gap}px`,
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    cursor: dragState.isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    py: 1
  };

  return (
    <Container sx={{ py: 6, ...sx }}>
      {/* Title Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Box sx={{ borderLeft: '20px solid #DB4444', py: 2.5, borderRadius: 1 }} />
        <Typography sx={{ color: '#DB4444', fontWeight: 'bold' }}>
          {subtitle}
        </Typography>
      </Box>

      {/* Header with Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{title}</Typography>
        
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
            aria-label="Previous categories"
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
            aria-label="Next categories"
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      {/* Categories Cards */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
        <Box
          ref={containerRef}
          sx={carouselContainerStyles}
          onMouseDown={(e) => handleDragStart(e.pageX)}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={(e) => handleDragMove(e.pageX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].pageX)}
          onTouchEnd={handleDragEnd}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                sx={commonCardStyles}
                onClick={() => handleCardClick(category.path)}
              >
                <Box sx={{ textAlign: 'center', py: 2 }}>
                  <IconComponent sx={{ fontSize: 60, color: '#DB4444' }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};