import { parseResponse } from "./utils";

const serviceRequest = async <TResponse>(
  input: RequestInfo | URL,
  config?: RequestInit
): Promise<TResponse> => {
  const response = await fetch(input, config);

  if (response.ok) {
    return await parseResponse<TResponse>(response);
  }

  throw response;
};

export default serviceRequest;
