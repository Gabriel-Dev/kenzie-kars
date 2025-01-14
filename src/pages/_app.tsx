import "@/styles/globals.css";
import "@/styles/typography.css";
import "@/styles/buttons.css";
import "@/styles/inputs.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/authContext";
import { FilterProvider } from "@/contexts/filterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </AuthProvider>
  );
}
