import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { Link } from 'react-router-dom';
import { logout } from '../store/userSlice';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.info);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chào mừng đến với Trang chủ</h1>
      {user ? (
        <>
          <p>Xin chào, {user.name}!</p>
          <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </>
      ) : (
        <p>Bạn chưa đăng nhập. <Link to="/login">Đăng nhập</Link> hoặc <Link to="/contact">Liên hệ</Link></p>
      )}
    </div>
  );
};
export default Home;