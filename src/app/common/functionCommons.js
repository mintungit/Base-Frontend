import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function setCookieToken(typeToken, jwtToken) {
    const tokenDecode = jwtDecode(jwtToken);
    if (tokenDecode.exp) {
      Cookies.set(typeToken, jwtToken, { expires: new Date(new Date(tokenDecode.exp * 1000)) });
    }
  }