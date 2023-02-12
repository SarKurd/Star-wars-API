export const parseResponse = async <TResponse>(
  response: Response
): Promise<TResponse> => {
  return await response.json();
};
