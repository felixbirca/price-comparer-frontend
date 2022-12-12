import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <Auth0Provider
      domain="dev-bzg6zzl8.us.auth0.com"
      clientId="jBXT5uMMmwlH5oWLKm2HZC9SNHxiktzG"
      redirectUri={"http://localhost:3000/"}
      audience="https://eastlevant.com"
      scope="read:current_user update:current_user_metadata"
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default MyApp;
