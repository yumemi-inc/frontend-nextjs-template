/** @format */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App
