import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";

function CustomUser() {
  const { user } = useUser();
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Global에 useSWR fetcher... 등 함수 기본 설정 */}
      <SWRConfig
        value={{
          // refreshInterval: 2000,
          fetcher: (url: string) =>
            fetch(url).then((response) => response.json()),
        }}
      >
        <CustomUser />
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}

export default MyApp;
