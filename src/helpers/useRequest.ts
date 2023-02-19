import { useState } from 'react';
import { Result } from '../model/requests/Utility.types';

export function useRequest<Error, Response, Props>(
  request: (props: Props) => Promise<Result<Error, Response>>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response>();
  const [error, setError] = useState<Error>();

  const execute = async (props: Props) => {
    setIsLoading(true);
    const [error, response] = await request(props);

    if (error) {
      setError(error);
    }

    if (response) {
      setResponse(response);
    }
    setIsLoading(false);
  };

  return {
    response,
    error,
    isLoading,
    execute,
  };
}
