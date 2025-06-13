import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '@/components/ThemeProvider';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}