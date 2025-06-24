import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../types/user';

/* 
    Khởi tạo trang thái ban đầu của user
*/
const initialState: { info: User | null} = {
    info: null,
}

// createSlice(): Là hàm của Redux Toolkit giúp tự động tạo reducer và action một cách ngắn gọn, không cần viết switch-case.
const userSlice = createSlice({
    /* name: 'user' là Tên của slice, thường dùng làm tiền tố cho action type.
        VD: Action sẽ có type như "user/setUser" hoặc "user/logout" */
    name: 'user',
    initialState,
    // reducers: { ... } : Đây là nơi định nghĩa các action logic và thay đổi state tương ứng.
    reducers :{
        setUser(state, action){
        state.info = action.payload;
        },
        logout(state) {
        state.info = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;