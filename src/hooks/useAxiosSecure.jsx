import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Provider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'https://music-pulse-server-sanzidahmed.vercel.app', 
});

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext) 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await signOutUser();
          navigate('/signin');
        }
        return Promise.reject(error);
      }
    );
  }, [signOutUser, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;