import { axiosInstance } from './axios';

export const requestSignup = async (info) => {
  try {
    const res = await axiosInstance.post('/auth/signup', {
      email: info.email,
      password: info.password,
      displayName: info.nickname,
      profileImgBase64: info.profileIMG,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const requestLogin = async (info) => {
  try {
    const res = await axiosInstance.post('/auth/login', {
      email: info.email,
      password: info.password,
    });
    console.log(res.data);
    localStorage.setItem('token', JSON.stringify(res.data.accessToken));
    return res.data;
  } catch (err) {
    throw new Error();
  }
};
