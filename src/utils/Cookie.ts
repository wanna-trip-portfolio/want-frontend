import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = <T>(name: string, value: T) => {
  return cookies.set(name, value);
};

export const getCookie = (name: string): string | undefined => {
  return cookies.get(name);
};
