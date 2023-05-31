function useHttp() {
  const request = async (
    url: string,
    method = 'GET',
    body: null | string = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`status:${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };
  return [request];
}

export default useHttp;
