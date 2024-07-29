// import create from 'zustand';
// import axios from 'axios';

// const useAuthStore = create((set, get) => ({
//   email: '',
//   password: '',
//   user: null,
//   error: null,
//   isLoading: false,
//   success: false,

//   setEmail: (email) => set({ email }),
//   setPassword: (password) => set({ password }),
//   setUser: (user) => set({ user }),
//   setError: (error) => set({ error }),
//   setLoading: (isLoading) => set({ isLoading }),
//   setSuccess: (success) => set({ success }),

//   login: async () => {
//     set({ isLoading: true, error: null, success: false });
//     const { email, password } = get();

//     try {
//       const response = await axios.post('http://192.168.1.11:8091/user/login', { email, password });
//       set({ user: response.data, error: null, success: true });
//     } catch (error) {
//       set({ error: error.response?.data?.message || 'An error occurred', user: null, success: false });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
// }));

// export default useAuthStore;


import {create} from 'zustand';

const useAuthStore = create((set) => ({
  email: '',
  password: '',
  user: null,
  error: null,
  isLoading: false,
  success: false,

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUser: (data) => set({ user: data }),
  setError: (error) => set({ error }),
  setLoading: (data) => set({ isLoading: data }),
  setSuccess: (data) => set({ success: data }),
}));

export default useAuthStore;

