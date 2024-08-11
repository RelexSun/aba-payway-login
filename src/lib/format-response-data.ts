export async function parseJSON<T>(response: Response): Promise<T> {
  const text = await response.text();
  return JSON.parse(text) as T;
}
