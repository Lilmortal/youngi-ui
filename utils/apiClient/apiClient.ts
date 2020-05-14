interface Headers {
  [key: string]: string | undefined;
}

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiClientOptions {
  request<T>(options: RequestOptions): Promise<T>;
}

interface RequestOptions {
  url: string;
  headers?: Headers;
  method: Method;
  body?: object;
}

// TODO: Handle server error pages
// Retries
// CMS does not need OAuth tokens, but it might come in handy for other projects that uses this
// Support ETags or correlation ID?
const apiClient = (baseUrl: string): ApiClientOptions => ({
  request: async <T>({
    url,
    headers,
    method,
    body,
  }: RequestOptions): Promise<T> => {
    const response = await fetch(`${baseUrl}/${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      method,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
  },
});

export default apiClient;
