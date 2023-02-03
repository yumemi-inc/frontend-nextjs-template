/** @format */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil";
import "reset-css"

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App
