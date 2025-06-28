import { Tabs, Tab, Box, Typography } from '@mui/material';

export const Banner = () => {
  return (
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
  )
}

export default Banner
