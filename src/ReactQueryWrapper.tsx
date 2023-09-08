import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ReactQueryWrapperProps {
  children?: JSX.Element;
}

export const ReactQueryWrapper: React.FC<ReactQueryWrapperProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
