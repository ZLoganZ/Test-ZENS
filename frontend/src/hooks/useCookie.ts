export default function useCookie() {
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const getCookie = (name: string) => {
    const cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return cookie ? cookie[2] : null;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return { setCookie, getCookie, deleteCookie };
}
