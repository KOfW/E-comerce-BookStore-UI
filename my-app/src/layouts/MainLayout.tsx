import { Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <header style={{ padding: '10px', background: '#f2f2f2' }}>
      <Link to="/">Trang chủ</Link> | <Link to="/contact">Liên hệ</Link> | <Link to="/login">Đăng nhập</Link>
    </header>
  );
};
export default MainLayout;
