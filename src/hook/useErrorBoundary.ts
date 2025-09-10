'use client';

import { useState, useCallback } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export const useErrorBoundary = () => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
  });

  const handleError = useCallback((error: Error) => {
    console.error('Error caught by useErrorBoundary:', error);
    setErrorState({ hasError: true, error });
  }, []);

  const resetError = useCallback(() => {
    setErrorState({ hasError: false, error: undefined });
  }, []);

  const throwError = useCallback((error: Error) => {
    handleError(error);
  }, [handleError]);

  return {
    hasError: errorState.hasError,
    error: errorState.error,
    handleError,
    resetError,
    throwError,
  };
};

export default useErrorBoundary;

