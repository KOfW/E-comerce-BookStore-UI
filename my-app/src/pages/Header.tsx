import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tabs, Tab, InputBase, IconButton, Badge, AppBar, Toolbar, Container, Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart, Heart } from 'lucide-react';

export const Header = () => {
  return (
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
  )
}

export default Header
