import type { AppProps } from "next/app";
import "~~/src/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {

  return (
          <div className="bg-black fixed inset-0">
            <main>
              <Component {...pageProps} />
            </main>
          </div>
  );
};

export default App;
