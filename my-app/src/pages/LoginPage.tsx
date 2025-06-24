// STEP 15: pages/LoginPage.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const dummyUser = { id: '1', name, email: `${name}@example.com` };
    dispatch(setUser(dummyUser));
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin} style={{ marginLeft: '10px' }}>
        Đăng nhập
      </button>
    </div>
  );
};
export default LoginPage;
