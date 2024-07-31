import { create } from 'zustand';
import axios from 'axios';

const useProfileStore = create((set) => ({
  profile: null,
  error: null,
  isLoading: false,
  token: null,

  setProfile: (data) => set({ profile: data }),
  setError: (error) => set({ error }),
  setLoading: (data) => set({ isLoading: data }),
  setToken: (token) => set({ token }),

 
}));

export default useProfileStore;
