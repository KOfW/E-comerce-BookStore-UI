import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ContactUsPage from '../features/ContactUs/ContactUsPage';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;