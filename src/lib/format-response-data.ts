export async function parseJSON<T>(response: Response): Promise<T> {
  const json = await response.json();
  return json as T;
}
