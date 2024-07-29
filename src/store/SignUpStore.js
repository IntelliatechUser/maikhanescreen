// import create from 'zustand';

// const useSignupStore = create((set,get) => ({
//   fullName: '',
//   phoneNumber: '',
//   email: '',
//   role: '',
//   password: '',
//   confirmPassword: '',
//   loading: false,
//   error: null,
//   success: false,

//   setFullName: (fullName) => set({ fullName }),
//   setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
//   setEmail: (email) => set({ email }),
//   setRole: (role) => set({ role }),
//   setPassword: (password) => set({ password }),
//   setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
//   setLoading: (loading) => set({ loading }),
//   setError: (error) => set({ error }),
//   setSuccess: (success) => set({ success }),

//   signup: async () => {
//     alert("running");
//     set({ loading: true, error: null, success: false });
//     const { fullName, phoneNumber, email, role, password } = get().state;
//     const data = { fullName, phoneNumber, email, roleId: role, password };

//     try {
//       const response = await fetch('http://192.168.1.11:8091/user/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to signup');
//       }

//       set({ loading: false, success: true });
//     } catch (error) {
//       set({ loading: false, error: error.message });
//     }
//   },
  
// }));

// export default useSignupStore;
// import create from 'zustand';
// import axios from 'axios';

// const useSignupStore = create((set, get) => ({
//   fullName: '',
//   phoneNumber: '',
//   email: '',
//   role: '',
//   password: '',
//   confirmPassword: '',
//   loading: false,
//   error: null,
//   success: false,

//   setFullName: (fullName) => set({ fullName }),
//   setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
//   setEmail: (email) => set({ email }),
//   setRole: (role) => set({ role }),
//   setPassword: (password) => set({ password }),
//   setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
//   setLoading: (loading) => set({ loading }),
//   setError: (error) => set({ error }),
//   setSuccess: (success) => set({ success }),

//   signup: async () => {
//     alert("running");
//     set({ loading: true, error: null, success: false });
//     const { fullName, phoneNumber, email, role, password } = get();
//     const data = { fullName, phoneNumber, email, roleId: role, password };

//     try {
//       const response = await axios.post('http://192.168.1.11:8091/user/signup', data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log("response>>>>>>>>>>",response);
//       if (response.data.status == 400) {
//        alert("inside if");
//         throw new Error(response);
//       }
//       console.log("response>>>>>>>>>>2",response);
//       set({ loading: false, success: true });
//     } catch (error) {
//       console.log("error>>>>>>>>>>",JSON.stringify(error));
//       set({ loading: false, error: error.data || error.message });
//     }
//   },
// }));

// export default useSignupStore;
import create from 'zustand';
import axios from 'axios';

const useSignupStore = create((set, get) => ({
  fullName: '',
  phoneNumber: '',
  email: '',
  role: '',
  password: '',
  confirmPassword: '',
  loading: false,
  error: null,
  success: false,

  setFullName: (fullName) => set({ fullName }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmail: (email) => set({ email }),
  setRole: (role) => set({ role }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSuccess: (success) => set({ success }),
setError:(error) => set({error}),
 
}));

export default useSignupStore;
