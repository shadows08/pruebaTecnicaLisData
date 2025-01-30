const apiKey: string = import.meta.env.VITE_API_KEY;

interface QueryConfig {
  url: string;
  method: string;
  headers?: HeadersInit;
}

export const fetchApi = async <T>({
  url,
  method,
  headers = {},
}: QueryConfig): Promise<T> => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  return response.json();
};
