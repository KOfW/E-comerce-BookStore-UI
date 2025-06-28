import { ProductCarousel } from './ProductCarousel';
import { Header } from './Header'
import { Banner } from './Banner'
import { Footer } from './Footer'
import { CategoriesCarousel } from './CategoriesCarousel'

// Import your images
import i1 from '../assets/images/Frame 928.png';
import i2 from '../assets/images/GP11_PRD3 1.png';
import i3 from '../assets/images/ak-900-01-500x500 1.png';
import i4 from '../assets/images/g27cq4-500x500 1.png';
import i5 from '../assets/images/gammaxx-l240-argb-1-500x500 1.png';

// Iport MUI Icon
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';

const HomePage: React.FC = () => {

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

      const categories = [
      { id: 1, name: 'Phones', icon: PhoneAndroidOutlinedIcon, path: '/abc' },
      { id: 2, name: 'Phones', icon: ComputerOutlinedIcon , path: '/abc'},
      { id: 3, name: 'Phones', icon: WatchIcon , path: '/abc'},
      { id: 4, name: 'Phones', icon: CameraAltOutlinedIcon , path: '/abc'},
      { id: 5, name: 'Phones', icon: HeadsetOutlinedIcon , path: '/abc'},
      { id: 6, name: 'Phones', icon: VideogameAssetOutlinedIcon , path: '/abc'},
      ];

  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Product Section */}
      <ProductCarousel 
        title="Flash Sale" 
        products={products} 
        showTimer={true}
      />

      {/* Category Section */}
      <CategoriesCarousel 
        title="Brownse By Category" 
        categories={categories} 
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;