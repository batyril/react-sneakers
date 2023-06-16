import { RequestFunction } from '../../interfaces.ts';

function useHttp() {
  const request: RequestFunction = async (
    url,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`status:${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  };
  return { request };
}

export default useHttp;
